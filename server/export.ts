// CSV export utilities

export function generatePricingQuoteCSV(data: {
  quantity: number;
  unitPrice: number;
  discount: number;
  totalPrice: number;
  companyName?: string;
  contactName?: string;
}): string {
  const rows = [
    ['Firefly Energy - Pricing Quote', ''],
    ['Date', new Date().toLocaleDateString()],
    [''],
    data.companyName ? ['Company', data.companyName] : null,
    data.contactName ? ['Contact', data.contactName] : null,
    [''],
    ['Item', 'Value'],
    ['Quantity', data.quantity.toString()],
    ['Unit Price', `$${data.unitPrice.toFixed(2)}`],
    ['Discount', `${data.discount}%`],
    ['Total Price', `$${data.totalPrice.toFixed(2)}`],
    [''],
    ['Volume Discount Tiers:', ''],
    ['1-49 units', '18% off MSRP ($369/unit)'],
    ['50-99 units', '22% off MSRP ($351/unit)'],
    ['100+ units', '25% off MSRP ($337.50/unit)'],
    ['500+ units', 'Wholesale at $280/unit'],
  ].filter(Boolean);

  return rows.map(row => row!.map(cell => `"${cell}"`).join(',')).join('\n');
}

export function generateLeadsCSV(leads: Array<{
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone?: string | null;
  location: string;
  segment: string;
  estimatedVolume: number;
  priority: string;
  status: string;
  createdAt: Date;
}>): string {
  const headers = ['ID', 'Company', 'Contact', 'Email', 'Phone', 'Location', 'Segment', 'Est. Volume', 'Priority', 'Status', 'Created'];
  
  const rows = leads.map(lead => [
    lead.id,
    lead.companyName,
    lead.contactName,
    lead.email,
    lead.phone || '',
    lead.location,
    lead.segment,
    lead.estimatedVolume.toString(),
    lead.priority,
    lead.status,
    new Date(lead.createdAt).toLocaleDateString(),
  ]);

  const csv = [
    headers.map(h => `"${h}"`).join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  return csv;
}
