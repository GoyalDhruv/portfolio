import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "TehriHills",
      location: "Dehradun, Uttarakhand",
      period: "October 2024 – Present",
      achievements: [
        "Built and deployed a full-stack analytics platform using React.js, Node.js, and MySQL, enabling real-time business dashboards with secure REST APIs.",
        "Developed an AI assistant using OpenAI GPT API to convert natural language queries into data insights, making analytics more accessible.",
        "Improved frontend performance by 30% and modularized UI components, reducing re-renders and accelerating feature delivery by 15%."
      ],
      current: true
    },
    {
      title: "Web Developer Intern",
      company: "GEU-DEEMED",
      location: "Dehradun, Uttarakhand",
      period: "July 2023 – September 2023",
      achievements: [
        "Worked in a cross-functional team to develop a React.js-based e-commerce platform, integrating real-time price filtering and an intuitive UI for better user engagement.",
        "Designed and deployed REST APIs using Node.js, Express.js, and MongoDB, ensuring efficient backend communication and seamless scalability.",
        "Implemented authentication and security measures, integrating JWT-based authorization, ensuring data integrity and user privacy."
      ],
      current: false
    }
  ]

  const education = {
    degree: "B.Tech - Computer Science and Engineering (AI and DS)",
    school: "Graphic Era University",
    period: "2020 – 2024",
    cgpa: "8.75",
    location: "Dehradun, Uttarakhand"
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-accent font-mono">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and academic background
          </p>
        </div>

        <div className="space-y-8">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-terminal-green">$</span> Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">
                        {exp.title}
                        {exp.current && (
                          <Badge className="ml-2 bg-terminal-green/20 text-terminal-green border-terminal-green/30">
                            Current
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-accent">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-terminal-green mt-1.5 text-sm">▶</span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-terminal-amber">📚</span> Education
            </h3>
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl">{education.degree}</CardTitle>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </div>
                  </div>
                </div>
                <p className="text-lg font-semibold text-accent">{education.school}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    CGPA: {education.cgpa}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}