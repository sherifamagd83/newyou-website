import { useEffect } from "react";
import { Switch, Route, Router } from "wouter";
import { Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Phone, ArrowRight } from "lucide-react";
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
import Telehealth from "@/pages/Telehealth";
import BookOnline from "@/pages/BookOnline";
import Quiz from "@/pages/Quiz";
import VitaminStore from "@/pages/VitaminStore";
import SupportGroups from "@/pages/SupportGroups";
import HairRestoration from "@/pages/HairRestoration";
import SkinTightening from "@/pages/SkinTightening";
import RedLightTherapy from "@/pages/RedLightTherapy";
import DuodenalSwitch from "@/pages/DuodenalSwitch";
import SADIS from "@/pages/SADIS";
import ORBERA from "@/pages/ORBERA";
import FAQs from "@/pages/FAQs";
import FreeCookbook from "@/pages/FreeCookbook";
import PatientForms from "@/pages/PatientForms";
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
      <main className="min-h-screen pb-16 sm:pb-0">
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
          <Route path="/telehealth" component={Telehealth} />
          <Route path="/book" component={BookOnline} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/vitamins" component={VitaminStore} />
          <Route path="/support-groups" component={SupportGroups} />
          <Route path="/hair-restoration" component={HairRestoration} />
          <Route path="/skin-tightening" component={SkinTightening} />
          <Route path="/red-light-therapy" component={RedLightTherapy} />
          <Route path="/procedures/duodenal-switch" component={DuodenalSwitch} />
          <Route path="/procedures/sadi-s" component={SADIS} />
          <Route path="/procedures/orbera" component={ORBERA} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/free-cookbook" component={FreeCookbook} />
          <Route path="/patient-forms" component={PatientForms} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ChatWidget />
      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-3 flex gap-2 sm:hidden">
        <a href="tel:+13148877605" className="flex-1 bg-navy text-white text-center font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm" data-testid="mobile-cta-call">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <Link href="/book" className="flex-1 bg-magenta text-white text-center font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm" data-testid="mobile-cta-book">
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
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
