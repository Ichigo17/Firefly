import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

const cycleLifeData = [
  { name: "Firefly MCF", cycles: 3600, cost: 450 },
  { name: "VRLA AGM", cycles: 1000, cost: 200 },
  { name: "Lithium", cycles: 3000, cost: 800 },
];

const efficiencyData = [
  { name: "Firefly MCF", efficiency: 92.5 },
  { name: "VRLA AGM", efficiency: 80 },
  { name: "Lithium", efficiency: 95 },
];

const costPerCycle = [
  { name: "Firefly MCF", cost: 0.125 },
  { name: "VRLA AGM", cost: 0.20 },
  { name: "Lithium", cost: 0.267 },
];

export function AdvancedComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Battery Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="lifecycle">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lifecycle">Cycle Life</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="lifecycle" className="space-y-4">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={cycleLifeData}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="cycles" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-sm text-muted-foreground">
              <p>Firefly MCF batteries deliver 3.6x more cycles than AGM and 20% more than lithium at competitive pricing.</p>
            </div>
          </TabsContent>

          <TabsContent value="efficiency" className="space-y-4">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={efficiencyData}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="efficiency" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-sm text-muted-foreground">
              <p>92.5% efficiency rivals lithium while significantly outperforming traditional AGM batteries.</p>
            </div>
          </TabsContent>

          <TabsContent value="cost" className="space-y-4">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={costPerCycle}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value) => `$${value}`}
                />
                <Bar dataKey="cost" fill="hsl(var(--chart-4))" />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {costPerCycle.map((item) => (
                <div key={item.name} className="text-center p-3 rounded-lg bg-muted/50">
                  <div className="text-xs text-muted-foreground mb-1">{item.name}</div>
                  <div className="text-lg font-bold font-mono">${item.cost}</div>
                  <div className="text-xs text-muted-foreground">per cycle</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
