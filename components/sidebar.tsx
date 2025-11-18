// components/sidebar.tsx
"use client"

import { useState, useEffect } from "react"
import {
    Github,
    Linkedin,
    Moon,
    Sun,
    Menu,
    X,
    User,
    FileText,
    Briefcase,
    Edit3,
    Mail, TextAlignStart, TextAlignEnd, MoonIcon, SunIcon
} from 'lucide-react'
import { useTheme } from "./theme-provider"
import Me from "@/components/Me";
import { IoMoonOutline } from "react-icons/io5";

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
        { name: "ABOUT", icon: User, id: 0 },
        { name: "RESUME", icon: FileText, id: 1 },
        { name: "PROJECTS", icon: Briefcase, id: 2 },
        { name: "ARTICLES", icon: Edit3, id: 3 },
        { name: "CONTACT", icon: Mail, id: 4 },
    ]

    const handleNavClick = (index: number) => {
        onNavigate(index)
        setIsDrawerOpen(false)
    }

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/ahm-fahim" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/md-fahim-morshed-5b2126233" },
    ]

    return (
        <>
            {/* Menu Button - Visible on both desktop and mobile */}
            <div className="fixed z-40 px-3 py-2 flex items-center justify-between w-full md:hidden">
                <div>
                    <h1 className="text-[12px] play-bold">Md. Fahim Morshed</h1>
                    <p className="text-[9px] text-primary">Full Stack Developer</p>
                </div>

                <div className="flex items-center gap-4 ">
                    <button
                        onClick={toggleTheme}
                        className="w-full hover:text-primary-foreground flex items-center justify-center gap-2 transition-all duration-300 text-foreground font-medium"
                        title="Toggle theme"
                    >
                        {resolvedTheme === "dark" ? (
                            <>
                                <SunIcon className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                <IoMoonOutline className="w-4 h-4" />
                            </>
                        )}
                    </button>
                    <button
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        className="hover:text-primary transition-all duration-300 "
                        title="Toggle menu"
                    >
                        {isDrawerOpen ? <X className="w-5 h-5" /> : <TextAlignEnd className="w-5 h-5" />}
                    </button>
                </div>

            </div>

            {/* Overlay - Visible on both desktop and mobile */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

            {/* Drawer - Visible on both desktop and mobile */}
            <div
                className={`fixed left-0 top-0 h-screen w-72 bg-card border-r border-border z-40 flex flex-col transition-transform duration-300 ${
                    isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col items-center gap-4 p-6 border-b border-border">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden flex items-center justify-center border-2 border-primary/50">
                            <User className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-lg text-foreground">MD. Fahim</h3>
                        <p className="text-sm text-primary font-semibold mt-1">Full Stack Developer</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-2 p-4 flex-1">
                    {sections.map((section) => {
                        const Icon = section.icon
                        return (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                    activeSection === section.id
                                        ? "bg-primary/10 text-primary font-semibold"
                                        : "text-muted-foreground hover:bg-secondary/50"
                                }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{section.name}</span>
                            </button>
                        )
                    })}
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


                </div>
            </div>

            {/* Mobile Bottom Navigation - Only visible on mobile */}
            {isMobile && (
                <div className="fixed bottom-0 left-0 right-0 z-50  bg-card md:hidden border-t">
                    <div className="flex items-center justify-around h-20 px-4">
                        {sections.map((section) => {
                            const Icon = section.icon
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => handleNavClick(section.id)}
                                    className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                                        activeSection === section.id ? "text-primary" : "text-muted-foreground"
                                    }`}
                                    title={section.name}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="text-xs font-medium">{section.name}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* Desktop Sidebar - Only visible on desktop */}
            {!isMobile && (
                <div className="flex p-2">
                    <div className="h-3/4 my-auto z-30 border-l border-b border-green-600 rounded-[100px]">
                        <div className="hidden bg-card md:flex h-full my-auto -mr-5 rounded-[100px] m-2 w-24 border flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center gap-6 w-full">
                                <div>
                                    <button
                                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                                        className=" hover:text-primary transition-all duration-300"
                                        title="Toggle menu"
                                    >
                                        {isDrawerOpen ? <X className="w-5 h-5" /> : <TextAlignStart className="w-5 h-5" />}
                                    </button>
                                </div>
                                <nav className="flex flex-col w-full">
                                    {sections.map((section) => {
                                        const Icon = section.icon
                                        return (
                                            <button
                                                key={section.id}
                                                onClick={() => handleNavClick(section.id)}
                                                className={`flex flex-col items-center gap-2 transition-all duration-300 group relative py-2 px-3 ${
                                                    activeSection === section.id
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-foreground hover:bg-secondary/50"
                                                }`}
                                                title={section.name}
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="text-xs text-center font-medium">{section.name}</span>
                                                {activeSection === section.id && (
                                                    <div className="absolute -right-[53.2vh] top-1/2 -translate-y-1/2 w-1 h-full bg-primary"></div>
                                                )}
                                            </button>
                                        )
                                    })}
                                </nav>
                                <button
                                    onClick={toggleTheme}
                                    className="w-full h-10 text-foreground hover:text-primary flex items-center justify-center transition-all duration-300"
                                    title="Toggle theme"
                                >
                                    {resolvedTheme === "dark" ? (
                                        <Sun className="w-6 h-6" />
                                    ) : (
                                        <IoMoonOutline className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <Me/>
                </div>
            )}
        </>
    )
}