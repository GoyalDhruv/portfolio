import { GitHubCalendar } from "react-github-calendar";
const About = () => {
  const githubTheme = {
    light: [
      "hsl(210 20% 95%)", // very light gray - muted
      "hsl(217 20% 85%)", // soft slate
      "hsl(217 20% 70%)", // your secondary tone
      "hsl(217 91% 60%)", // primary blue
      "hsl(217 91% 50%)", // stronger blue for high commits
    ],
    dark: [
      "hsl(220 13% 15%)", // dark muted
      "hsl(215 15% 35%)", // slate
      "hsl(215 15% 50%)", // lighter slate
      "hsl(217 91% 70%)", // bright blue (primary)
      "hsl(217 91% 60%)", // slightly stronger blue
    ],
  };
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center space-y-6">
        <div className="text-center ">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A quick look at who I am, what I love building, and the mission
            behind my work.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m a full-stack developer who loves turning ideas into clean,
          scalable products. My foundation is in the MERN stack, and I’m
          actively leveling up in AI — exploring generative models, agents, and
          developer-first tooling.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I believe the best learning happens by building, experimenting, and
          shipping real projects — not getting stuck in tutorial loops. Whether
          it’s crafting clean APIs, integrating AI agents, or fine-tuning
          performance, I’m always pushing myself to understand the “why” behind
          the code.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Right now, I’m exploring open-source, developer tooling, and practical
          AI integrations that help developers work smarter and move faster.
        </p>

        <div className="pt-10 flex justify-center">
          <GitHubCalendar username="pakshgupta" theme={githubTheme} />
        </div>
      </div>
    </section>
  );
};

export default About;
