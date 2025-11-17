// components/sidebar.tsx
"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from "./theme-provider"

interface SidebarProps {
    activeSection: number
    onNavigate: (index: number) => void
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
    const [isMobile, setIsMobile] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const { theme, resolvedTheme, toggleTheme } = useTheme()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const sections = [
        { name: "About", icon: "👤", id: 0 },
        { name: "Resume", icon: "📄", id: 1 },
        { name: "Projects", icon: "💼", id: 2 },
        { name: "Articles", icon: "📝", id: 3 },
        { name: "Contact", icon: "✉️", id: 4 },
    ]

    const handleNavClick = (index: number) => {
        onNavigate(index)
        setIsDrawerOpen(false)
    }

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/ahm-fahim" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/md-fahim-morshed-5b2126233" },
    ]

    // Mobile layout
    if (isMobile) {
        return (
            <>
                <button
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 md:hidden"
                    title="Toggle menu"
                >
                    {isDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {isDrawerOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setIsDrawerOpen(false)}
                    />
                )}

                <div
                    className={`fixed left-0 top-0 h-screen w-72 bg-card border-r border-border z-40 flex flex-col transition-transform duration-300 md:hidden ${
                        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex flex-col items-center gap-4 p-6 border-b border-border">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden flex items-center justify-center border-2 border-primary/50">
                                <span className="text-4xl">👨‍💻</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-foreground">MD. Fahim</h3>
                            <p className="text-sm text-primary font-semibold mt-1">Full Stack Developer</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2 p-4 flex-1">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                    activeSection === section.id
                                        ? "bg-primary/10 text-primary font-semibold"
                                        : "text-muted-foreground hover:bg-secondary/50"
                                }`}
                            >
                                <span className="text-2xl">{section.icon}</span>
                                <span className="font-medium">{section.name}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="border-t border-border p-4 flex flex-col gap-3">
                        <div className="flex gap-2">
                            {socialLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                                        title={link.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                )
                            })}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="w-full h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2 transition-all duration-300 text-foreground font-medium"
                            title="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? (
                                <>
                                    <Sun className="w-4 h-4" />
                                    <span className="text-sm">Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <Moon className="w-4 h-4" />
                                    <span className="text-sm">Dark Mode</span>
                                </>
                            )}
                        </button>

                        <a
                            href="/cv.pdf"
                            download
                            className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 text-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
                    <div className="flex items-center justify-around h-20 px-4">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                                    activeSection === section.id ? "text-primary" : "text-muted-foreground"
                                }`}
                                title={section.name}
                            >
                                <span className="text-xl">{section.icon}</span>
                                <span className="text-xs font-medium">{section.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    // Desktop layout
    return (
        <div className="hidden md:flex h-3/4 my-auto rounded-[100px] m-4 w-24 border flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6 w-full">
                <nav className="flex flex-col w-full">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleNavClick(section.id)}
                            className={`flex flex-col items-center gap-2 transition-all duration-300 group relative py-2 px-3 ${
                                activeSection === section.id
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-secondary/50"
                            }`}
                            title={section.name}
                        >
                            <span className="text-xl">{section.icon}</span>
                            <span className="text-xs text-center font-medium">{section.name}</span>
                            {activeSection === section.id && (
                                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-primary rounded-full"></div>
                            )}
                        </button>
                    ))}
                </nav>
                <button
                    onClick={toggleTheme}
                    className="w-full h-10  bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                    title="Toggle theme"
                >
                    {resolvedTheme === "dark" ? (
                        <Sun className="w-4 h-4" />
                    ) : (
                        <Moon className="w-4 h-4" />
                    )}
                </button>
            </div>

        </div>
    )
}