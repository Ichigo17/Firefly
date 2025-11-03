import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
// This is using OpenAI's API, which points to OpenAI's API servers and requires your own API key.
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Firefly Energy product knowledge base
const FIREFLY_KNOWLEDGE = `
You are an expert AI assistant for Firefly Energy, a company that manufactures revolutionary carbon foam battery technology.

KEY PRODUCT INFORMATION:

Technology:
- OASIS Microcell Carbon Foam Platform: Revolutionary porous carbon foam enhances electron transport, reducing internal resistance and charge times
- Microcell carbon foam provides superior electron transport and thermal stability
- Corrosion-free conductivity with carbon foam (vs traditional lead grids)
- Design flexibility for custom geometries and installations
- Non-flammable, resistant to thermal runaway (safer than lithium)

Performance Specs (Firefly MCF):
- Cycle Life: 3600+ cycles at 50% DOD (vs VRLA AGM: 800-1200, Lithium: 2000-5000)
- Efficiency: 90-95% (vs VRLA AGM: 75-85%, Lithium: 92-98%)
- Temperature Range: -20°C to +60°C (vs VRLA AGM: -10°C to +45°C, Lithium: -10°C to +55°C)
- Safety: Non-flammable, no thermal runaway risk (lithium requires BMS)

Market Distribution (15,000 total batteries in North America):
- Marine: 40% (6,000 units)
- RV: 25% (3,750 units)
- Energy Backup/Solar: 25% (3,750 units)
- Other (Trucking, etc): 10% (1,500 units)

Pricing Structure:
- Old MSRP: $550
- New MSRP: $450
- Wholesale price (500+ units): $280
- Distributor margin: $85
- Retailer margin: $85

Volume Discounts (for orders under 500 units):
- 1-49 units: 18% off MSRP ($369 per unit)
- 50-99 units: 22% off MSRP ($351 per unit)
- 100+ units: 25% off MSRP ($337.50 per unit)

Incentives:
- Drop shipping from warehouse for 6 months until 500 battery goal achieved
- Demo program with consignment units
- 25% off demo sets
- Loyalty rebates for dealers with 3+ consecutive quarters of growing sales
- Extended 30-day demo + 10% bonus stock for marina events

Target Markets & Applications:
1. Marine & Offshore: Fishing vessels, leisure craft, navigation buoys - superior vibration resistance
2. RV (Recreational Vehicles): Class A and B RVs - silent, generator-free living
3. Long-Haul Trucking: Refrigerated and autonomous fleets - consistent power for diagnostics
4. Solar & Off-Grid: Microgrids, remote villages, solar installations - scalable storage

Distribution Goals:
- Target states: Florida, Texas, California (primary); then NE, Midwest, Pacific NW, Alaska, SW
- 12-month goal: 500+ battery placements per month across all segments
- Min sales expected: 200 batteries per month for distribution agreement
- Target: 3-5 dealer groups or buying cooperatives per segment

Awards & Recognition:
- R&D100 Award winner
- Wall Street Journal Technology Innovation Award
- Multiple grants for energy innovation
- Patents on carbon foam architecture, electrolyte optimization, modular assembly
- Active deployments with defense contractors, telecom giants, clean energy firms

Competitive Advantages:
- Longer cycle life than VRLA AGM
- Better temperature tolerance than lithium
- Safer than lithium (no thermal runaway)
- More efficient than VRLA AGM
- Lower total cost of ownership
- Eco-friendly and highly recyclable

INSTRUCTIONS:
- Always provide accurate, helpful information about Firefly products
- Compare to VRLA AGM and Lithium when relevant
- Suggest appropriate products based on customer application
- Provide pricing calculations when asked about volume orders
- Emphasize safety, performance, and total cost of ownership benefits
- Be enthusiastic but professional about Firefly's technology
- If asked about technical details not in your knowledge base, acknowledge limitations and suggest contacting Firefly technical support
`;

