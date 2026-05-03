import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function DynamicSkills() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#F29111" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "JWT", icon: <SiJsonwebtokens />, color: "#FFFFFF" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "OpenAI", icon: <SiOpenai />, color: "#FFFFFF" },
    { name: "LangChain", icon: <SiLangchain />, color: "#3776AB" },
  ];

  const certifications = [
    {
      name: "Frontend Developer (React)",
      provider: "HackerRank",
      color: "creative-purple",
    },
    {
      name: "Backend REST API (Node.js)",
      provider: "Udemy",
      color: "creative-pink",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute("data-skill");
            if (skillName && !visibleSkills.includes(skillName)) {
              setVisibleSkills((prev) => [...prev, skillName]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll("[data-skill]");
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleSkills]);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-creative-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-creative-cyan/5 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and
            professional achievements
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 md:gap-8 mb-16">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 animate-fadeIn"
              style={{
                animationDelay: `${index * 0.05}s`,
                animationFillMode: "backwards",
              }}
            >
              <div
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 flex items-center justify-center text-4xl md:text-5xl transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer group-hover:scale-110"
                style={
                  {
                    "--icon-color": skill.color,
                  } as React.CSSProperties
                }
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <span
                  className="relative z-10 transition-all duration-300 text-slate-400 group-hover:text-current"
                  style={{
                    color: "var(--icon-color)",
                  }}
                >
                  {skill.icon}
                </span>

                {/* Border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 20px ${skill.color}60`,
                  }}
                />
              </div>

              {/* Skill name */}
              <span className="text-xs md:text-sm text-center text-slate-400 group-hover:text-slate-200 transition-colors duration-300 font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications & Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Certifications */}
          <Card className="bg-gradient-card border-0 shadow-creative">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-hero">
                  <Award className="w-6 h-6 text-white" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`
                    flex items-center gap-4 p-4 rounded-lg bg-muted/50 
                    transition-all duration-500 hover:scale-105 hover:bg-muted/70
                    animate-slide-up
                  `}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-${cert.color} animate-pulse-glow`}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievement Stats */}
          <Card className="bg-gradient-card border-0 shadow-creative overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-hero">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    label: "Years Experience",
                    value: "1+",
                    color: "creative-purple",
                  },
                  {
                    label: "Problem Solving (LeetCode, GFG)",
                    value: "500+",
                    color: "creative-pink",
                    url: "https://www.credly.com/users/paksh-gupta/badges#credly",
                  },
                  {
                    label: "Badges Earned",
                    value: "4+",
                    color: "creative-cyan",
                  },
                  {
                    label: "Certifications",
                    value: "2",
                    color: "creative-orange",
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`
                      text-center p-4 rounded-lg bg-muted/30 
                      animate-slide-up hover:scale-105 transition-transform duration-300
                    `}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`text-3xl font-bold text-${stat.color} mb-2 animate-pulse-glow`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Cloud Visualization */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-8 rounded-2xl bg-gradient-card shadow-creative">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                Ready to Build Amazing Things
              </h3>
              <p className="text-muted-foreground">
                Let's create something extraordinary together
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-hero rounded-full animate-pulse-glow"></div>
              <div className="w-8 h-8 bg-creative-pink rounded-full animate-bounce-slow"></div>
              <div className="w-6 h-6 bg-creative-cyan rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
