import { fetchAllPortfolioVideos } from "@/lib/youtube";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const videos = await fetchAllPortfolioVideos();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkSection videos={videos} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
