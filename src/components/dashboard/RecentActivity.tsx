import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentActivity } from "@/lib/data";

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                {activity.action}
              </p>
              <p className="text-sm text-muted-foreground">
                {activity.details}
              </p>
            </div>
            <div className="ml-auto text-sm text-muted-foreground">
                {activity.date.split(' ')[1]}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
