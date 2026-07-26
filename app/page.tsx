// app/page.tsx
"use client"

import { useEffect, useRef, useState, useCallback, } from "react"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { ProjectsSection } from "@/components/projects-section"
import { ArticlesSection } from "@/components/articles-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeSection, setActiveSection] = useState(0)
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
    

    // Memoized sections
    const sections = [
        { component: <AboutSection key="about" />, title: "About" },
        { component: <ResumeSection key="resume" />, title: "Resume" },
        { component: <ProjectsSection key="projects" />, title: "Works" },
        { component: <ArticlesSection key="articles" />, title: "Blog" },
        { component: <ContactSection key="contact" />, title: "Get in Touch" },
    ]

    // Smooth navigation
    const handleNavigate = useCallback((index: number) => {
        if (containerRef.current) {
            const targetScroll = index * window.innerHeight
            containerRef.current.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            })
        }
    }, [])

    // Scroll handling
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleScroll = () => {
            const scrollPosition = container.scrollTop
            const newActive = Math.round(scrollPosition / window.innerHeight)
            setActiveSection(Math.min(newActive, sections.length - 1))
        }

        container.addEventListener("scroll", handleScroll, { passive: true })
        return () => container.removeEventListener("scroll", handleScroll)
    }, [sections.length])

    // Theme detection
    useEffect(() => {
        const updateTheme = () => {
            const isDark = document.documentElement.classList.contains('dark')
            setCurrentTheme(isDark ? 'dark' : 'light')
        }

        // Initial theme detection
        updateTheme()

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === 'class') {
                    updateTheme()
                    break
                }
            }
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        return () => observer.disconnect()
    }, [])

    // Utility functions
    const loadScript = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve()
                return
            }
            const script = document.createElement('script')
            script.src = src
            script.onload = () => resolve()
            script.onerror = () => reject(new Error(`Failed to load: ${src}`))
            document.head.appendChild(script)
        })
    }


    return (
        <div className="flex h-screen play-regular relative" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {/* Content Layer */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '100%',
                display: 'flex'
            }}>
                <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

                {/* Main Content with fully dark background in dark mode */}
                <div
                    ref={containerRef}
                    className="flex-1 p-2 overflow-y-scroll md:border border-gray-200 dark:text-white dark:border-gray-800 md:rounded-4xl md:h-[90vh] md:my-auto scroll-snap-container my-0 md:mr-10 transition-all duration-500"
                    style={{
                        backgroundColor: currentTheme === 'dark'
                            ? 'rgba(0,0,0,0.29)'
                            : 'rgba(255,255,255,0.25)',
                        backdropFilter: currentTheme === 'dark' ? 'blur(1px)' : 'blur(1px)'
                    }}
                >
                    {sections.map((section, idx) => (
                        <div key={idx} className="scroll-snap-section relative" id={`section-${idx}`}>
                            <div className="bg-pattern"></div>
                            {section.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}