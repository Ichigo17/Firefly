import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const segments = [
  { value: "marine", label: "Marine/RV/Solar" },
  { value: "trucking", label: "Trucking & Fleet" },
];

export function PricingCalculator() {
  const [quantity, setQuantity] = useState<number>(1);
  const [segment, setSegment] = useState<string>("marine");

  const msrp = 450;
  
  const getDiscount = () => {
    if (quantity >= 100) return 0.25;
    if (quantity >= 50) return 0.22;
    if (quantity >= 1) return 0.18;
    return 0;
  };

  const discount = getDiscount();
  const unitPrice = msrp * (1 - discount);
  const totalPrice = unitPrice * quantity;
  const distributorMargin = 85;
  const retailerMargin = 85;
  const wholesalePrice = 280;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pricing Calculator</CardTitle>
        <CardDescription>
          Calculate pricing and margins for your order
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="segment">Segment</Label>
            <Select value={segment} onValueChange={setSegment}>
              <SelectTrigger id="segment" data-testid="select-segment">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {segments.map((seg) => (
                  <SelectItem key={seg.value} value={seg.value}>
                    {seg.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Order Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              data-testid="input-quantity"
            />
          </div>
        </div>

        <div className="space-y-3 border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">MSRP per unit</span>
            <span className="font-mono font-medium">${msrp}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Discount</span>
            <Badge variant="secondary">{(discount * 100).toFixed(0)}% off</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Unit Price</span>
            <span className="font-mono font-medium" data-testid="text-unit-price">
              ${unitPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold border-t pt-3">
            <span>Total Price</span>
            <span className="font-mono" data-testid="text-total-price">
              ${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {quantity >= 500 && (
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-sm">Wholesale Pricing (500+ units)</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Wholesale Price</span>
                <span className="font-mono">${wholesalePrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distributor Margin</span>
                <span className="font-mono">${distributorMargin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Retailer Margin</span>
                <span className="font-mono">${retailerMargin}</span>
              </div>
            </div>
          </div>
        )}

        <div className="bg-primary/10 rounded-lg p-3">
          <p className="text-xs text-muted-foreground">
            {quantity < 50 && "Order 50+ units for 22% discount"}
            {quantity >= 50 && quantity < 100 && "Order 100+ units for 25% discount"}
            {quantity >= 100 && quantity < 500 && "Order 500+ units for wholesale pricing"}
            {quantity >= 500 && "Drop shipping available for 6 months"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
