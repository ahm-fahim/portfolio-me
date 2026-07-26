"use client"

import {FaJs, FaNode, FaPython, FaReact, FaServer} from "react-icons/fa";
import {SiLinuxserver, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPhp} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {RiTailwindCssFill} from "react-icons/ri";
import {TbBrandCpp} from "react-icons/tb";
import {MdAdminPanelSettings} from "react-icons/md";


export function AboutSection() {
    return (
        <div className="h-[96vh] overflow-y-scroll w-full md:p-4 py-10 " >


            {/*about me section */}
            <div className="flex justify-start items-start border-b-[0.5px] dark:border-gray-800 pb-3">
                <h1 className="text-2xl font-bold"><span className="text-green-600">A</span>bout Me</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pt-4 ">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed py-2 md:border-r-[0.5px]  pr-4">
                    Computer Science and Engineering student with hands-on experience in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Experienced in building responsive web applications, developing RESTful APIs, and collaborating with remote development teams. Passionate about writing clean, maintainable code and continuously learning modern web technologies. Seeking a Junior Full Stack Developer or Software Engineer Internship opportunity
                </p>
                <div className="grid gap-4 grid-cols-1 px-2 bg-white/70 dark:bg-gray-100/0 rounded-br-md">
                    <div className="flex justify-between items-center  pt-4">
                        <h2 className="bg-green-600 px-4 py-1 text-sm rounded text-white dark:text-black">Location: </h2>
                        <p>Dhaka, Bangladesh </p>
                    </div>
                    <div className="flex justify-between items-center border-y-[0.5px] py-4">
                        <h2 className="bg-green-600 px-4 py-1 text-sm rounded text-white dark:text-black">Language: </h2>
                        <div className="grid grid-cols-4 gap-4 text-2xl ">
                            <FaJs/>
                            <TbBrandCpp />
                        </div>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                        <h2 className="bg-green-600 px-4 py-1 text-sm rounded text-white dark:text-black">Skills: </h2>
                        <div className="grid grid-cols-4 gap-2 text-green-600 text-5xl">
                            <FaReact className="bg-green-100 p-2 rounded-md"/>
                            <SiNextdotjs className="bg-green-100 p-2 rounded-md"/>
                            <RiTailwindCssFill className="bg-green-100 p-2 rounded-md"/>
                            <FaNode className="bg-green-100 p-2 rounded-md"/>
                            <SiMongodb className="bg-green-100 p-2 rounded-md"/>
                            <BiLogoPostgresql className="bg-green-100 p-2 rounded-md"/>
                            <SiMysql className="bg-green-100 p-2 rounded-md"/>
                        </div>
                    </div>
                </div>
            </div>


            {/*service section */}

            <div>
                <div className="flex justify-start items-start border-b-[0.5px] dark:border-gray-800 pb-3 pt-10">
                    <h1 className="text-2xl font-bold"><span className="text-green-600">M</span>y Services</h1>
                </div>


                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-8">

                    <div
                        className="p-4 py-10 bg-gray-50 dark:bg-gray-800/70 border dark:border-gray-800 border-gray-200 rounded-xl flex flex-col items-center text-center justify-center w-full">
                        <SiLinuxserver className="bg-green-100 text-green-600 rounded-md p-2 text-5xl"/>
                        <h1 className="text-xl  font-bold">Full Stack Web Application</h1>
                        <p className="text-xs text-gray-600 dark:text-gray-400">End-to-end development with Next.js
                            frontend, NestJS backend, and PostgreSQL database. Building scalable, maintainable
                            applications with modern best practices.</p>
                    </div>

                    <div
                        className="p-4 py-10 bg-gray-50 dark:bg-gray-800/70 border dark:border-gray-800 border-gray-200 rounded-xl flex flex-col items-center text-center justify-center w-full">
                        <FaServer className="bg-green-100 text-green-600 rounded-md p-2 text-5xl"/>
                        <h1 className="text-xl font-bold">Backend APIs</h1>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Secure, optimized API endpoints
                            using NestJS. Efficient database queries, proper authentication, and scalable
                            architecture for production applications.</p>
                    </div>

                    <div
                        className="p-4 py-10 bg-gray-50 dark:bg-gray-800/70 border dark:border-gray-800 border-gray-200 rounded-xl flex flex-col items-center text-center justify-center w-full">
                        <MdAdminPanelSettings className="bg-green-100 text-green-600 rounded-md p-2 text-5xl"/>
                        <h1 className="text-xl font-bold">Admin Dashboards</h1>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Complex admin panels with data
                            visualization, CRUD operations, and user management. Clean, professional interfaces
                            built with Next.js and Tailwind CSS.</p>
                    </div>

                    <div
                        className="p-4 py-10 bg-gray-50 dark:bg-gray-800/70 border dark:border-gray-800 border-gray-200 rounded-xl flex flex-col items-center text-center justify-center w-full">
                        <SiLinuxserver className="bg-green-100 text-green-600 rounded-md p-2 text-5xl"/>
                        <h1 className="text-xl font-bold">Landing Pages</h1>
                        <p className="text-xs text-gray-600 dark:text-gray-400">High-quality, responsive landing
                            pages and marketing sites. Optimized for conversions with modern design principles and
                            SEO best practices.</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

