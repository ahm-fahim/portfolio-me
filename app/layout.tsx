// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const fontVariables = `${GeistSans.variable} ${GeistMono.variable}`

export const metadata: Metadata = {
    title: {
        default: "MD. Fahim Morshed - Full Stack Developer",
        template: "%s | MD. Fahim Morshed"
    },
    description: "Full Stack Developer specializing in Next.js, React, NestJS, and PostgreSQL",
    keywords: [
        "Full Stack Developer",
        "Next.js",
        "React",
        "NestJS",
        "PostgreSQL",
        "MD. Fahim Morshed"
    ],
    authors: [{ name: "MD. Fahim Morshed" }],
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "MD. Fahim Morshed - Full Stack Developer",
        description: "Full Stack Developer specializing in Next.js, React, NestJS, and PostgreSQL",
        siteName: "MD. Fahim Morshed Portfolio",
    },
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
                sizes: "32x32",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
                sizes: "32x32",
            },
        ],
        apple: "/apple-icon.png",
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8f9fa' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
    colorScheme: 'light dark',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={fontVariables}
        >
        <body className={`font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="app-theme">
            {children}
        </ThemeProvider>
        <Analytics />
        </body>
        </html>
    )
}