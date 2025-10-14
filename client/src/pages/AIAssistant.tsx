import { AIAssistantChat } from "@/components/AIAssistantChat";

export default function AIAssistant() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Assistant</h1>
        <p className="text-muted-foreground mt-1">
          Get instant answers about Firefly products, pricing, and technical specifications
        </p>
      </div>
      <AIAssistantChat />
    </div>
  );
}
