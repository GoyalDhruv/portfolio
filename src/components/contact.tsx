import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/moqgggoq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Oops! Something went wrong.",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network issue. Please try again.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-accent font-mono">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for opportunities or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-terminal-green">📬</span>
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-sm">pakshgupta007@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-sm">+91 9719699947</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm">Dehradun, Uttarakhand, India</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-terminal-amber">🌐</span>
                  Social Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:text-grey"
                >
                  <a
                    href="https://github.com/pakshgupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start w-full"
                  >
                    <Github className="mr-3 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:text-grey "
                >
                  <a
                    href="https://www.linkedin.com/in/paksh-gupta-053724212/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start w-full"
                  >
                    <Linkedin className="mr-3 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:text-grey"
                >
                  <a
                    href="https://leetcode.com/u/_Paksh_Gupta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start w-full"
                  >
                    <Code2 className="mr-3 h-4 w-4" />
                    LeetCode
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="text-center">
              <Badge className="bg-terminal-green/20 text-terminal-green border-terminal-green/30">
                <span className="animate-pulse mr-2">●</span>
                Currently available for new opportunities
              </Badge>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 h-[400px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-accent">✉️</span>
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-accent p-5"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-accent p-5"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-accent resize-none p-5"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-black dark:text-white dark:text-white hover:shadow-glow transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
