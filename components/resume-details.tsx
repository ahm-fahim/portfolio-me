"use client"

import { 
    FaJs, 
    FaReact, 
    FaNodeJs, 
    FaGitAlt, 
    FaGithub, 
    FaHtml5, 
    FaCss3Alt, 
    FaFigma, 
    FaCode, 
    FaBriefcase, 
    FaGraduationCap, 
    FaCalendarAlt, 
    FaMapMarkerAlt 
} from "react-icons/fa"
import { 
    SiExpress, 
    SiMongodb, 
    SiMysql, 
    SiPostman, 
    SiJira, 
    SiVscodium, 
    SiJsonwebtokens, 
    SiNextdotjs, 
    SiWebstorm 
} from "react-icons/si"
import { TbApi, TbHierarchy2, TbDatabase } from "react-icons/tb"

export function ResumeDetails() {
    // Skills Data
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
                { name: "React.js", icon: <FaReact className="text-sky-400" /> },
                { name: "JavaScript", icon: <FaJs className="text-amber-500" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            ]
        },
        {
            title: "Backend & Databases",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
            ]
        },
        {
            title: "Architecture & Protocols",
            skills: [
                { name: "REST APIs", icon: <TbApi className="text-emerald-500" /> },
                { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
                { name: "CRUD", icon: <TbDatabase className="text-indigo-500" /> },
                { name: "MVC Architecture", icon: <TbHierarchy2 className="text-purple-500" /> },
            ]
        },
        {
            title: "Tools & Workflow",
            skills: [
                { name: "WebStorm", icon: <SiWebstorm className="text-cyan-500" /> },
                { name: "VS Code", icon: <SiVscodium className="text-blue-500" /> },
                { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
                { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
                { name: "Jira", icon: <SiJira className="text-blue-600" /> },
                { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
            ]
        }
    ]

    // Experience Data
    const experiences = [
        {
            role: "Junior Full Stack Developer",
            type: "Remote",
            company: "Pintag",
            location: "US",
            period: "Jan 2025 – Oct 2025",
            points: [
                "Collaborated efficiently with cross-functional remote engineering teams.",
                "Maintained comprehensive application documentation and specifications.",
                "Identified bottlenecks, debugged core logic, and optimized performance."
            ]
        },
        {
            role: "Web Design Trainer",
            type: "On-site",
            company: "Department of Youth Development, Bogura",
            location: "Bogura, Bangladesh",
            period: "Nov 2022 – Dec 2022",
            points: [
                "Instructed foundational and intermediate Web Design concepts.",
                "Delivered practical, hands-on workshops covering HTML5 & CSS3."
            ]
        }
    ]

    // Education Data
    const educationList = [
        {
            degree: "B.Sc. in Computer Science & Engineering(CSE)",
            institution: "Southeast University",
            period: "Expected June 2027",
            tag: "Weekend Program (Friday & Saturday)",
            status: "In Progress"
        },
        {
            degree: "Diploma in Computer Science & Technology(CST)",
            institution: "Vocational Teachers Training Institute",
            period: "2022",
            tag: "Polytechnic Diploma",
            status: "Completed"
        }
    ]

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 text-gray-800 dark:text-gray-200">
            {/* Grid for Experience & Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Modern Experience Section */}
                <div className="bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                        <FaBriefcase className="text-green-600" /> Experience
                    </h2>

                    <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 space-y-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative pl-6">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-green-600 border-4 border-white dark:border-gray-900 shadow-sm" />

                                <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h3 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <span className="text-xs font-semibold px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-400 rounded">
                                            {exp.type}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                                        <span className="text-green-600 dark:text-green-400 font-semibold">{exp.company}</span>
                                        <span className="flex items-center gap-1">
                                            <FaMapMarkerAlt /> {exp.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt /> {exp.period}
                                        </span>
                                    </div>

                                    <ul className="mt-3 space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                                        {exp.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2">
                                                <span className="text-green-600 font-bold">•</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modern Education Section */}
                <div className="bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                        <FaGraduationCap className="text-green-600" /> Education
                    </h2>

                    <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 space-y-8">
                        {educationList.map((edu, idx) => (
                            <div key={idx} className="relative pl-6">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-green-600 border-4 border-white dark:border-gray-900 shadow-sm" />

                                <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h3 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                                            {edu.degree}
                                        </h3>
                                        <span className="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded">
                                            {edu.status}
                                        </span>
                                    </div>

                                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                                        {edu.institution}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                        <FaCalendarAlt />
                                        <span>{edu.period}</span>
                                    </div>

                                    <span className="inline-block mt-2 text-xs font-medium italic text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-2 py-1 rounded border border-gray-100 dark:border-gray-800">
                                        {edu.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            {/* Structured Technical Skills Section */}
            <div className="bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                    <FaCode className="text-green-600" /> Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                        <div 
                            key={category.title}
                            className="bg-gray-50/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800/80 rounded-xl p-4"
                        >
                            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <div 
                                        key={skill.name}
                                        className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/60 rounded-lg px-3 py-1.5 shadow-sm hover:border-green-500 dark:hover:border-green-500 hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            

        </div>
    )
}