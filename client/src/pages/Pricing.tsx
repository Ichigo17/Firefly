import { PricingCalculator } from "@/components/PricingCalculator";

export default function Pricing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pricing Calculator</h1>
        <p className="text-muted-foreground mt-1">
          Calculate pricing, discounts, and margins for your orders
        </p>
      </div>
      <PricingCalculator />
    </div>
  );
}
