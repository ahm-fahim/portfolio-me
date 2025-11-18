// hooks/use-theme.ts
"use client"

import { useState, useEffect } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        // Get initial theme
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        const initialTheme = savedTheme || systemTheme

        setTheme(initialTheme)
        setResolvedTheme(initialTheme)
        document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        setResolvedTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }

    return { theme, resolvedTheme, toggleTheme }
}