import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const territories = [
  { name: "Florida", distributors: 4, placements: 145, status: "active", color: "bg-chart-1" },
  { name: "Texas", distributors: 3, placements: 98, status: "active", color: "bg-chart-2" },
  { name: "California", distributors: 5, placements: 99, status: "active", color: "bg-chart-3" },
  { name: "Northeast", distributors: 0, placements: 0, status: "planned", color: "bg-muted" },
  { name: "Midwest", distributors: 0, placements: 0, status: "planned", color: "bg-muted" },
  { name: "Pacific NW", distributors: 0, placements: 0, status: "planned", color: "bg-muted" },
];

export function TerritoryMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Territory Coverage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {territories.map((territory) => (
            <div
              key={territory.name}
              className="p-4 rounded-lg border hover-elevate cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${territory.color}`} />
                  <h3 className="font-semibold">{territory.name}</h3>
                </div>
                <Badge variant={territory.status === "active" ? "default" : "outline"}>
                  {territory.status}
                </Badge>
              </div>
              {territory.status === "active" ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Distributors</span>
                    <span className="font-medium">{territory.distributors}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monthly Placements</span>
                    <span className="font-medium">{territory.placements}</span>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Expansion planned</p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
