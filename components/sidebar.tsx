// components/sidebar.tsx
"use client"

import React, { useState, useEffect, useCallback } from "react"
import {
    Github,
    Linkedin,
    User,
    FileText,
    Briefcase,
    Edit3,
    Mail,
    TextAlignStart,
    TextAlignEnd,
    X,
    LucideIcon
} from 'lucide-react'
import { useTheme } from "./theme-provider"
import Me from "@/components/Me";
import { IoMoonOutline, IoPartlySunny } from "react-icons/io5";
import TextType from "@/components/TextType";

interface SidebarProps {
    activeSection: number
    onNavigate: (index: number) => void
}

interface Section {
    name: string
    icon: LucideIcon
    id: number
}

interface SocialLink {
    icon: LucideIcon
    label: string
    href: string
}

interface NavItemProps {
    section: Section
    isActive: boolean
    onClick: (id: number) => void
    variant?: "desktop" | "mobile-bottom" | "desktop-mini" | "drawer"
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
    const [isMobile, setIsMobile] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const { theme, resolvedTheme, toggleTheme } = useTheme()

    // Memoized sections data
    const sections: Section[] = React.useMemo(() => [
        { name: "ABOUT", icon: User, id: 0 },
        { name: "RESUME", icon: FileText, id: 1 },
        { name: "PROJECTS", icon: Briefcase, id: 2 },
        { name: "ARTICLES", icon: Edit3, id: 3 },
        { name: "CONTACT", icon: Mail, id: 4 },
    ], [])

    const socialLinks: SocialLink[] = React.useMemo(() => [
        { icon: Github, label: "GitHub", href: "https://github.com/ahm-fahim" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/md-fahim-morshed-5b2126233" },
    ], [])

    // Responsive check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const handleNavClick = useCallback((index: number) => {
        onNavigate(index)
        setIsDrawerOpen(false)
    }, [onNavigate])

    const toggleDrawer = useCallback(() => {
        setIsDrawerOpen(prev => !prev)
    }, [])

    // Navigation Item Component with proper TypeScript
    const NavItem: React.FC<NavItemProps> = ({ section, isActive, onClick, variant = "desktop" }) => {
        const Icon = section.icon
        const baseClasses = "transition-all duration-300"

        if (variant === "mobile-bottom") {
            return (
                <button
                    onClick={() => onClick(section.id)}
                    className={`flex flex-col items-center justify-center gap-1 ${baseClasses} ${
                        isActive ? "text-green-600" : "text-muted-foreground"
                    }`}
                    title={section.name}
                >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{section.name}</span>
                </button>
            )
        }

        if (variant === "desktop-mini") {
            return (
                <button
                    onClick={() => onClick(section.id)}
                    className={`flex flex-col items-center gap-2 transition-all duration-300 group relative py-2 px-3 ${
                        isActive
                            ? "bg-green-600/20 text-green-600"
                            : "text-foreground hover:bg-secondary/50"
                    }`}
                    title={section.name}
                >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs text-center font-medium">{section.name}</span>
                    {isActive && (
                        <div className="absolute -right-[53.2vh] top-1/2 -translate-y-1/2 w-1 h-full bg-green-600"></div>
                    )}
                </button>
            )
        }

        // Default drawer variant
        return (
            <button
                onClick={() => onClick(section.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg ${baseClasses} ${
                    isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-secondary/50"
                }`}
            >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{section.name}</span>
            </button>
        )
    }

    return (
        <>
            {/* Mobile Header */}
            <div className="fixed z-40 px-3 py-2 flex items-center justify-between w-full md:hidden bg-card/80 dark:text-white  backdrop-blur-sm">
                <div>
                    <h1 className="text-[12px] play-bold">Md. Fahim Morshed</h1>
                    <div className="text-[9px] text-green-600">
                        <TextType
                            text={["Full Stack Developer"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="hover:text-green-600 transition-all duration-300"
                        title="Toggle theme"
                    >
                        {resolvedTheme === "dark" ? (
                            <IoPartlySunny className="w-4 h-4" />
                        ) : (
                            <IoMoonOutline className="w-4 h-4" />
                        )}
                    </button>
                    <button
                        onClick={toggleDrawer}
                        className="hover:text-primary transition-all duration-300"
                        title="Toggle menu"
                    >
                        {isDrawerOpen ? <X className="w-5 h-5" /> : <TextAlignEnd className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed left-0 top-0 h-screen w-72 dark:bg-black bg-white/95 dark:text-white z-50 flex flex-col transition-transform duration-300 ${
                    isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >


                <nav className="flex flex-col gap-2 p-4 flex-1">
                    {sections.map((section) => (
                        <NavItem
                            key={section.id}
                            section={section}
                            isActive={activeSection === section.id}
                            onClick={handleNavClick}
                            variant="drawer"
                        />
                    ))}
                </nav>

                <div className="border-t border-border p-4">
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

            {/* Mobile Bottom Navigation */}
            {isMobile && (
                <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-sm dark:text-white dark:border-gray-800 border-gray-100 md:hidden border-t">
                    <div className="flex items-center justify-around h-20 px-4">
                        {sections.map((section) => (
                            <NavItem
                                key={section.id}
                                section={section}
                                isActive={activeSection === section.id}
                                onClick={handleNavClick}
                                variant="mobile-bottom"
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            {!isMobile && (
                <div className="flex p-2">
                    <div className="h-3/4 my-auto z-30 border-l border-b border-green-600 rounded-[100px]">
                        <div className="hidden bg-white dark:bg-black/95 dark:text-white md:flex h-full my-auto -mr-5 rounded-[100px] m-2 w-24 border border-gray-100 dark:border-gray-800 flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center gap-6 w-full">
                                <div>
                                    <button
                                        onClick={toggleDrawer}
                                        className="hover:text-primary transition-all duration-300"
                                        title="Toggle menu"
                                    >
                                        {isDrawerOpen ? <X className="w-5 h-5" /> : <TextAlignStart className="w-5 h-5" />}
                                    </button>
                                </div>
                                <nav className="flex flex-col w-full">
                                    {sections.map((section) => (
                                        <NavItem
                                            key={section.id}
                                            section={section}
                                            isActive={activeSection === section.id}
                                            onClick={handleNavClick}
                                            variant="desktop-mini"
                                        />
                                    ))}
                                </nav>
                                <button
                                    onClick={toggleTheme}
                                    className="w-full h-10 text-foreground hover:text-primary flex items-center justify-center transition-all duration-300"
                                    title="Toggle theme"
                                >
                                    {resolvedTheme === "dark" ? (
                                        <IoPartlySunny className="w-6 h-6" />
                                    ) : (
                                        <IoMoonOutline className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <Me />
                </div>
            )}
        </>
    )
}