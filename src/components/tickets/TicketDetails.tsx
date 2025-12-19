"use client"

import { Ticket, TicketComment } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { User, Calendar, Tag, AlertTriangle } from "lucide-react";

interface TicketDetailsProps {
    ticket: Ticket;
    comments: TicketComment[];
}

export function TicketDetails({ ticket, comments }: TicketDetailsProps) {

    const getPriorityBadge = (priority: string) => {
        switch (priority) {
          case 'High': return 'destructive';
          case 'Medium': return 'default';
          case 'Low': return 'secondary';
          default: return 'outline';
        }
    };

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{ticket.title}</CardTitle>
                        <CardDescription>{ticket.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-4">Comments</h3>
                                <div className="space-y-6">
                                {comments.map(comment => (
                                    <div key={comment.id} className="flex items-start gap-4">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={comment.avatarUrl} />
                                            <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <p className="font-medium text-sm">{comment.user}</p>
                                                <p className="text-xs text-muted-foreground">{comment.date}</p>
                                            </div>
                                            <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-md">{comment.comment}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4 border-t pt-6">
                         <h3 className="font-semibold">Add a comment</h3>
                         <Textarea placeholder="Type your comment here..." />
                         <Button>Post Comment</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Ticket Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Status</span>
                            <Badge variant={ticket.status === 'Closed' || ticket.status === 'Resolved' ? 'outline' : 'default'}>{ticket.status}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Priority</span>
                            <Badge variant={getPriorityBadge(ticket.priority)}>{ticket.priority}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="size-4 text-muted-foreground" />
                            <span><strong>Requester:</strong> {ticket.requester}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="size-4 text-muted-foreground" />
                            <span><strong>Assigned:</strong> {ticket.assignedTo || 'Unassigned'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="size-4 text-muted-foreground" />
                            <span><strong>Created:</strong> {ticket.createdDate}</span>
                        </div>
                         {ticket.assetTag && (
                            <div className="flex items-center gap-2">
                                <Tag className="size-4 text-muted-foreground" />
                                <span><strong>Asset:</strong> {ticket.assetTag}</span>
                            </div>
                         )}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button className="w-full">Set to In Progress</Button>
                        <Button className="w-full" variant="outline">Resolve Ticket</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
