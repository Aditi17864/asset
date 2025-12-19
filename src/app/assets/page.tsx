import { PageLayout } from "@/components/layout/PageLayout";
import { assets } from "@/lib/data";
import { CreateAssetDialog } from "@/components/assets/CreateAssetDialog";
import { AssetsDataTable } from "@/components/assets/AssetsDataTable";

export default function AssetsPage() {
  return (
    <PageLayout title="Assets" headerActions={<CreateAssetDialog />}>
      <AssetsDataTable assets={assets} />
    </PageLayout>
  );
}
