import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Battery, CheckCircle2 } from "lucide-react";

const applications = [
  { value: "marine", label: "Marine & Offshore" },
  { value: "rv", label: "Recreational Vehicles (RV)" },
  { value: "trucking", label: "Trucking & Commercial Fleet" },
  { value: "solar", label: "Solar & Off-Grid Power" },
];

const recommendations = {
  marine: {
    model: "Firefly MCF G31M",
    specs: ["3600+ cycles at 50% DOD", "Vibration resistant", "Temperature: -20°C to +60°C"],
    benefits: ["Superior cycle life for marine applications", "Resistant to harsh conditions", "Fast charging capability"],
  },
  rv: {
    model: "Firefly MCF RV Series",
    specs: ["Compact design", "Maintenance-free", "Silent operation"],
    benefits: ["Perfect for off-grid living", "Reliable power delivery", "Extended lifespan"],
  },
  trucking: {
    model: "Firefly MCF Fleet Series",
    specs: ["Fast-charging", "High efficiency 90-95%", "Robust construction"],
    benefits: ["Reduces downtime", "Fleet telematics compatible", "Cost-effective operation"],
  },
  solar: {
    model: "Firefly MCF Solar Storage",
    specs: ["Scalable capacity", "Deep discharge tolerance", "Long cycle life"],
    benefits: ["Ideal for microgrids", "Remote installation ready", "High efficiency storage"],
  },
};

export function ProductFinder() {
  const [application, setApplication] = useState<string>("");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleFind = () => {
    if (application) {
      setShowRecommendation(true);
    }
  };

  const recommendation = application ? recommendations[application as keyof typeof recommendations] : null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find the Right Battery</CardTitle>
          <CardDescription>
            Answer a few questions to get personalized battery recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="application">Primary Application</Label>
            <Select value={application} onValueChange={setApplication}>
              <SelectTrigger id="application" data-testid="select-application">
                <SelectValue placeholder="Select your application" />
              </SelectTrigger>
              <SelectContent>
                {applications.map((app) => (
                  <SelectItem key={app.value} value={app.value}>
                    {app.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleFind} disabled={!application} data-testid="button-find-battery">
            Find My Battery
          </Button>
        </CardContent>
      </Card>

      {showRecommendation && recommendation && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Battery className="h-5 w-5 text-primary" />
              <CardTitle>Recommended: {recommendation.model}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Technical Specifications</h4>
              <div className="space-y-1">
                {recommendation.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-chart-2" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Key Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {recommendation.benefits.map((benefit, i) => (
                  <Badge key={i} variant="secondary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
