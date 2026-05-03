import About from "@/components/about";
import BlogGrid from "@/components/blog-grid";
import { Contact } from "@/components/contact";
import { CreativeHero } from "@/components/creative-hero";
import { CreativeProjects } from "@/components/creative-projects";
import { DynamicSkills } from "@/components/dynamic-skills";
import { InteractiveTimeline } from "@/components/interactive-timeline";
import { Navigation } from "@/components/navigation";

const Index = () => {
  return (
    <div className="overflow-x-hidden relative min-h-screen bg-background">
      {/* <FloatingSkills /> */}
      <Navigation />
      <CreativeHero />
      <About />
      <InteractiveTimeline />
      <CreativeProjects />
      <BlogGrid />
      <DynamicSkills />
      <Contact />
      <footer className="py-12 text-center border-t border-border/20 bg-gradient-card">
        <div className="container px-4 mx-auto">
          <p className="mb-4 font-mono text-sm text-muted-foreground">
            © 2025 Paksh Gupta
          </p>
          <div className="flex gap-2 justify-center items-center">
            <span className="text-xs text-muted-foreground">Built with</span>
            <div className="w-2 h-2 rounded-full bg-creative-purple animate-pulse-glow"></div>
            <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-hero">
              React, TypeScript & Creativity
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
