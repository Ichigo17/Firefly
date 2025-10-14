import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, MessageSquare, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "wouter";

const actions = [
  {
    title: "New Lead",
    description: "Capture prospect",
    icon: Users,
    href: "/leads",
    color: "text-chart-1",
  },
  {
    title: "Calculate Price",
    description: "Get pricing",
    icon: Calculator,
    href: "/pricing",
    color: "text-chart-2",
  },
  {
    title: "Compare ROI",
    description: "Show value",
    icon: TrendingUp,
    href: "/roi",
    color: "text-chart-3",
  },
  {
    title: "Ask AI",
    description: "Get answers",
    icon: MessageSquare,
    href: "/ai-assistant",
    color: "text-chart-4",
  },
  {
    title: "Find Product",
    description: "Match battery",
    icon: Zap,
    href: "/product-finder",
    color: "text-chart-5",
  },
  {
    title: "View Docs",
    description: "Resources",
    icon: FileText,
    href: "/resources",
    color: "text-chart-1",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {actions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Button
                variant="ghost"
                className="h-auto flex-col gap-2 p-4 w-full hover-elevate"
                data-testid={`button-quick-${action.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <action.icon className={`h-5 w-5 ${action.color}`} />
                <div className="text-center">
                  <div className="text-sm font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
