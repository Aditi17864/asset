import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { getTicketById, getTicketComments } from "@/lib/data";
import { TicketDetails } from "@/components/tickets/TicketDetails";


export default function TicketDetailPage({ params }: { params: { id: string } }) {
  const ticket = getTicketById(params.id);

  if (!ticket) {
    notFound();
  }
  const comments = getTicketComments(ticket.id);

  return (
    <PageLayout title={`Ticket: ${ticket.id}`}>
      <TicketDetails ticket={ticket} comments={comments} />
    </PageLayout>
  );
}
