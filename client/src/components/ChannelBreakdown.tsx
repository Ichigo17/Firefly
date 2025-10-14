import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Marine", value: 40, color: "hsl(var(--chart-1))" },
  { name: "RV", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Energy Backup", value: 25, color: "hsl(var(--chart-3))" },
  { name: "Other", value: 10, color: "hsl(var(--chart-4))" },
];

export function ChannelBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Channel Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
