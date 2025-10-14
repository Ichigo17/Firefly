import { LeadQualification } from "@/components/LeadQualification";

export default function Leads() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Lead Qualification</h1>
        <p className="text-muted-foreground mt-1">
          Capture and prioritize distributor prospects
        </p>
      </div>
      <LeadQualification />
    </div>
  );
}
