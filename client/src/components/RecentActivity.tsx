import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building2, DollarSign, MessageSquare, Package } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "lead",
    company: "Marine Solutions Inc",
    action: "New lead captured",
    segment: "Marine",
    time: "2 hours ago",
    icon: MessageSquare,
    color: "text-chart-3",
  },
  {
    id: 2,
    type: "order",
    company: "RV World Texas",
    action: "Placed order for 150 units",
    segment: "RV",
    time: "5 hours ago",
    icon: Package,
    color: "text-chart-2",
  },
  {
    id: 3,
    type: "distributor",
    company: "Solar Energy FL",
    action: "Became active distributor",
    segment: "Solar",
    time: "1 day ago",
    icon: Building2,
    color: "text-chart-1",
  },
  {
    id: 4,
    type: "quote",
    company: "Fleet Services CA",
    action: "Requested pricing quote",
    segment: "Trucking",
    time: "2 days ago",
    icon: DollarSign,
    color: "text-chart-4",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 hover-elevate p-2 rounded-lg -mx-2">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-muted">
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.company}</p>
                  <Badge variant="outline" className="text-xs">
                    {activity.segment}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
