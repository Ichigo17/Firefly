import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatWithAssistant, streamChatWithAssistant } from "./openai";
import { insertLeadSchema, insertActivitySchema } from "@shared/schema";
import { generatePricingQuoteCSV, generateLeadsCSV } from "./export";
import { seedDatabase } from "./seed";

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Assistant Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request: messages array required" });
      }

      const response = await chatWithAssistant(messages);
      res.json({ response });
    } catch (error: any) {
      console.error("Chat error:", error);
      res.status(500).json({ error: error.message || "Failed to process chat request" });
    }
  });

  // AI Assistant Chat with streaming
  app.post("/api/chat/stream", async (req, res) => {
    try {
      const { messages } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request: messages array required" });
      }

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const stream = await streamChatWithAssistant(messages);
      const reader = stream.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const text = decoder.decode(value);
        res.write(`data: ${JSON.stringify({ content: text })}\n\n`);
      }

      res.write("data: [DONE]\n\n");
      res.end();
    } catch (error: any) {
      console.error("Stream chat error:", error);
      res.status(500).json({ error: error.message || "Failed to process streaming chat request" });
    }
  });

  // Lead endpoints
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error: any) {
      console.error("Get leads error:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);
      
      await storage.createActivity({
        type: "lead",
        description: `New lead: ${lead.companyName} - ${lead.segment}`,
        relatedId: lead.id,
      });
      
      res.status(201).json(lead);
    } catch (error: any) {
      console.error("Create lead error:", error);
      res.status(400).json({ error: error.message || "Failed to create lead" });
    }
  });

  app.patch("/api/leads/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = insertLeadSchema.partial().parse(req.body);
      const lead = await storage.updateLead(id, updateData);
      
      if (!lead) {
        return res.status(404).json({ error: "Lead not found" });
      }
      
      res.json(lead);
    } catch (error: any) {
      console.error("Update lead error:", error);
      res.status(400).json({ error: error.message || "Failed to update lead" });
    }
  });

  // Activity endpoints
  app.get("/api/activities", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const activities = await storage.getActivities(limit);
      res.json(activities);
    } catch (error: any) {
      console.error("Get activities error:", error);
      res.status(500).json({ error: "Failed to fetch activities" });
    }
  });

  // Distributor endpoints
  app.get("/api/distributors", async (req, res) => {
    try {
      const distributors = await storage.getDistributors();
      res.json(distributors);
    } catch (error: any) {
      console.error("Get distributors error:", error);
      res.status(500).json({ error: "Failed to fetch distributors" });
    }
  });

  // Export endpoints
  app.get("/api/export/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      const csv = generateLeadsCSV(leads);
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=firefly-leads.csv');
      res.send(csv);
    } catch (error: any) {
      console.error("Export leads error:", error);
      res.status(500).json({ error: "Failed to export leads" });
    }
  });

  app.post("/api/export/quote", async (req, res) => {
    try {
      const { quantity, unitPrice, discount, totalPrice, companyName, contactName } = req.body;
      const csv = generatePricingQuoteCSV({ quantity, unitPrice, discount, totalPrice, companyName, contactName });
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=firefly-quote.csv');
      res.send(csv);
    } catch (error: any) {
      console.error("Export quote error:", error);
      res.status(500).json({ error: "Failed to export quote" });
    }
  });

  // Database seeding endpoint (for demo purposes)
  app.post("/api/admin/seed", async (req, res) => {
    try {
      await seedDatabase();
      res.json({ message: "Database seeded successfully" });
    } catch (error: any) {
      console.error("Seed database error:", error);
      res.status(500).json({ error: "Failed to seed database" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
