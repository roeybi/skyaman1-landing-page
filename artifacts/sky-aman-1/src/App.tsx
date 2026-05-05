import { Switch, Route, Router as WouterRouter } from "wouter";
import { LandingPage } from "@/pages/LandingPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { ThankYou } from "@/pages/ThankYou";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#1C1B1A", fontFamily: "'Georgia', serif" }}>
      <div className="text-center">
        <p className="text-sm tracking-widest" style={{ color: "#B8914A" }}>404</p>
        <h1 className="text-2xl font-light mt-2" style={{ color: "#F2EDE3" }}>Page not found</h1>
        <a href={import.meta.env.BASE_URL} className="inline-block mt-6 text-xs tracking-widest underline" style={{ color: "#B8914A" }}>Return to Home</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
