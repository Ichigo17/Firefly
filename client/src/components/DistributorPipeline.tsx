import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, MapPin, TrendingUp } from "lucide-react";

const pipelineStages = [
  {
    title: "Prospecting",
    count: 8,
    leads: [
      { company: "Coastal Marine FL", location: "Florida", volume: 150, priority: "high" },
      { company: "Desert Solar AZ", location: "Arizona", volume: 80, priority: "medium" },
    ],
  },
  {
    title: "Qualified",
    count: 5,
    leads: [
      { company: "Gulf RV Center", location: "Texas", volume: 200, priority: "high" },
      { company: "Pacific Fleet CA", location: "California", volume: 120, priority: "medium" },
    ],
  },
  {
    title: "Negotiation",
    count: 3,
    leads: [
      { company: "SunPower Solutions", location: "California", volume: 350, priority: "high" },
    ],
  },
  {
    title: "Closed",
    count: 12,
    leads: [
      { company: "Marine Pro Group", location: "Florida", volume: 500, priority: "high" },
    ],
  },
];

export function DistributorPipeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Distributor Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pipelineStages.map((stage) => (
            <div key={stage.title} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">{stage.title}</h3>
                <Badge variant="secondary">{stage.count}</Badge>
              </div>
              <div className="space-y-2">
                {stage.leads.map((lead, idx) => (
                  <Card key={idx} className="p-3 hover-elevate cursor-pointer">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2 min-w-0">
                          <Building2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                          <span className="text-sm font-medium line-clamp-2">{lead.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{lead.location}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-xs">
                          <TrendingUp className="h-3 w-3" />
                          <span className="font-mono">{lead.volume}/mo</span>
                        </div>
                        <Badge 
                          variant={lead.priority === "high" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {lead.priority}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
