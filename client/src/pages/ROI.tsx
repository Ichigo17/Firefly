import { ROIComparison } from "@/components/ROIComparison";

export default function ROI() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">ROI Comparison</h1>
        <p className="text-muted-foreground mt-1">
          Compare Firefly MCF performance against AGM and Lithium batteries
        </p>
      </div>
      <ROIComparison />
    </div>
  );
}
