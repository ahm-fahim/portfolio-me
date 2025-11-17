// components/theme-provider.tsx
"use client"

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react"

type Theme = "light" | "dark" | "system"
type ThemeContextType = {
    theme: Theme
    setTheme: (theme: Theme) => void
    resolvedTheme: "light" | "dark"
    toggleTheme: () => void
}

interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

export function ThemeProvider({
                                  children,
                                  defaultTheme = "system",
                                  storageKey = "app-theme",
                              }: ThemeProviderProps) {
    // Initialize mounted as true by default, we'll handle the initial render differently
    const [isInitialized, setIsInitialized] = useState(false)
    const [theme, setThemeState] = useState<Theme>(() => {
        // Initialize state with value from localStorage
        if (typeof window === 'undefined') return defaultTheme

        try {
            const savedTheme = localStorage.getItem(storageKey) as Theme | null
            return savedTheme || defaultTheme
        } catch {
            return defaultTheme
        }
    })

    const getSystemTheme = (): "light" | "dark" => {
        if (typeof window === 'undefined') return 'light'
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    const getResolvedTheme = useCallback((): "light" | "dark" => {
        if (theme === "system") {
            return getSystemTheme()
        }
        return theme
    }, [theme])

    // Handle initial theme application after mount
    useEffect(() => {
        // This runs only once after the component mounts
        const applyInitialTheme = () => {
            const root = document.documentElement
            const resolved = getResolvedTheme()

            root.classList.remove("light", "dark")
            root.classList.add(resolved)

            // Update meta theme-color
            const metaThemeColor = document.querySelector("meta[name='theme-color']")
            if (metaThemeColor) {
                metaThemeColor.setAttribute("content", resolved === "dark" ? "#0f172a" : "#f8f9fa")
            }

            setIsInitialized(true)
        }

        applyInitialTheme()
    }, []) // Empty dependency array - runs once on mount

    // Apply theme class when theme changes (after initial mount)
    useEffect(() => {
        if (!isInitialized) return

        const root = document.documentElement
        const resolved = getResolvedTheme()

        root.classList.remove("light", "dark")
        root.classList.add(resolved)

        // Update meta theme-color
        const metaThemeColor = document.querySelector("meta[name='theme-color']")
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", resolved === "dark" ? "#0f172a" : "#f8f9fa")
        }
    }, [theme, isInitialized, getResolvedTheme])

    // Listen for system theme changes
    useEffect(() => {
        if (!isInitialized || theme !== "system") return

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

        const handleChange = () => {
            const root = document.documentElement
            const resolved = getSystemTheme()
            root.classList.remove("light", "dark")
            root.classList.add(resolved)
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [theme, isInitialized])

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme)
        try {
            localStorage.setItem(storageKey, newTheme)
        } catch (error) {
            console.warn("Could not save theme to localStorage:", error)
        }
    }, [storageKey])

    const toggleTheme = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark")
    }, [theme, setTheme])

    const contextValue = useMemo(() => ({
        theme,
        setTheme,
        resolvedTheme: getResolvedTheme(),
        toggleTheme,
    }), [theme, setTheme, getResolvedTheme, toggleTheme])

    // Prevent hydration mismatch - show nothing until initialized
    if (!isInitialized) {
        return (
            <ThemeContext.Provider value={contextValue}>
                <div style={{ visibility: 'hidden' }}>{children}</div>
            </ThemeContext.Provider>
        )
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}