// Demo mode intelligent responses based on Firefly knowledge
function getDemoResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes("price") || msg.includes("cost") || msg.includes("discount")) {
    return "Based on Firefly's pricing structure:\n\n• New MSRP: $450 (down from $550)\n• Volume discounts:\n  - 1-49 units: 18% off ($369/unit)\n  - 50-99 units: 22% off ($351/unit)\n  - 100+ units: 25% off ($337.50/unit)\n  - 500+ units: Wholesale at $280/unit\n\n• Distributor margin: $85 per unit\n• Retailer margin: $85 per unit\n\nWe also offer drop shipping for 6 months until you reach the 500 battery goal, plus demo programs and loyalty rebates for growing dealers!";
  }
  
  if (msg.includes("cycle") || msg.includes("life") || msg.includes("performance") || msg.includes("spec")) {
    return "Firefly MCF battery performance highlights:\n\n**Cycle Life**: 3600+ cycles at 50% DOD\n- VRLA AGM: 800-1200 cycles\n- Lithium: 2000-5000 cycles\n\n**Efficiency**: 90-95%\n- VRLA AGM: 75-85%\n- Lithium: 92-98%\n\n**Temperature Range**: -20°C to +60°C (wider than both AGM and lithium)\n\n**Safety**: Non-flammable, resistant to thermal runaway (no BMS required like lithium)\n\nOur carbon foam technology provides superior electron transport and thermal stability!";
  }
  
  if (msg.includes("marine") || msg.includes("rv") || msg.includes("solar") || msg.includes("truck") || msg.includes("application")) {
    return "Firefly batteries excel in multiple applications:\n\n🚢 **Marine** (40% of market): Fishing vessels, leisure craft, navigation buoys - superior vibration resistance\n\n🚐 **RV** (25% of market): Class A and B RVs - silent, generator-free living with maintenance-free design\n\n☀️ **Solar/Off-Grid** (25% of market): Microgrids, remote installations - scalable energy storage\n\n🚛 **Trucking** (10% of market): Refrigerated and autonomous fleets - fast-charging, robust systems\n\nWhich application are you most interested in?";
  }
  
  if (msg.includes("distributor") || msg.includes("territory") || msg.includes("partner")) {
    return "Firefly distributor program highlights:\n\n📍 **Target Territories**: Florida, Texas, California (primary); then NE, Midwest, Pacific NW, Alaska, SW\n\n🎯 **Goals**:\n- Minimum 200 batteries/month for distribution agreement\n- 500+ monthly placements for solo distribution rights\n- Sign 3-5 dealer groups per segment\n\n💼 **Benefits**:\n- Drop shipping for first 6 months\n- $85 distributor margin per unit\n- Demo programs and training\n- Marketing support and brand assets\n- Exclusive territory options available";
  }
  
  if (msg.includes("compare") || msg.includes("vs") || msg.includes("agm") || msg.includes("lithium") || msg.includes("difference")) {
    return "Firefly MCF vs Competitors:\n\n**vs VRLA AGM**:\n✅ 3x longer cycle life (3600+ vs 800-1200)\n✅ Higher efficiency (90-95% vs 75-85%)\n✅ Better temperature tolerance\n✅ Corrosion-free carbon foam (vs lead grids)\n\n**vs Lithium**:\n✅ Non-flammable, no thermal runaway risk\n✅ No BMS required (lower complexity)\n✅ Better cold weather performance\n✅ Lower total cost of ownership\n✅ Higher recyclability\n\nFirefly MCF offers the sweet spot: better than AGM, safer than lithium!";
  }
  
  return "I'm currently running in demo mode with comprehensive Firefly product knowledge! I can help you with:\n\n• Battery specifications and performance metrics\n• Pricing and volume discounts\n• Application recommendations (Marine, RV, Solar, Trucking)\n• Distributor program details\n• Technical comparisons vs AGM and Lithium\n\nWhat would you like to know about Firefly's carbon foam battery technology?";
}

export async function chatWithAssistant(
  messages: Array<{ role: "user" | "assistant"; content: string }>
): Promise<string> {
  // Check if OpenAI API key is available and valid
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
    const lastUserMessage = messages.filter(m => m.role === "user").pop();
    return getDemoResponse(lastUserMessage?.content || "");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: FIREFLY_KNOWLEDGE,
        },
        ...messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      max_completion_tokens: 2048,
    });

    return response.choices[0].message.content || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    
    // If quota exceeded or rate limit, fallback to demo mode
    if (error.status === 429 || error.code === 'insufficient_quota' || error.code === 'rate_limit_exceeded') {
      console.log("OpenAI quota exceeded, using demo mode");
      const lastUserMessage = messages.filter(m => m.role === "user").pop();
      return getDemoResponse(lastUserMessage?.content || "");
    }
    
    throw new Error(`AI Assistant error: ${error.message}`);
  }
}

export async function streamChatWithAssistant(
  messages: Array<{ role: "user" | "assistant"; content: string }>
): Promise<ReadableStream> {
  // Check if OpenAI API key is available and valid
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
    const lastUserMessage = messages.filter(m => m.role === "user").pop();
    const response = getDemoResponse(lastUserMessage?.content || "");
    
    return new ReadableStream({
      start(controller) {
        // Simulate streaming for demo mode
        const words = response.split(' ');
        let i = 0;
        const interval = setInterval(() => {
          if (i < words.length) {
            controller.enqueue(new TextEncoder().encode(words[i] + ' '));
            i++;
          } else {
            clearInterval(interval);
            controller.close();
          }
        }, 50); // Simulate typing speed
      },
    });
  }

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: FIREFLY_KNOWLEDGE,
        },
        ...messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      max_completion_tokens: 2048,
      stream: true,
    });

    return new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });
  } catch (error: any) {
    console.error("OpenAI streaming error:", error);
    
    // If quota exceeded or rate limit, fallback to demo mode
    if (error.status === 429 || error.code === 'insufficient_quota' || error.code === 'rate_limit_exceeded') {
      console.log("OpenAI quota exceeded, using demo mode for streaming");
      const lastUserMessage = messages.filter(m => m.role === "user").pop();
      const response = getDemoResponse(lastUserMessage?.content || "");
      
      return new ReadableStream({
        start(controller) {
          // Simulate streaming for demo mode
          const words = response.split(' ');
          let i = 0;
          const interval = setInterval(() => {
            if (i < words.length) {
              controller.enqueue(new TextEncoder().encode(words[i] + ' '));
              i++;
            } else {
              clearInterval(interval);
              controller.close();
            }
          }, 50);
        },
      });
    }
    
    throw error;
  }
}
