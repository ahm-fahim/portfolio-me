"use client"

import {useState} from "react"
import {ExternalLink} from "lucide-react"

export function ProjectsSection() {
    const [filter, setFilter] = useState("all")

    const projects = [
        {
            id: 1,
            title: "Family Star - Social Media",
            category: "full-stack",
            image: "/social-media-app.jpg",
            description:
                "Architected complete backend with NestJS and PostgreSQL. Built admin panel using Next.js for content moderation.",
            tech: ["NestJS", "PostgreSQL", "Next.js", "Tailwind CSS"],
            link: "#",
        },
        {
            id: 2,
            title: "Learn Tech",
            category: "landing",
            image: "/qa-testing-platform.jpg",
            description: "High-quality landing page showcasing QA testing services and features.",
            tech: ["Next.js", "Tailwind CSS", "React"],
            link: "https://qaunlocked.com/",
        },
        {
            id: 3,
            title: "Family Star E-Store",
            category: "ecommerce",
            image: "/ecommerce-store.jpg",
            description: "Full e-commerce platform with product management and integrated checkout.",
            tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
            link: "https://cuddlecrafter.com/",
        },
        {
            id: 4,
            title: "Family Star E-Garments",
            category: "ecommerce",
            image: "/placeholder-89j64.png",
            description: "E-commerce platform for garments with inventory and order management.",
            tech: ["Next.js", "PostgreSQL", "Tailwind"],
            link: "https://almodinagarments.com/",
        },
        {
            id: 5,
            title: "News Paper",
            category: "content",
            image: "/news-blog-platform.jpg",
            description: "News and blog platform with dynamic CMS and content management.",
            tech: ["Next.js", "CMS", "Tailwind"],
            link: "https://irishbanglatimes.com/",
        },
        {
            id: 6,
            title: "Admin Dashboard",
            category: "dashboard",
            image: "/admin-dashboard-analytics.jpg",
            description: "Advanced admin panel with data visualization and CRUD operations.",
            tech: ["Next.js", "Recharts", "PostgreSQL"],
            link: "#",
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
                                    <h2 className="text-3xl font-bold">Works</h2>
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
                                            <h3 className="font-bold text-lg group-hover:text-accent transition-colors line-clamp-2">
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

