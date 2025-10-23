"use client"

import { Github, Mail, Phone, MessageCircle, Globe, Code, Camera, Sparkles, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

export default function LinktreePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const links = [
    {
      title: "Personal Website",
      url: "https://ruanklopper.com",
      icon: Globe,
      description: "Explore my digital space",
      gradient: "from-chart-3 to-chart-1",
    },
    {
      title: "Custom Software Development",
      url: "https://comrobi.vercel.app",
      icon: Code,
      description: "Building digital solutions",
      gradient: "from-chart-2 to-chart-4",
    },
    {
      title: "Photography Portfolio",
      url: "https://fotografie.site",
      icon: Camera,
      description: "Visual storytelling",
      gradient: "from-chart-1 to-chart-5",
    },
    {
      title: "GitHub",
      url: "https://github.com/Ruan-Klopper",
      icon: Github,
      description: "Code & projects",
      gradient: "from-chart-4 to-chart-2",
    },
  ]

  const contacts = [
    {
      title: "Email",
      value: "ruan@ruanklopper.com",
      url: "mailto:ruan@ruanklopper.com",
      icon: Mail,
      color: "chart-2",
    },
    {
      title: "Phone",
      value: "+27 66 207 2937",
      url: "tel:+27662072937",
      icon: Phone,
      color: "chart-1",
    },
    {
      title: "WhatsApp",
      value: "+27 66 207 2937",
      url: "https://wa.me/27662072937",
      icon: MessageCircle,
      color: "chart-4",
    },
  ]

  const upcoming = [
    {
      title: "Scorrie",
      url: "https://scorrie.com",
      description: "Protected by AI",
      gradient: "from-chart-1/20 via-chart-3/20 to-chart-5/20",
    },
    {
      title: "Noki AI",
      url: "https://noki.co.za",
      description: "Your todo list on a new level",
      gradient: "from-chart-4/20 via-chart-2/20 to-chart-1/20",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-1/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-md mx-auto py-12 px-4 space-y-10">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="relative w-32 h-32 mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-chart-1 to-chart-3 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/30 group-hover:ring-primary/60 group-hover:ring-8 transition-all duration-500 group-hover:scale-105 shadow-2xl">
              <Image
                src="/profilepic.jpg"
                alt="Ruan Klopper"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-balance bg-gradient-to-r from-foreground via-primary to-chart-1 bg-clip-text text-transparent">
              Ruan Klopper
            </h1>
            <p className="text-muted-foreground text-pretty text-lg">Developer • Photographer • Creator</p>
          </div>
        </div>

        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="relative p-5 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border-2 border-border hover:border-primary/50 overflow-hidden group-hover:translate-x-1 animate-slide-in-right">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <link.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {link.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="space-y-5 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center">
              <h2 className="text-xl font-bold bg-background px-4 text-center">Get in Touch</h2>
            </div>
          </div>

          <div className="grid gap-3">
            {contacts.map((contact, index) => (
              <a key={index} href={contact.url} className="block group">
                <Card className="p-4 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] border border-border hover:border-primary/50 hover:shadow-xl group-hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${contact.color}/20 flex items-center justify-center group-hover:bg-${contact.color} group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                    >
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {contact.title}
                      </p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-5 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-chart-1 animate-pulse" />
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-chart-1 via-chart-3 to-chart-5 bg-clip-text text-transparent">
              Upcoming Game Changers
            </h2>
            <Sparkles className="w-6 h-6 text-chart-1 animate-pulse" />
          </div>

          <div className="space-y-4">
            {upcoming.map((project, index) => (
              <a
                key={index}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card
                  className={`relative p-6 bg-gradient-to-br ${project.gradient} backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-2 border-chart-1/30 hover:border-chart-1 overflow-hidden group-hover:translate-y-[-2px]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <div className="relative text-center space-y-2">
                    <h3 className="font-bold text-2xl group-hover:text-chart-1 transition-colors flex items-center justify-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors font-medium">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center pt-6 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Ruan Klopper • Made with passion
          </p>
        </div>
      </div>
    </div>
  )
}
