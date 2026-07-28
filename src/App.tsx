import "./App.css";
// import { DiscussionsSection } from "./components/discussions";
import { IntroductionSection } from "./components/intro";
import { TenetsSection } from "./components/tenets";
import { ThemesSection } from "./components/themes";
import { LogisticsSection } from "./components/logistics";
import { AgendaSection } from "./components/agenda";
import { SessionsSection } from "./components/sessions";
import { PastLightningTalksSection } from "./components/lightning";
import { ActivitiesSection } from "./components/activities";
import { ScrollToAnchor } from "./components/scroll";


function App() {
  return (
    <>
      <IntroductionSection />
      <TenetsSection />
      <ThemesSection dark />
      {/* <DiscussionsSection /> */}
      <LogisticsSection />
      <AgendaSection />
      <SessionsSection dark />
      <PastLightningTalksSection />
      <ActivitiesSection />
      <ScrollToAnchor />
    </>
  );
}

export default App;
