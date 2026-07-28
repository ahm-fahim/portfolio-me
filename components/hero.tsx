"use client"

import React, { useState } from 'react'
import Image from "next/image"
import img from "@/public/me.jpg"
import { 
    CloudDownload, 
    GithubIcon, 
    LinkedinIcon, 
    Phone, 
    Check, 
    Binary, 
    ShieldCheck, 
    Cpu, 
    Fingerprint,
    Sparkles
} from "lucide-react"
import TextType from '@/components/TextType'

export function Hero() {
    const [downloaded, setDownloaded] = useState(false)

    const handleDownload = () => {
        setDownloaded(true)
        const link = document.createElement('a')
        link.href = '/resume.pdf'
        link.download = 'Md_Fahim_Morshed_Resume.pdf'
        link.click()
        
        setTimeout(() => setDownloaded(false), 3000)
    }

    return (
        <section className="relative w-full max-w-md mx-auto my-3 rounded-3xl overflow-hidden border border-green-500/40 bg-slate-950 text-cyan-300 shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-500 group/card font-mono">
            
            {/* 1. Animated Holo Background Aura Wave */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl group-hover/card:bg-cyan-500/35 transition-all duration-700 pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl group-hover/card:bg-emerald-500/35 transition-all duration-700 pointer-events-none animate-pulse" />

            {/* 2. Top Cyber Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-cyan-500/30 text-[10px] tracking-widest text-cyan-400">
                <div className="flex items-center gap-1.5">
                    <Fingerprint className="w-3.5 h-3.5 text-green-400 animate-pulse" />
                    <span>BIOMETRIC: VERIFIED</span>
                </div>
                <div className="flex items-center gap-1 text-green-500 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ENCRYPTED</span>
                </div>
            </div>

            {/* 3. Image Section with Holographic Matrix Ring */}
            <div className="relative w-full aspect-[4/5] overflow-hidden flex items-center justify-center">
                
                {/* Base Portrait Image */}
                <Image
                    className="object-cover w-full h-full grayscale contrast-125 brightness-90 group-hover/card:scale-105 group-hover/card:brightness-100 transition-all duration-700 ease-out"
                    src={img}
                    alt="Md. Fahim Morshed"
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Rotating Matrix Ring Animation Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Ring 1: Outer Reverse Rotating Dashed Circle */}
                    <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-cyan-400/40 animate-[spin_16s_linear_infinite_reverse] group-hover/card:border-green-400/80 transition-colors" />
                    
                    {/* Ring 2: Inner Rotating Cipher Ring */}
                    <div className="absolute w-[70%] h-[70%] rounded-full border border-emerald-400/30 animate-[spin_10s_linear_infinite]" />
                </div>

                {/* Vertical Digital Matrix Stream Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,182,212,0.08)_50%,transparent_50%)] bg-[size:100%_4px] pointer-events-none" />

                {/* Corner HUD Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-green-400 shadow-[0_0_8px_#22d3ee]" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-green-400 shadow-[0_0_8px_#22d3ee]" />
                <div className="absolute bottom-16 left-3 w-3 h-3 border-b-2 border-l-2 border-green-400 shadow-[0_0_8px_#22d3ee]" />
                <div className="absolute bottom-16 right-3 w-3 h-3 border-b-2 border-r-2 border-green-400 shadow-[0_0_8px_#22d3ee]" />

                {/* Holographic Watermark Badge */}
                <div className="absolute bottom-16 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-[10px] text-cyan-300">
                    <Binary className="w-3.5 h-3.5 text-green-500 animate-bounce" />
                    <span>11001</span>
                </div>

                {/* Vignette Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            </div>

            {/* 4. Profile Details Panel */}
            <div className="relative -mt-12 px-6 pt-2 pb-6 flex flex-col items-center text-center z-10 bg-slate-950/90 backdrop-blur-xl border-t border-cyan-500/30">
                
                {/* Name Header with Cyber Glow */}
                <h1 className="text-2xl font-extrabold tracking-wider text-white mt-2 group-hover/card:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-green-400 animate-pulse" />
                    Md. Fahim Morshed
                </h1>

                {/* Dynamic Role Display */}
                <div className="flex items-center justify-center space-x-2 my-2.5 text-xs md:text-sm text-green-500 font-bold h-7 bg-green-950/50 px-3 rounded-full border border-green-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <Sparkles className="w-3.5 h-3.5 text-green-500 animate-spin" />
                    <TextType
                        text={[
                            "Frontend Developer",
                            "Backend Developer",
                            "Full Stack Developer",
                        ]}
                        typingSpeed={65}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="▌"
                    />
                </div>

                {/* Social Navigation */}
                <div className="flex items-center justify-center space-x-4 my-3">
                    <a 
                        href="https://github.com/ahm-fahim" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 border border-green-500/40 text-green-500 hover:text-black hover:bg-green-400 hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300 hover:scale-110"
                        aria-label="GitHub Profile"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/md-fahim-morshed-5b2126233/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-green-500 hover:text-black hover:bg-green-400 hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedinIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>

            {/* 5. Bottom Interactive Buttons */}
            <div className="grid grid-cols-2 border-t border-cyan-500/30 bg-slate-950">
                <button
                    onClick={handleDownload}
                    className="py-3.5 px-3 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider text-green-500 hover:bg-green-400 hover:text-slate-950 transition-all duration-300 group/btn active:scale-95"
                >
                    <span>{downloaded ? "ACCESSED!" : "DOWNLOAD CV"}</span>
                    {downloaded ? (
                        <Check className="w-4 h-4 text-slate-950" />
                    ) : (
                        <CloudDownload className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                    )}
                </button>

                <a
                    href="#section-3"
                    className="py-3.5 px-3 flex items-center justify-center space-x-2 border-l border-green-500/30 text-xs font-bold uppercase tracking-wider text-green-500 hover:bg-green-400 hover:text-slate-950 transition-all duration-300 group/btn active:scale-95"
                >
                    <span>PING ME</span>
                    <Phone className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                </a>
            </div>

        </section>
    )
}