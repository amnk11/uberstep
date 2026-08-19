import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PromoBanner from "./components/PromoBanner";
import ExploreSection from "./components/ExploreSection";
import AccountSection from "./components/AccountSection";
import ReserveSection from "./components/ReserveSection";
import CompareSection from "./components/CompareSection";
import AlternatingStory from "./components/AlternatingStory";
import AppDownloadSection from "./components/AppDownloadSection";
import Disclaimers from "./components/Disclaimers";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black selection:bg-neutral-200">
      <Navbar />
      <HeroSection />
      <PromoBanner />
      <ExploreSection />
      <AccountSection />
      <ReserveSection />
      <CompareSection />
      <AlternatingStory />
      <AppDownloadSection />
      <Disclaimers />
      <Footer />
    </main>
  );
}
