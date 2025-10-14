import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, PlayCircle, Book } from "lucide-react";

const resources = [
  {
    title: "Product Specification Sheet",
    description: "Complete technical specifications for all Firefly MCF models",
    type: "PDF",
    category: "Technical",
    icon: FileText,
  },
  {
    title: "Installation Guide",
    description: "Step-by-step installation procedures for marine, RV, and solar applications",
    type: "PDF",
    category: "Installation",
    icon: Book,
  },
  {
    title: "Sales Presentation Deck",
    description: "Ready-to-use presentation highlighting Firefly's competitive advantages",
    type: "PPTX",
    category: "Sales",
    icon: FileText,
  },
  {
    title: "Product Demo Video",
    description: "10-minute overview of carbon foam technology and applications",
    type: "Video",
    category: "Training",
    icon: PlayCircle,
  },
  {
    title: "Distributor Onboarding Guide",
    description: "Complete guide for new distributors including pricing and logistics",
    type: "PDF",
    category: "Distributor",
    icon: Book,
  },
  {
    title: "ROI Calculator Template",
    description: "Excel template for customer ROI analysis",
    type: "XLSX",
    category: "Sales",
    icon: FileText,
  },
];

export function ResourcesLibrary() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, idx) => (
          <Card key={idx} className="hover-elevate">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <resource.icon className="h-5 w-5 text-primary shrink-0" />
                <Badge variant="outline">{resource.type}</Badge>
              </div>
              <CardTitle className="text-base mt-2">{resource.title}</CardTitle>
              <CardDescription className="text-sm">{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{resource.category}</Badge>
                <Button size="sm" variant="ghost" data-testid={`button-download-${idx}`}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
