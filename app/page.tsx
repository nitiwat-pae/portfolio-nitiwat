import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <WorkHistory />
      <Education />
      <Skills />
      <Certificates />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
