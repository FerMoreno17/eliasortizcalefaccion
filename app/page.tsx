import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsappButton } from "@/components/layout/WhatsappButton";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <About />
        <Projects />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
