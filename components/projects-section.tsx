"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Globe, Layers } from "lucide-react"

export function ProjectsSection() {
    const [filter, setFilter] = useState("all")

    const projects = [
        {
            id: 1,
            title: "My Comfort | E-commerce Platform",
            category: "ecommerce",
            image: "/assets/mycomfort1.png",
            description:
                "Architected complete frontend with React.js and Tailwind CSS featuring dynamic user workflows.",
            tech: ["React.js", "Tailwind CSS"],
            link: "https://spontaneous-gingersnap-2a7e1b.netlify.app/",
        },
        {
            id: 2,
            title: "Portfolio Me",
            category: "landing",
            image: "/assets/portfolio2.png",
            description:
                "Modern personal portfolio built with Next.js and Tailwind CSS featuring interactive UI modules.",
            tech: ["Next.js", "Tailwind CSS"],
            link: "https://rococo-praline-337a91.netlify.app/",
        },
    ]

    const filters = [
        { id: "all", label: "All Works" },
        { id: "full-stack", label: "Full Stack" },
        { id: "landing", label: "Landing" },
        { id: "ecommerce", label: "E-Commerce" },
        { id: "dashboard", label: "Dashboard" },
    ]

    const filteredProjects =
        filter === "all" ? projects : projects.filter((p) => p.category === filter)

    return (
        <main className="w-full h-[96vh] overflow-y-scroll scrollbar-none [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:p-6 py-8">
            <div className="space-y-8 animate-fade-in">
                <section>
                    {/* Header & Category Filters */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-5 mb-8 px-2">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                <span className="text-green-500">W</span>orks
                            </h2>
                        </div>

                        {/* Modern Pill Filter Buttons */}
                        <div className="flex flex-wrap gap-2">
                            {filters.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setFilter(f.id)}
                                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                                        filter === f.id
                                            ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                                            : "bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                                    }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
                        {filteredProjects.map((project, i) => (
                            <div
                                key={project.id}
                                className="group relative bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {/* Thumbnail Container */}
                                <div>
                                    <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            {project.link !== "#" && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded-lg shadow-lg transition-colors"
                                                >
                                                    <Globe className="w-3.5 h-3.5" />
                                                    Live Preview
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Body Content */}
                                    <div className="p-5">
                                        <div className="flex items-start justify-between mb-2 gap-2">
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-green-500 transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            {project.link !== "#" && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors flex-shrink-0"
                                                    aria-label="Visit project"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Tech Badges */}
                                <div className="px-5 pb-5 pt-0">
                                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-800/80">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs font-semibold px-2.5 py-1 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/40 rounded-md"
                                            >
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
        </main>
    )
}