"use client"

import { useState } from "react"
import { 
    Phone, 
    Mail, 
    MapPin, 
    MessageSquare, 
    Send, 
    CheckCircle2, 
    Copy, 
    ExternalLink,
    Sparkles 
} from "lucide-react"

export function ContactSection() {
    const [copied, setCopied] = useState<string | null>(null)

    // Contact Details
    const phone = "+8801790298187"
    const displayPhone = "01790298187"
    const whatsapp = "8801581593836" // API format
    const displayWhatsapp = "01581593836"
    const email = "contactahmfahim@gmail.com"
    const location = "Nakhalpara, Tejgaon, Dhaka, Bangladesh"

    // Helper to copy text to clipboard
    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text)
        setCopied(label)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <main className="w-full h-[96vh] overflow-y-scroll scrollbar-none [ms-overflow-style:none] [scrollbar-width:none] md:p-4 py-10 pb-20 [&::-webkit-scrollbar]:hidden">
            <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
                
                {/* Header Section */}
                <div className="border-b border-gray-200 dark:border-gray-800 pb-5 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="p-2 bg-green-500/10 text-green-500 rounded-xl">
                            <MessageSquare className="w-6 h-6" />
                        </span>
                        <div>
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Let's Connect & <span className="text-green-500">Collaborate</span>
                            </h2>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Available for full-time roles, freelance projects, and tech consultations.
                            </p>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 dark:text-green-400 text-xs font-semibold w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Open to New Opportunities
                    </div>
                </div>

                {/* Quick Action Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-1">
                    
                    {/* Live Phone Call */}
                    <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 rounded-2xl p-5 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <button
                                    onClick={() => handleCopy(displayPhone, "Phone")}
                                    className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs flex items-center gap-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    title="Copy Phone Number"
                                >
                                    {copied === "Phone" ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Direct Call</span>
                            <h3 className="font-bold text-gray-900 dark:text-white mt-1 text-base">
                                {displayPhone}
                            </h3>
                        </div>
                        <a
                            href={`tel:${phone}`}
                            className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl transition-all shadow-sm"
                        >
                            <span>Call Now</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Live WhatsApp */}
                    <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 rounded-2xl p-5 hover:border-green-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <button
                                    onClick={() => handleCopy(displayWhatsapp, "WhatsApp")}
                                    className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs flex items-center gap-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    title="Copy WhatsApp Number"
                                >
                                    {copied === "WhatsApp" ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">WhatsApp</span>
                            <h3 className="font-bold text-gray-900 dark:text-white mt-1 text-base">
                                {displayWhatsapp}
                            </h3>
                        </div>
                        <a
                            href={`https://wa.me/${whatsapp}?text=Hi%20Fahim,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-green-50 dark:bg-green-950/40 hover:bg-green-600 hover:text-white text-green-700 dark:text-green-400 dark:hover:bg-green-600 dark:hover:text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                        >
                            <span>Chat Instant</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Live Email */}
                    <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 rounded-2xl p-5 hover:border-amber-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <button
                                    onClick={() => handleCopy(email, "Email")}
                                    className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs flex items-center gap-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    title="Copy Email"
                                >
                                    {copied === "Email" ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Email Address</span>
                            <h3 className="font-bold text-gray-900 dark:text-white mt-1 text-xs truncate" title={email}>
                                {email}
                            </h3>
                        </div>
                        <a
                            href={`mailto:${email}?subject=Inquiry%20from%20Portfolio`}
                            className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl transition-all shadow-sm"
                        >
                            <span>Send Mail</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Exact Location */}
                    <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/80 rounded-2xl p-5 hover:border-red-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5" />
                                </div>
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Location</span>
                            <h3 className="font-bold text-gray-900 dark:text-white mt-1 text-xs leading-snug">
                                {location}
                            </h3>
                        </div>
                        <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(location)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl transition-all shadow-sm"
                        >
                            <span>View Map</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                </div>

                {/* Direct Message Form Container */}
                <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-green-500" /> Send a Quick Message
                        </h3>
                        <span className="text-xs text-gray-400 hidden sm:inline-block">
                            Direct email dispatch
                        </span>
                    </div>

                    <form 
                        onSubmit={(e) => {
                            e.preventDefault()
                            const formData = new FormData(e.currentTarget)
                            const message = formData.get("message")
                            const name = formData.get("name")
                            window.open(`mailto:${email}?subject=Message%20from%20${encodeURIComponent(String(name))}&body=${encodeURIComponent(String(message))}`)
                        }}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                                    Your Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="e.g. John Doe"
                                    className="w-full px-4 py-3 text-sm bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/80 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-gray-900 dark:text-white transition-all placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                                    Your Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="e.g. john@example.com"
                                    className="w-full px-4 py-3 text-sm bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/80 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-gray-900 dark:text-white transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                placeholder="How can I help you?"
                                className="w-full px-4 py-3 text-sm bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/80 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-gray-900 dark:text-white transition-all resize-none placeholder:text-gray-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-green-600/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                        >
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>

            </div>
        </main>
    )
}