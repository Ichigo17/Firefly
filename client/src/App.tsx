import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Dashboard from "@/pages/Dashboard";
import AIAssistant from "@/pages/AIAssistant";
import ProductFinderPage from "@/pages/ProductFinderPage";
import Pricing from "@/pages/Pricing";
import ROI from "@/pages/ROI";
import Leads from "@/pages/Leads";
import Settings from "@/pages/Settings";
import Pipeline from "@/pages/Pipeline";
import Resources from "@/pages/Resources";
import Comparison from "@/pages/Comparison";
import NotFound from "@/pages/not-found";
import { Battery } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/ai-assistant" component={AIAssistant} />
      <Route path="/product-finder" component={ProductFinderPage} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/roi" component={ROI} />
      <Route path="/comparison" component={Comparison} />
      <Route path="/pipeline" component={Pipeline} />
      <Route path="/leads" component={Leads} />
      <Route path="/resources" component={Resources} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger data-testid="button-sidebar-toggle" />
                    <div className="flex items-center gap-2">
                      <Battery className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Firefly Energy</span>
                    </div>
                  </div>
                  <ThemeToggle />
                </header>
                <main className="flex-1 overflow-auto">
                  <div className="container mx-auto p-6 max-w-7xl">
                    <Router />
                  </div>
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
