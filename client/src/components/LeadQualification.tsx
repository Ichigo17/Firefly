import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LeadQualification() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    segment: "",
    location: "",
    monthlyVolume: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Lead Captured Successfully",
      description: "This prospect has been added to your pipeline.",
    });
  };

  const getPriority = () => {
    const volume = parseInt(formData.monthlyVolume) || 0;
    if (volume >= 200) return { label: "High Priority", variant: "default" as const };
    if (volume >= 100) return { label: "Medium Priority", variant: "secondary" as const };
    return { label: "Low Priority", variant: "outline" as const };
  };

  const priority = getPriority();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Qualification Form</CardTitle>
        <CardDescription>
          Capture distributor prospect information
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  data-testid="input-company"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Person</Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  data-testid="input-contact"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                data-testid="input-email"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="segment">Primary Segment</Label>
                <Select
                  value={formData.segment}
                  onValueChange={(value) => setFormData({ ...formData, segment: value })}
                  required
                >
                  <SelectTrigger id="segment" data-testid="select-segment">
                    <SelectValue placeholder="Select segment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marine">Marine</SelectItem>
                    <SelectItem value="rv">RV</SelectItem>
                    <SelectItem value="trucking">Trucking</SelectItem>
                    <SelectItem value="solar">Solar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => setFormData({ ...formData, location: value })}
                  required
                >
                  <SelectTrigger id="location" data-testid="select-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="florida">Florida</SelectItem>
                    <SelectItem value="texas">Texas</SelectItem>
                    <SelectItem value="california">California</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="volume">Expected Monthly Volume</Label>
              <Input
                id="volume"
                type="number"
                value={formData.monthlyVolume}
                onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                placeholder="Enter number of batteries per month"
                required
                data-testid="input-volume"
              />
            </div>

            {formData.monthlyVolume && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Priority Level:</span>
                <Badge variant={priority.variant}>{priority.label}</Badge>
              </div>
            )}

            <Button type="submit" className="w-full" data-testid="button-submit-lead">
              Submit Lead
            </Button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="rounded-full bg-chart-2/20 p-3">
                <CheckCircle2 className="h-8 w-8 text-chart-2" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Lead Captured Successfully</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {formData.company} has been added to your pipeline with {priority.label.toLowerCase()} status.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  company: "",
                  contact: "",
                  email: "",
                  segment: "",
                  location: "",
                  monthlyVolume: "",
                });
              }}
              data-testid="button-add-another"
            >
              Add Another Lead
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
