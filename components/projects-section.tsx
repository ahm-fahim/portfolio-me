"use client"

import {useState} from "react"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
    const [filter, setFilter] = useState("all")

    const projects = [
        {
            id: 1,
            title: "My Comfort | E-commerce Platform",
            category: "ecommerce",
            image: "/assets/mycomfort1.png",
            description:
                "Architected complete frontend with React.js and Tailwind.css",
            tech: ["React.js", "Tailwind CSS"],
            link: "https://spontaneous-gingersnap-2a7e1b.netlify.app/",
        },
        {
            id: 2,
            title: "Portfolio Me",
            category: "landing",
            image: "/assets/portfolio2.png",
            description: "Next.js and Tailwind.css used to build this projects",
            tech: ["Next.js", "Tailwind CSS",],
            link: "https://rococo-praline-337a91.netlify.app/",
        },
    ]

    const filters = [
        {id: "all", label: "All"},
        {id: "full-stack", label: "Full Stack"},
        {id: "landing", label: "Landing"},
        {id: "ecommerce", label: "E-Commerce"},
        {id: "dashboard", label: "Dashboard"},
        {id: "content", label: "Content"},
    ]

    const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

    return (
        <main className="w-full h-[96vh] overflow-y-scroll">
            <div>
                <div className="lg:col-span-2 space-y-8 animate-fade-in">
                    <section>
                        <div className="flex items-center justify-between bg-white/80 dark:bg-gray-800/50 border-b rounded-t-lg py-4 mb-5 p-2 ">
                            <div className="flex items-center justify-between flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <h2 className="text-3xl font-bold"><span className="text-green-500">W</span>ork</h2>
                                </div>
                            </div>

                            {/* Filter Buttons */}
                            <div className="flex flex-wrap justify-end gap-6">
                                {filters.map((f) => (
                                    <button
                                        key={f.id}
                                        onClick={() => setFilter(f.id)}
                                        className={`transition-all duration-300 text-sm ${
                                            filter === f.id
                                                ? "text-green-600"
                                                : ""
                                        }`}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredProjects.map((project, i) => (
                                <div
                                    key={project.id}
                                    className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300 group animate-fade-in"
                                    style={{animationDelay: `${i * 0.1}s`}}
                                >
                                    <div className="relative overflow-hidden aspect-video bg-muted">
                                        <img  
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-start justify-between mb-2 gap-2">
                                            <h3 className="font-bold text-lg group-hover:text-green-500 transition-colors line-clamp-2">
                                                {project.title}
                                            </h3>
                                            {project.link !== "#" && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1 text-muted-foreground hover:text-accent transition-colors flex-shrink-0"
                                                    aria-label="Visit project"
                                                >
                                                    <ExternalLink className="w-4 h-4"/>
                                                </a>
                                            )}
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t}
                                                      className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                            {t}
                          </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

        </main>
    )
}

