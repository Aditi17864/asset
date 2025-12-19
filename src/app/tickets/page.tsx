import { PageLayout } from "@/components/layout/PageLayout";
import { tickets } from "@/lib/data";
import { CreateTicketDialog } from "@/components/tickets/CreateTicketDialog";
import { TicketsDataTable } from "@/components/tickets/TicketsDataTable";

export default function TicketsPage() {
  return (
    <PageLayout title="Helpdesk Tickets" headerActions={<CreateTicketDialog />}>
      <TicketsDataTable tickets={tickets} />
    </PageLayout>
  );
}
