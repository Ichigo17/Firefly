import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Cycle Life (50% DOD)",
    firefly: "3600+ cycles",
    agm: "800-1200 cycles",
    lithium: "2000-5000 cycles",
    fireflyWins: true,
  },
  {
    feature: "Efficiency",
    firefly: "90-95%",
    agm: "75-85%",
    lithium: "92-98%",
    fireflyWins: true,
  },
  {
    feature: "Temperature Range",
    firefly: "-20°C to +60°C",
    agm: "-10°C to +45°C",
    lithium: "-10°C to +55°C",
    fireflyWins: true,
  },
  {
    feature: "Safety",
    firefly: "Non-flammable",
    agm: "Gas emission risk",
    lithium: "Thermal runaway risk",
    fireflyWins: true,
  },
  {
    feature: "Maintenance",
    firefly: "Maintenance-free",
    agm: "Low maintenance",
    lithium: "BMS required",
    fireflyWins: true,
  },
  {
    feature: "Cost per Cycle",
    firefly: "$0.125",
    agm: "$0.458",
    lithium: "$0.090",
    fireflyWins: true,
  },
];

export function ROIComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Battery Technology Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Feature</th>
                <th className="text-left py-3 px-4 font-semibold">
                  <Badge variant="default">Firefly MCF</Badge>
                </th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">VRLA AGM</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Lithium</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b last:border-0 hover-elevate">
                  <td className="py-3 px-4 text-sm font-medium">{row.feature}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {row.fireflyWins && <CheckCircle2 className="h-4 w-4 text-chart-2" />}
                      <span className="font-mono text-sm">{row.firefly}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {row.fireflyWins && <XCircle className="h-4 w-4 text-muted-foreground" />}
                      <span className="font-mono text-sm text-muted-foreground">{row.agm}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {row.fireflyWins && <XCircle className="h-4 w-4 text-muted-foreground" />}
                      <span className="font-mono text-sm text-muted-foreground">{row.lithium}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm font-medium mb-2">Total Cost of Ownership Analysis</p>
          <p className="text-xs text-muted-foreground">
            Over a 10-year period, Firefly MCF batteries deliver superior value with 3x longer cycle life than AGM and competitive performance with lithium at a lower total cost.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
