import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { getAssetById, getAssetHistory, users } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QRCode } from "@/components/shared/QRCode";
import { Timeline } from "@/components/shared/Timeline";
import { Calendar, Tag, User, MapPin, HardDrive, CheckCircle, Tool, Wrench, Package } from "lucide-react";

export default function AssetDetailPage({ params }: { params: { id: string } }) {
  const asset = getAssetById(params.id);

  if (!asset) {
    notFound();
  }

  const history = getAssetHistory(asset.assetTag);
  const timelineItems = history.map(h => ({
    title: h.event,
    date: h.date,
    description: h.details,
    icon: h.event === 'Assigned' ? <User className="size-3" /> : <Package className="size-3" />
  }));

  const getStatusIcon = (status: string) => {
    switch (status) {
        case 'In Use': return <CheckCircle className="size-4 text-green-500" />;
        case 'In Stock': return <Package className="size-4 text-blue-500" />;
        case 'In Repair': return <Wrench className="size-4 text-amber-500" />;
        case 'Retired': return <Tool className="size-4 text-muted-foreground" />;
        default: return <Package className="size-4" />;
    }
  }

  return (
    <PageLayout title={asset.name}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Asset Overview</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <Tag className="size-4 text-muted-foreground" />
                        <span><strong>Tag:</strong> {asset.assetTag}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <HardDrive className="size-4 text-muted-foreground" />
                        <span><strong>Category:</strong> {asset.category}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="size-4 text-muted-foreground" />
                        <span><strong>Location:</strong> {asset.location}</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <User className="size-4 text-muted-foreground" />
                        <span><strong>Assigned To:</strong> {asset.assignedTo || 'Unassigned'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Calendar className="size-4 text-muted-foreground" />
                        <span><strong>Purchase Date:</strong> {asset.purchaseDate}</span>
                    </div>
                     <div className="flex items-center gap-3">
                        {getStatusIcon(asset.status)}
                        <span><strong>Status:</strong> <Badge>{asset.status}</Badge></span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Assignment History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Timeline items={timelineItems} />
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <QRCode />
        </div>
      </div>
    </PageLayout>
  );
}
