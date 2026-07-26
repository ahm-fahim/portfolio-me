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
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "app-theme",
}: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false)
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === "undefined") return defaultTheme
        try {
            return (localStorage.getItem(storageKey) as Theme) || defaultTheme
        } catch {
            return defaultTheme
        }
    })

    // Helper to get system color scheme preference
    const getSystemTheme = (): "light" | "dark" => {
        if (typeof window === "undefined") return "light"
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    // Resolve active theme ("light" or "dark")
    const resolvedTheme = useMemo<"light" | "dark">(() => {
        return theme === "system" ? getSystemTheme() : theme
    }, [theme])

    // Update DOM class name whenever theme changes
    useEffect(() => {
        const root = document.documentElement
        const targetTheme = theme === "system" ? getSystemTheme() : theme

        root.classList.remove("light", "dark")
        root.classList.add(targetTheme)
        setMounted(true)
    }, [theme])

    // Listen for OS system theme changes when set to "system"
    useEffect(() => {
        if (theme !== "system") return

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleChange = () => {
            const root = document.documentElement
            root.classList.remove("light", "dark")
            root.classList.add(getSystemTheme())
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [theme])

    const setTheme = useCallback(
        (newTheme: Theme) => {
            setThemeState(newTheme)
            try {
                localStorage.setItem(storageKey, newTheme)
            } catch (error) {
                console.warn("Could not save theme to localStorage:", error)
            }
        },
        [storageKey]
    )

    // Toggles based on resolved theme (works intuitively even in 'system' mode)
    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }, [resolvedTheme, setTheme])

    const contextValue = useMemo(
        () => ({
            theme,
            setTheme,
            resolvedTheme,
            toggleTheme,
        }),
        [theme, setTheme, resolvedTheme, toggleTheme]
    )

    // Hide children briefly before mount to prevent hydration mismatch flashes
    if (!mounted) {
        return (
            <ThemeContext.Provider value={contextValue}>
                <div style={{ visibility: "hidden" }}>{children}</div>
            </ThemeContext.Provider>
        )
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}