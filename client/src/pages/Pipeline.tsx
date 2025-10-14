import { DistributorPipeline } from "@/components/DistributorPipeline";
import { TerritoryMap } from "@/components/TerritoryMap";

export default function Pipeline() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Distribution Pipeline</h1>
        <p className="text-muted-foreground mt-1">
          Track distributor prospects and territory expansion
        </p>
      </div>
      <DistributorPipeline />
      <TerritoryMap />
    </div>
  );
}
