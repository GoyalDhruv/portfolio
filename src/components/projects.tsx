import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Nexa Shop W",
      description: "Designed and implemented an e-commerce platform for footwear, improving user experience with intuitive navigation and dynamic UI elements.",
      highlights: [
        "Optimized API interactions using Redux Toolkit, improving state management and reducing API calls by 40%",
        "Integrated Stripe for secure payments and implemented caching mechanisms",
        "Enhanced server response time for efficient transactions"
      ],
      technologies: ["React", "TypeScript", "Redux Toolkit", "Express.js", "MongoDB", "Stripe"],
      date: "May 2024",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Smart Nav Plus W",
      description: "Developed a user-friendly travel platform, offering personalized recommendations for attractions, restaurants, and hotels.",
      highlights: [
        "Integrated real-time weather updates for efficient trip planning",
        "Designed a fuel cost estimation tool using data analytics",
        "Optimized budget-conscious trip planning features"
      ],
      technologies: ["React", "JavaScript", "Google Map API", "Travel Advisor API"],
      date: "February 2024",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-accent font-mono">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-terminal-amber">📅</span>
                      {project.date}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="hover:text-accent">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-accent">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                    <span className="text-terminal-green">▶</span>
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-accent/10 text-accent border-accent/20 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-accent/50 hover:border-accent hover:bg-accent/10">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}