import { ProductFinder } from "@/components/ProductFinder";

export default function ProductFinderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Product Finder</h1>
        <p className="text-muted-foreground mt-1">
          Find the perfect Firefly battery for your application
        </p>
      </div>
      <ProductFinder />
    </div>
  );
}
