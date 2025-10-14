import { AdvancedComparison } from "@/components/AdvancedComparison";

export default function Comparison() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Battery Technology Comparison</h1>
        <p className="text-muted-foreground mt-1">
          Detailed analysis of Firefly MCF vs competing technologies
        </p>
      </div>
      <AdvancedComparison />
    </div>
  );
}
