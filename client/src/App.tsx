import { useEffect } from "react";
import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Home from "@/pages/Home";
import StartHere from "@/pages/StartHere";
import Procedures from "@/pages/Procedures";
import GastricSleeve from "@/pages/GastricSleeve";
import GastricBypass from "@/pages/GastricBypass";
import RevisionSurgery from "@/pages/RevisionSurgery";
import GLP1 from "@/pages/GLP1";
import NonSurgical from "@/pages/NonSurgical";
import Results from "@/pages/Results";
import DrLange from "@/pages/DrLange";
import Insurance from "@/pages/Insurance";
import ForPatients from "@/pages/ForPatients";
import Resources from "@/pages/Resources";
import Reframe from "@/pages/Reframe";
import Aesthetics from "@/pages/Aesthetics";
import RequestConsultation from "@/pages/RequestConsultation";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useHashLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/start-here" component={StartHere} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/procedures/gastric-sleeve" component={GastricSleeve} />
          <Route path="/procedures/gastric-bypass" component={GastricBypass} />
          <Route path="/procedures/revision-surgery" component={RevisionSurgery} />
          <Route path="/glp1" component={GLP1} />
          <Route path="/non-surgical" component={NonSurgical} />
          <Route path="/results" component={Results} />
          <Route path="/dr-lange" component={DrLange} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/for-patients" component={ForPatients} />
          <Route path="/resources" component={Resources} />
          <Route path="/reframe" component={Reframe} />
          <Route path="/aesthetics" component={Aesthetics} />
          <Route path="/request-consultation" component={RequestConsultation} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router hook={useHashLocation}>
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
