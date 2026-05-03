import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Award } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
      color: "terminal-green"
    },
    {
      title: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: ["React.js", "Context API", "Redux Toolkit", "HTML", "CSS"],
      color: "terminal-amber"
    },
    {
      title: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
      color: "accent"
    },
    {
      title: "Tools & Databases",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "Postman", "VS Code", "MySQL", "MongoDB"],
      color: "terminal-green"
    }
  ]

  const certifications = [
    "Frontend Developer (React) - HackerRank",
    "Backend REST API (Node.js) - Udemy"
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-accent font-mono">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className={`text-${category.color}`}>
                    {category.icon}
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-accent/20 hover:text-accent transition-colors font-mono text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Award className="h-5 w-5 text-terminal-amber" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-accent">🏆</span>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">2</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}