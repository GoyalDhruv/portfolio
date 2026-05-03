import { Button } from "@/components/ui/button";
import { Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function CreativeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const downloadResume = () => {
    const url =
      "https://drive.google.com/file/d/1WD4dI7-yKdJYU5jK5zKOCEmHXRwtR5UL/view?usp=sharing";
    const link = document.createElement("a");
    link.href = url;
    link.download = "paksh_gupta_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Enhanced Background with Overlays */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10"></div>

        {/* Ghibli Image - Subtle on large screens, more visible on mobile */}
        <div className="absolute inset-0 opacity-30 lg:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-creative-purple/20 via-transparent to-creative-pink/20 z-20"></div>
          <img
            src="/placeholder.svg"
            alt="Ghibli inspired background"
            className="w-full h-full object-cover object-center scale-110 blur-[1px] lg:blur-[2px]"
          />
        </div>

        {/* Enhanced gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-30"></div>
      </div>

      {/* Floating Orbs with enhanced positioning */}
      <div className="absolute inset-0 overflow-hidden z-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-creative-purple/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-creative-pink/20 rounded-full animate-bounce-slow blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-creative-cyan/20 rounded-full animate-float blur-xl"></div>
        <div
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-creative-orange/15 rounded-full animate-float blur-2xl"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Interactive Mouse Follow */}
      <div
        className="absolute w-6 h-6 bg-gradient-accent rounded-full blur-sm transition-all duration-75 pointer-events-none z-40"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      ></div>

      {/* Creative Hero Layout with Personal Image */}
      <div className="relative z-40 flex items-center justify-center min-h-screen px-4">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/30 backdrop-blur-md border border-border/20 rounded-full text-primary font-mono text-sm animate-slide-up shadow-float">
                <Sparkles className="w-4 h-4 animate-pulse-glow" />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Available for opportunities
                </span>
              </div>

              {/* Creative Title */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-none animate-fade-in">
                  <span className="block bg-gradient-hero bg-clip-text text-transparent animate-text-gradient bg-[length:200%_200%]">
                    Paksh Gupta
                  </span>
                  <span className="block text-foreground mt-2">
                    Software Developer
                  </span>
                </h1>

                {/* Artistic separator */}
                <div
                  className="w-24 h-1 bg-gradient-accent rounded-full animate-slide-up mx-auto lg:mx-0"
                  style={{ animationDelay: "0.1s" }}
                ></div>
              </div>

              {/* Description */}
              <div
                className="space-y-6 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Building{" "}
                  <span className="text-creative-purple font-semibold">
                    modern web applications enhanced
                  </span>{" "}
                  with
                  <span className="text-creative-pink font-semibold">
                    {" "}
                    practical and intelligent
                  </span>
                  <span className="text-creative-orange font-semibold">
                    {" "}
                    AI Solutions
                  </span>
                </p>
                <p className="text-lg text-muted-foreground font-mono">
                  <span className="text-creative-purple">→</span> Currently
                  building analytics platforms at{" "}
                  <span className="font-semibold">TehriHills</span>
                </p>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  onClick={downloadResume}
                  size="lg"
                  className="bg-gradient-hero text-white hover:shadow-glow transition-all duration-500 hover:scale-105 group px-8 py-6 text-base"
                >
                  <Download className="mr-3 h-5 w-5 group-hover:animate-bounce-slow" />
                  Download Resume
                </Button>

                <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-500 hover:scale-105 px-8 py-6 text-base backdrop-blur-sm"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Let's Connect
                </Button>
              </div>

              {/* Social Links */}
              {/* <div
                className="flex items-center justify-center lg:justify-start gap-6 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                {[
                  {
                    icon: Github,
                    color: "creative-purple",
                    delay: "0s",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    color: "creative-pink",
                    delay: "0.2s",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    color: "creative-cyan",
                    delay: "0.4s",
                    label: "Email",
                  },
                ].map(({ icon: Icon, color, delay, label }, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`h-14 w-14 rounded-full border-2 border-${color}/20 hover:border-${color} hover:text-${color} hover:shadow-glow transition-all duration-500 hover:scale-110 animate-float backdrop-blur-sm`}
                    style={{ animationDelay: delay }}
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </Button>
                ))}
              </div> */}
            </div>

            {/* Right Side - Creative Image Section */}
            <div
              className="relative order-1 lg:order-2 animate-slide-up mt-20"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Main Image Container with Creative Effects */}
                <div className="relative">
                  {/* Floating geometric shapes */}
                  <div className="absolute -top-8 -left-8 w-20 h-20 border-2 border-creative-purple/30 rounded-2xl rotate-12 animate-float"></div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-creative-pink/20 rounded-full animate-bounce-slow blur-sm"></div>
                  <div className="absolute top-1/2 -left-12 w-6 h-6 bg-creative-cyan/40 rounded-full animate-pulse-glow"></div>
                  <div className="absolute top-20 -right-8 w-8 h-8 border border-creative-orange/40 rotate-45 animate-float"></div>

                  {/* Glass morphism frame */}
                  <div className="relative bg-card/20 backdrop-blur-xl border border-border/20 rounded-3xl p-6 shadow-float">
                    {/* Profile Image */}
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-creative-purple/20 via-creative-pink/20 to-creative-cyan/20 p-1">
                        <img
                          src="./me.png"
                          alt="Paksh Gupta"
                          className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Floating status indicator */}
                      <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border/20 rounded-full px-4 py-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-mono text-muted-foreground">
                          Available
                        </span>
                      </div>
                    </div>

                    {/* Creative Stats Around Image */}
                    {/* <div className="absolute -top-4 left-8 bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl px-4 py-2">
                      <div className="text-lg font-bold text-creative-purple">
                        1+ Years
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        Experience
                      </div>
                    </div> */}

                    {/* <div className="absolute -top-4 right-8 bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl px-4 py-2">
                      <div className="text-lg font-bold text-creative-pink">
                        10+
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        Projects
                      </div>
                    </div> */}

                    {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl px-4 py-2">
                      <div className="text-lg font-bold text-creative-cyan">
                        8.75
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        CGPA
                      </div>
                    </div> */}
                  </div>

                  {/* Code elements floating around */}
                  <div className="absolute top-8 -left-16 text-creative-purple/60 font-mono text-sm animate-pulse-glow transform -rotate-12">
                    {"<Developer />"}
                  </div>
                  <div className="absolute bottom-16 -right-12 text-creative-pink/60 font-mono text-sm animate-bounce-slow transform rotate-12">
                    {"{ creative: true }"}
                  </div>
                  <div className="absolute top-1/3 -right-20 text-creative-cyan/60 font-mono text-sm animate-float">
                    {"console.log('Hello!')"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-40">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-gradient-accent rounded-full mt-2 animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
