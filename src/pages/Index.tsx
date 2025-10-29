import Navigation from "@/components/Navigation";
import FallingStars from "@/components/FallingStars";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Achievements from "@/components/achievement";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FallingStars />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-6 border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Tummalapalli Aravind. All rights reserved.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>CSE Student | CyberSecurity Specialist</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Index;
