import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { auditLogs } from "@/lib/data";

export default function AuditLogsPage() {
  return (
    <PageLayout title="Audit Logs">
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="text-muted-foreground">{log.date}</TableCell>
                <TableCell className="font-medium">{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell className="text-muted-foreground">{log.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </PageLayout>
  );
}
