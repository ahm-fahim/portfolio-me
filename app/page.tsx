"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { ProjectsSection } from "@/components/projects-section"
import { ArticlesSection } from "@/components/articles-section"
import { ContactSection } from "@/components/contact-section"


export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeSection, setActiveSection] = useState(0)

    const sections = [
        { component: <AboutSection key="about" />, title: "About" },
        { component: <ResumeSection key="resume" />, title: "Resume" },
        { component: <ProjectsSection key="projects" />, title: "Works" },
        { component: <ArticlesSection key="articles" />, title: "Blog" },
        { component: <ContactSection key="contact" />, title: "Get in Touch" },
    ]

    const handleNavigate = useCallback((index: number) => {
        if (containerRef.current) {
            const targetScroll = index * window.innerHeight
            containerRef.current.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            })
        }
    }, [])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleScroll = () => {
            const scrollPosition = container.scrollTop
            const newActive = Math.round(scrollPosition / window.innerHeight)
            setActiveSection(Math.min(newActive, sections.length - 1))
        }

        container.addEventListener("scroll", handleScroll)
        return () => container.removeEventListener("scroll", handleScroll)
    }, [sections.length])

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar with Profile */}
            <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
            {/* Main content */}
            {/* Main content */}
            <div ref={containerRef} className="flex-1 overflow-y-scroll md:border md:rounded-4xl md:h-[90vh] md:my-auto scroll-snap-container  my-20 md:mr-10">
                {sections.map((section, idx) => (
                    <div key={idx} className="scroll-snap-section relative" id={`section-${idx}`}>
                        <div className="bg-pattern"></div>
                        {section.component}
                    </div>
                ))}
            </div>
        </div>
    )
}
