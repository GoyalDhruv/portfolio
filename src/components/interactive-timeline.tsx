import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  current?: boolean;
  icon: typeof Briefcase;
  color: string;
}

export function InteractiveTimeline() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineItem[] = [
    {
      id: "1",
      type: "work",
      title: "Frontend Developer (Freelance)",
      organization: "Izocloud",
      location: "Remote",
      period: "Feb 2026 – Present",
      description: [
        "Developing a scalable SaaS platform using Next.js for accounting and business workflows",
        "Built dynamic dashboards, data tables, and reusable UI systems for handling large datasets",
        "Engineered a customizable invoice/document editor with template-driven layouts and real-time data binding",
        "Optimized state management and frontend performance for complex, data-intensive interactions",
      ],
      skills: [
        "Next.js",
        "React.js",
        "REST APIs",
        "State Management",
        "SaaS",
        "Dashboards",
      ],
      current: true,
      icon: Briefcase,
      color: "creative-purple",
    },
    {
      id: "2",
      type: "work",
      title: "Full Stack Developer",
      organization: "Minterminds",
      location: "Chandigarh, India",
      period: "Jan 2024 – Feb 2026",
      description: [
        "Built high-performance dashboards and web apps using React.js and Next.js across multiple products",
        "Developed real-time features using WebSockets, reducing API calls and improving responsiveness",
        "Implemented authentication, scheduling, analytics, and multi-vendor workflows",
        "Integrated Stripe payments, KYC systems, and multilingual support for production applications",
      ],
      skills: [
        "React.js",
        "Next.js",
        "WebSockets",
        "Stripe",
        "APIs",
        "Dashboards",
      ],
      icon: Briefcase,
      color: "creative-pink",
    },
    {
      id: "3",
      type: "education",
      title: "B.Tech - Computer Science",
      organization: "Graphic Era University",
      location: "Dehradun, Uttarakhand",
      period: "2020 – 2024",
      description: [
        "CGPA: 8.8 / 10",
        "Built multiple full-stack and real-time applications",
        "Focused on web development, system design, and scalable architectures",
      ],
      skills: ["Web Development", "Data Structures", "System Design"],
      icon: GraduationCap,
      color: "creative-cyan",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-timeline-id");
            if (id && !visibleItems.includes(id)) {
              setVisibleItems((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElements =
      timelineRef.current?.querySelectorAll("[data-timeline-id]");
    timelineElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience and education that shaped my development career
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-hero transform md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-hero animate-timeline-draw"></div>
          </div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                data-timeline-id={item.id}
                className={`relative transition-all duration-1000 ${visibleItems.includes(item.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow animate-pulse-glow`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                  >
                    <Card
                      className={`bg-gradient-card border-0 shadow-creative hover:shadow-glow transition-all duration-500 hover:scale-105 cursor-pointer ${activeItem === item.id
                        ? "ring-2 ring-primary shadow-glow"
                        : ""
                        }`}
                      onClick={() =>
                        setActiveItem(activeItem === item.id ? null : item.id)
                      }
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-xl font-bold">
                                {item.title}
                              </CardTitle>
                              {item.current && (
                                <Badge
                                  className={`bg-${item.color}/20 text-${item.color} border-${item.color}/30 animate-pulse-glow`}
                                >
                                  Current
                                </Badge>
                              )}
                            </div>
                            <p
                              className={`text-lg font-semibold text-${item.color}`}
                            >
                              {item.organization}
                            </p>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 transition-transform duration-300 ${activeItem === item.id ? "rotate-90" : ""
                              }`}
                          />
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </div>
                        </div>
                      </CardHeader>

                      {/* Expandable Content */}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${activeItem === item.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <CardContent className="space-y-4">
                          <ul className="space-y-2">
                            {item.description.map((desc, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm"
                              >
                                <span
                                  className={`text-${item.color} mt-1.5 text-xs`}
                                >
                                  ▶
                                </span>
                                <span className="leading-relaxed">{desc}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">
                              Key Skills:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="secondary"
                                  className={`bg-${item.color}/10 text-${item.color} border-${item.color}/20 hover:bg-${item.color}/20 transition-colors`}
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
