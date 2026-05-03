import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ExternalLink, Github, Palette, Zap } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  stats: { label: string; value: string; color: string }[];
  date: string;
  category: string;
  gradient: string;
  live: string;
  github: string;
  icon: typeof Zap;
}

export function CreativeProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Izocloud",
      subtitle: "SaaS Accounting Platform",
      description:
        "A scalable SaaS platform for managing accounting, transactions, and business workflows with highly dynamic UI systems.",
      features: [
        "Developed Next.js-based frontend for data-intensive SaaS workflows",
        "Built dynamic tables with filtering, sorting, pagination, and inline editing",
        "Engineered a customizable invoice/document editor with real-time data binding",
        "Designed reusable component architecture for multi-module scalability",
      ],
      technologies: ["Next.js", "React.js", "REST APIs", "SaaS", "Dashboards"],
      stats: [
        { label: "Modules", value: "5+", color: "creative-cyan" },
      ],
      date: "2026",
      category: "SaaS",
      gradient: "from-creative-cyan to-creative-purple",
      live: "https://izocloud.net/login/",
      github: "#",
      icon: Code,
    },
    {
      id: "2",
      title: "Portlifo",
      subtitle: "Multi-Tenant Platform",
      description:
        "A multi-tenant platform enabling users to create and manage personalized portfolio instances with dynamic configurations.",
      features: [
        "Built tenant-based architecture supporting multiple independent user instances",
        "Designed dynamic UI rendering based on user-specific configurations",
        "Implemented scalable routing and modular frontend structure",
        "Optimized performance for multi-user environments",
      ],
      technologies: ["React.js", "Multi-Tenant Architecture", "APIs"],
      stats: [
        { label: "Tenants", value: "Multi", color: "creative-orange" },
      ],
      date: "2025",
      category: "Platform",
      gradient: "from-creative-orange to-creative-pink",
      live: "https://portlifo.com/",
      github: "#",
      icon: Palette,
    },
    {
      id: "3",
      title: "Hike",
      subtitle: "Travel & Booking Platform",
      description:
        "A full-stack travel platform with booking workflows, dashboards, and optimized backend interactions.",
      features: [
        "Built complete Next.js application from scratch with authentication",
        "Designed dashboards and booking workflows for tourism platform",
        "Optimized database queries improving performance by 40%",
        "Implemented scalable backend APIs and frontend integration",
      ],
      technologies: ["Next.js", "MongoDB", "APIs", "Authentication"],
      stats: [
        { label: "Query Speed", value: "+40%", color: "creative-pink" },
      ],
      date: "2025",
      category: "Travel Tech",
      gradient: "from-creative-pink to-creative-cyan",
      live: "https://hike.minterminds.in/",
      github: "#",
      icon: Zap,
    },
    {
      id: "4",
      title: "Turbotrek",
      subtitle: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with secure payments, admin panel, and optimized frontend performance.",
      features: [
        "Implemented JWT authentication and protected admin routes",
        "Integrated Stripe payments and SendGrid notifications",
        "Built responsive UI with performance optimizations",
        "Designed scalable component structure for product management",
      ],
      technologies: ["MERN Stack", "Stripe", "Redux", "SendGrid"],
      stats: [
        { label: "Features", value: "Full-stack", color: "creative-purple" },
      ],
      date: "2024",
      category: "E-commerce",
      gradient: "from-creative-purple to-creative-orange",
      live: "https://turbotrek.netlify.app/",
      github: "https://github.com/GoyalDhruv/Nike-Clone",
      icon: Code,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-creative-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-creative-pink/10 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies and
            creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <Card
                className={`
                relative overflow-hidden border-0 bg-gradient-card shadow-creative
                transition-all duration-700 hover:shadow-glow hover:scale-105
                ${hoveredProject === project.id ? "transform rotate-1" : ""}
              `}
              >
                {/* Header with Gradient */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}
                        >
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold">
                            {project.title}
                          </CardTitle>
                          <p className="text-muted-foreground">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project?.github === "#" ? null : (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-creative-purple"
                        >
                          <a href={project?.github} target="#">
                            <Github className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-creative-pink"
                      >
                        <a href={project?.live} target="#">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats Grid */}
                  {/* <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className={`text-2xl font-bold text-${stat.color} mb-1`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div> */}

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Code className="w-4 h-4 text-creative-cyan" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-creative-purple mt-1.5 text-xs">
                            ▶
                          </span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`
                            bg-gradient-to-r ${project.gradient} bg-opacity-10 
                            text-foreground border-0 hover:scale-105 transition-transform
                            font-mono text-xs
                          `}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Hover Overlay */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${project.gradient
                    } opacity-0 
                  transition-opacity duration-500 pointer-events-none
                  ${hoveredProject === project.id ? "opacity-5" : ""}
                `}
                ></div>
              </Card>

              {/* Floating Action Button */}
              <div
                className={`
                absolute -bottom-6 right-6 transition-all duration-500
                ${hoveredProject === project.id
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                  }
              `}
              >
                <Button
                  className={`
                    rounded-full w-12 h-12 shadow-glow
                    bg-gradient-to-r ${project.gradient} text-white
                    hover:scale-110 transition-transform duration-300
                  `}
                >
                  <a href={project?.live} target="#">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-card shadow-creative">
            <div>
              <h3 className="text-xl font-bold mb-2">Explore More Projects</h3>
              <p className="text-muted-foreground">
                Check out my complete portfolio on GitHub
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-hero text-white hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <a
                href="https://github.com/GoyalDhruv"
                target="#"
                className="flex items-center"
              >
                <Github className="mr-2 w-5 h-5" />
                View All
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
