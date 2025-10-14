import { ResourcesLibrary } from "@/components/ResourcesLibrary";

export default function Resources() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resources & Training</h1>
        <p className="text-muted-foreground mt-1">
          Access distributor materials, technical documentation, and training resources
        </p>
      </div>
      <ResourcesLibrary />
    </div>
  );
}
