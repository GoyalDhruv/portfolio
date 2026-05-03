import { useEffect, useState } from "react"

interface Skill {
  name: string
  color: string
  size: string
  id?: number
}

export function FloatingSkills() {
  const skills: Skill[] = [
    { name: "React", color: "creative-cyan", size: "text-sm" },
    { name: "TypeScript", color: "creative-purple", size: "text-lg" },
    { name: "Node.js", color: "creative-pink", size: "text-base" },
    { name: "JavaScript", color: "creative-orange", size: "text-xl" },
    { name: "MongoDB", color: "creative-cyan", size: "text-base" },
    { name: "Express.js", color: "creative-purple", size: "text-sm" },
    { name: "Python", color: "creative-pink", size: "text-lg" },
    { name: "MySQL", color: "creative-orange", size: "text-base" },
    { name: "Redux", color: "creative-cyan", size: "text-sm" },
    { name: "Git", color: "creative-purple", size: "text-base" },
    { name: "REST APIs", color: "creative-pink", size: "text-lg" },
    { name: "JWT", color: "creative-orange", size: "text-sm" },
  ]

  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([])

  useEffect(() => {
    const addSkill = () => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)]
      const skillWithId = { ...randomSkill, id: Date.now() + Math.random() }
      
      setVisibleSkills(prev => [...prev, skillWithId])
      
      // Remove skill after animation completes
      setTimeout(() => {
        setVisibleSkills(prev => prev.filter(skill => skill.id !== skillWithId.id))
      }, 15000)
    }

    // Add initial skills with staggered timing
    const initialTimeouts = skills.map((_, index) => 
      setTimeout(() => addSkill(), index * 1000)
    )

    // Continue adding skills periodically
    const interval = setInterval(addSkill, 2000)

    return () => {
      initialTimeouts.forEach(clearTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {visibleSkills.map((skill) => (
        <div
          key={skill.id}
          className={`absolute animate-skill-float ${skill.size} font-semibold text-${skill.color} opacity-60`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            animationDuration: `${15 + Math.random() * 10}s`,
            animationDelay: '0s'
          }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  )
}