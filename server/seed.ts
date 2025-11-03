// Database seeding script for demo data
import { storage } from "./storage";

export async function seedDatabase() {
  console.log("🌱 Seeding database with demo data...");

  try {
    // Seed leads
    const leads = [
      {
        companyName: "Marina Bay Distributors",
        contactName: "Sarah Johnson",
        email: "sarah@marinabay.com",
        phone: "(305) 555-0123",
        location: "Miami, FL",
        segment: "Marine",
        estimatedVolume: 250,
        priority: "High",
        status: "qualified",
        notes: "Strong interest in marine applications, operates 15 marinas"
      },
      {
        companyName: "Sunshine RV Supply",
        contactName: "Mike Torres",
        email: "mike@sunshinerv.com",
        phone: "(813) 555-0456",
        location: "Tampa, FL",
        segment: "RV",
        estimatedVolume: 180,
        priority: "Medium",
        status: "negotiation",
        notes: "Major RV dealership network across Florida"
      },
      {
        companyName: "Texas Solar Solutions",
        contactName: "David Chen",
        email: "david@texassolar.com",
        phone: "(512) 555-0789",
        location: "Austin, TX",
        segment: "Solar",
        estimatedVolume: 320,
        priority: "High",
        status: "prospecting",
        notes: "Expanding solar installation business in TX and NM"
      },
      {
        companyName: "Pacific Fleet Services",
        contactName: "Jennifer Lee",
        email: "jlee@pacificfleet.com",
        phone: "(619) 555-0234",
        location: "San Diego, CA",
        segment: "Trucking",
        estimatedVolume: 150,
        priority: "Medium",
        status: "prospecting",
        notes: "Refrigerated trucking fleet, interested in backup power"
      },
      {
        companyName: "Gulf Coast Marine",
        contactName: "Robert Martinez",
        email: "rmartinez@gulfcoast.com",
        phone: "(504) 555-0567",
        location: "New Orleans, LA",
        segment: "Marine",
        estimatedVolume: 420,
        priority: "High",
        status: "qualified",
        notes: "Large marine distributor with exclusive territory interest"
      },
    ];

    for (const lead of leads) {
      await storage.createLead(lead);
      await storage.createActivity({
        type: "lead",
        description: `New lead: ${lead.companyName} - ${lead.segment}`,
        relatedId: undefined,
      });
    }

    // Seed distributors
    const distributors = [
      {
        companyName: "Atlantic Marine Supply",
        contactName: "James Wilson",
        email: "james@atlanticmarine.com",
        phone: "(954) 555-0890",
        territory: "Southeast Florida",
        segments: JSON.stringify(["Marine", "RV"]),
        monthlyVolume: 380,
        status: "active"
      },
      {
        companyName: "Desert Energy Systems",
        contactName: "Maria Garcia",
        email: "maria@desertenergy.com",
        phone: "(602) 555-0345",
        territory: "Arizona/New Mexico",
        segments: JSON.stringify(["Solar", "Trucking"]),
        monthlyVolume: 290,
        status: "active"
      },
      {
        companyName: "Golden State Battery Co",
        contactName: "Kevin Park",
        email: "kevin@gsbattery.com",
        phone: "(415) 555-0678",
        territory: "Northern California",
        segments: JSON.stringify(["Marine", "Solar", "RV"]),
        monthlyVolume: 520,
        status: "active"
      },
    ];

    for (const distributor of distributors) {
      await storage.createDistributor(distributor);
      await storage.createActivity({
        type: "distributor",
        description: `Active distributor: ${distributor.companyName} - ${distributor.territory}`,
        relatedId: undefined,
      });
    }

    console.log("✅ Database seeded successfully!");
    console.log(`   - ${leads.length} leads created`);
    console.log(`   - ${distributors.length} distributors created`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}
