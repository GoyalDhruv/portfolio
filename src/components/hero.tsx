import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const downloadResume = () => {
    // This will be implemented to download the actual resume PDF
    window.open("#", "_blank");
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-subtle">
      <div className="container max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Software Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in">
            Full-Stack Developer specializing in{" "}
            <span className="text-accent font-mono font-semibold">React.js</span>,{" "}
            <span className="text-accent font-mono font-semibold">Node.js</span>, and{" "}
            <span className="text-accent font-mono font-semibold">AI Integration</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Building scalable web applications and AI-powered solutions. 
            Currently developing analytics platforms at TehriHills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <Button 
            onClick={downloadResume}
            className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" className="border-accent/50 hover:border-accent hover:bg-accent/10">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in">
          <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
            <span className="font-mono">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}