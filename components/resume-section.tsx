"use client"

import { 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt, 
    FaGithub, 
    FaLinkedin, 
    FaGraduationCap, 
    FaBriefcase, 
    FaCode, 
    FaExternalLinkAlt, 
    FaFolderOpen 
} from "react-icons/fa"
import { ResumeDetails } from "./resume-details"

export function ResumeSection() {
    const skills = [
        "JavaScript", "HTML5", "CSS3", "React.js", "Node.js", 
        "Express.js", "MongoDB", "MySQL", "Git", "GitHub", 
        "Postman", "VS Code", "Jira", "Figma", "REST APIs", "JWT", "CRUD", "MVC"
    ]

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce web application with user authentication, product management, and dynamic cart operations.",
            tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
            github: "https://github.com/ahm-fahim",
            live: "#"
        },
        {
            title: "Portfolio & CMS Dashboard",
            description: "Responsive portfolio featuring clean UI, theme customization, and an admin dashboard for dynamic content updates.",
            tech: ["React.js", "Tailwind CSS", "REST APIs"],
            github: "https://github.com/ahm-fahim",
            live: "#"
        }
    ]

    return (
        <section className="w-full h-[96vh] overflow-y-scroll scrollbar-none [ms-overflow-style:none] [scrollbar-width:none] md:p-4 py-10 [&::-webkit-scrollbar]:hidden">
            
            <div className="flex justify-start items-start border-b-[0.5px] dark:border-gray-800 pb-3">
                <h1 className="text-2xl font-bold"><span className="text-green-600">R</span>esume</h1>
            </div>
            {/* Header Section */}
            <div className="  p-4 ">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            MD. FAHIM MORSHED
                        </h1>
                        <p className="text-green-600 dark:text-green-400 font-semibold mt-1 text-lg">
                            Full Stack Developer
                        </p>
                    </div>

                    {/* Social & Contact Links */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <a 
                            href="https://github.com/ahm-fahim" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-green-600 hover:text-white transition-all"
                        >
                            <FaGithub className="text-lg" /> GitHub
                        </a>
                        <a 
                            href="https://linkedin.com/in/md-fahim-morshed-5b2126233" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-green-600 hover:text-white transition-all"
                        >
                            <FaLinkedin className="text-lg text-blue-500" /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* Quick Info Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t-[0.5px] border-gray-100 dark:border-gray-800 text-sm">
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-green-600 text-lg flex-shrink-0" />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-green-600 text-lg flex-shrink-0" />
                        <span>+880 1790-298187</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-green-600 text-lg flex-shrink-0" />
                        <span>contactahmfahim@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Professional Summary */}
            <div className=" p-4">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                    Professional Summary
                </h2>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Computer Science and Engineering student with hands-on experience in MERN stack development. Experienced in building responsive web applications, REST APIs, and collaborating with remote development teams. Seeking a Junior Full Stack Developer, Frontend Developer, or Backend Developer Intern role.
                </p>
            </div>

        
            <ResumeDetails/>

            

        </section>
    )
}