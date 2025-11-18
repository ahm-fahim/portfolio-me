"use client"

import {FaJs, FaNode, FaPython, FaReact} from "react-icons/fa";
import {SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPhp} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {RiTailwindCssFill} from "react-icons/ri";
import {TbBrandCpp} from "react-icons/tb";

export  function AboutSection() {
    return (
        <div className="h-[96vh] overflow-y-scroll w-full md:p-4 py-10">

            {/*about me section */}
            <div className="flex justify-start items-start border-b dark:border-gray-800 pb-3">
                <h1 className="text-2xl font-bold"><span className="text-green-600">A</span>bout Me</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed py-2">
                    Hey there 👋 I&#39;m <span className="font-semibold text-green-600 dark:text-green-400">Md. Fahim Morshed</span>, a Full Stack Developer with over 3+ years of experience, specializing in <span className="font-semibold">Next.js/React</span> frontend and <span className="font-semibold">NestJS/PostgreSQL</span> backend development. Currently pursuing a B.Sc. in CSE, with proven ability to build and deploy robust, full-stack applications and administrative panels.
                </p>
                <div className="grid gap-4 grid-cols-1 border-l-2 px-2 bg-white/70 dark:bg-gray-900/70 rounded-br-md">
                    <div className="flex justify-between items-center pt-4">
                        <h2 className="bg-green-600 p-2">Location: </h2>
                        <p>Dhaka, Bangladesh </p>
                    </div>
                    <div className="flex justify-between items-center border-y-2 py-4">
                        <h2 className="bg-green-600 p-2">Language: </h2>
                        <div className="grid grid-cols-4 gap-4 text-2xl ">
                            <FaJs />
                            <TbBrandCpp />
                            <FaPython />
                            <SiPhp />
                        </div>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                        <h2 className="bg-green-600 p-2">Skills: </h2>
                        <div className="grid grid-cols-4 gap-2 text-green-600 text-5xl">
                            <FaReact  className="bg-green-100 p-2 rounded-md"/>
                            <SiNextdotjs className="bg-green-100 p-2 rounded-md"/>
                            <RiTailwindCssFill className="bg-green-100 p-2 rounded-md"/>
                            <FaNode className="bg-green-100 p-2 rounded-md" />
                            <SiNestjs className="bg-green-100 p-2 rounded-md"/>
                            <SiMongodb className="bg-green-100 p-2 rounded-md"/>
                            <BiLogoPostgresql className="bg-green-100 p-2 rounded-md"/>
                            <SiMysql className="bg-green-100 p-2 rounded-md"/>
                        </div>
                    </div>
                </div>
            </div>


            {/*service section */}

            <div>
                <div className="flex justify-start items-start border-b dark:border-gray-800 pb-3">
                    <h1 className="text-2xl font-bold"><span className="text-green-600">S</span>ervice</h1>
                </div>
            </div>
        </div>
    );
}

