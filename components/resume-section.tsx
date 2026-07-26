// resume-section.tsx
"use client";

import React from "react";

export function ResumeSection() {
    const professionalExperience = [
        {
            title: "FULL STACK DEVELOPER",
            company: "Pintag, US",
            location: "Remote",
            period: "January 2025 – October 2025",
        },
        {
            title: "WEB DESIGNER TRAINER",
            company: "Department Of  Youth Development, Bogura",
            location: "Bogura",
            period: "November 2022 - December 2022 ",
        },
    ];

    const education = [
        {
            degree: "B.Sc. in Computer Science and Engineering (CSE)",
            institution: "Southeast University",
            location: "Dhaka, Bangladesh",
            period: "Current Year: 4th Year (Ongoing)",
        },
        {
            degree: "Diploma in Computer Science and Technology (CST)",
            institution: "VTTI",
            location: "Bogura",
            period: "2018 – 2022",
        },
    ];

    const skills = {
        "Frontend Frameworks": ["Next.js", "React.js", "JavaScript (ES6+)"],
        "Backend Frameworks": ["Node.js, Express.js"],
        "Databases": ["MongoDB", "PostgreSQL", "MySQL",],
        "Styling & UI": ["Tailwind CSS", "Bootstrap CSS"],
        "Programming Languages": ["JavaScript", "C", "C++"],
    };

    return (
        <section className="h-[96vh] overflow-y-scroll py-8 px-4 sm:px-6 lg:px-8  transition-colors duration-300">
            <div className="mx-auto">
                <div className="flex justify-start items-start border-b dark:border-gray-800 pb-3">
                    <h1 className="text-2xl font-bold"><span className="text-green-600">R</span>esume</h1>
                </div>
                {/* Header - Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Highly motivated and results-oriented Full Stack Developer with a strong foundation in modern web technologies,
                            specializing in the Next.js/React frontend ecosystem and NestJS/PostgreSQL backend development.
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Experience & Education */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Work Experience */}
                        <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></span>
                                PROFESSIONAL EXPERIENCE
                            </h2>
                            <div className="space-y-4">
                                {professionalExperience.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-3 bg-white/50 dark:bg-gray-700/50 rounded border border-gray-100 dark:border-gray-600"
                                    >
                                        <div className="sm:col-span-3">
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                                {exp.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                                                {exp.company} {exp.location && `• ${exp.location}`}
                                            </p>
                                        </div>
                                        <div className="text-green-600 dark:text-green-400 text-xs font-medium text-right sm:text-left">
                                            {exp.period}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></span>
                                EDUCATION
                            </h2>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-3 bg-white/50 dark:bg-gray-700/50 rounded border border-gray-100 dark:border-gray-600"
                                    >
                                        <div className="sm:col-span-3">
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                                                {edu.institution} {edu.location && `• ${edu.location}`}
                                            </p>
                                        </div>
                                        <div className="text-green-600 dark:text-green-400 text-xs font-medium text-right sm:text-left">
                                            {edu.period}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Skills */}
                    <div className="space-y-6">
                        <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></span>
                                TECHNICAL SKILLS
                            </h2>
                            <div className="space-y-4">
                                {Object.entries(skills).map(([category, skillList]) => (
                                    <div key={category} className="space-y-2">
                                        <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                                            {category}
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {skillList.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs font-medium text-center border border-green-200 dark:border-green-800"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Info Card */}
                        {/*<div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">*/}
                        {/*    <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">*/}
                        {/*        <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></span>*/}
                        {/*        STATUS*/}
                        {/*    </h2>*/}
                        {/*    <div className="space-y-2 text-sm">*/}
                        {/*        <div className="flex justify-between">*/}
                        {/*            <span className="text-gray-600 dark:text-gray-400">Availability:</span>*/}
                        {/*            <span className="text-green-600 dark:text-green-400 font-medium">Open</span>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex justify-between">*/}
                        {/*            <span className="text-gray-600 dark:text-gray-400">Employment:</span>*/}
                        {/*            <span className="text-green-600 dark:text-green-400 font-medium">Full-time</span>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex justify-between">*/}
                        {/*            <span className="text-gray-600 dark:text-gray-400">Location:</span>*/}
                        {/*            <span className="text-green-600 dark:text-green-400 font-medium">Remote</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

