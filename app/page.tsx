"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { ProjectsSection } from "@/components/projects-section"
import { ArticlesSection } from "@/components/articles-section"
import { ContactSection } from "@/components/contact-section"

declare global {
    interface Window {
        VANTA: any;
    }
}

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)
    const vantaRef = useRef<HTMLDivElement>(null)
    const [activeSection, setActiveSection] = useState(0)
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
    const vantaEffectRef = useRef<any>(null)

    const sections = [
        { component: <AboutSection key="about" />, title: "About" },
        { component: <ResumeSection key="resume" />, title: "Resume" },
        { component: <ProjectsSection key="projects" />, title: "Works" },
        { component: <ArticlesSection key="articles" />, title: "Blog" },
        { component: <ContactSection key="contact" />, title: "Get in Touch" },
    ]

    // Detect theme changes from your existing theme system
    useEffect(() => {
        const updateTheme = () => {
            const isDark = document.documentElement.classList.contains('dark')
            setCurrentTheme(isDark ? 'dark' : 'light')
        }

        // Initial theme detection
        updateTheme()

        // Observe theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    updateTheme()
                }
            })
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        return () => observer.disconnect()
    }, [])

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

    // Initialize and update VANTA.GLOBE effect based on theme
    useEffect(() => {
        const loadScript = (src: string): Promise<void> => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
                document.head.appendChild(script);
            });
        };

        let vantaEffect: any = null;

        const initVanta = async () => {
            if (!vantaRef.current) return;

            try {
                // Load Three.js and Vanta scripts
                await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
                await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js');

                // Wait for scripts to initialize
                await new Promise(resolve => setTimeout(resolve, 100));

                if (window.VANTA && vantaRef.current) {
                    // Destroy existing effect
                    if (vantaEffectRef.current) {
                        vantaEffectRef.current.destroy();
                    }

                    // Theme-based configuration
                    const isDark = currentTheme === 'dark';

                    vantaEffect = window.VANTA.GLOBE({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: isDark ? 0xa400 : 0xa400, // Purple for dark, green for light
                        color2: isDark ? 0x90bb8e : 0x90bb8e, // Dark purple for dark, light green for light
                        size: 1.50,
                        backgroundColor: isDark ? 0x0a0a0a : 0xffffff // Dark background for dark, white for light
                    });

                    vantaEffectRef.current = vantaEffect;
                }
            } catch (error) {
                console.error('Error initializing Vanta effect:', error);
            }
        };

        initVanta();

        return () => {
            if (vantaEffectRef.current) {
                vantaEffectRef.current.destroy();
            }
        };
    }, [currentTheme]); // Re-initialize when theme changes

    return (
        <div className="flex h-screen play-regular relative" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {/* VANTA.GLOBE as full background */}
            <div
                ref={vantaRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
            />

            {/* Content with higher z-index */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex' }}>
                {/* Sidebar with Profile */}
                <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

                {/* Main content */}
                <div
                    ref={containerRef}
                    className="flex-1 overflow-y-scroll md:border md:rounded-4xl md:h-[90vh] md:my-auto scroll-snap-container my-20 md:mr-10"
                    style={{
                        backgroundColor: currentTheme === 'dark' ? 'rgba(10,10,10,0.35)' : 'rgba(255,255,255,0.38)',
                        backdropFilter: 'blur(1px)'
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