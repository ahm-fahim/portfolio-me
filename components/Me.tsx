"use client"
import React from 'react';
import Image from "next/image";
import img from "@/public/me.jpg";
import {CloudDownload, GithubIcon, LinkedinIcon, Phone} from "lucide-react";
import TextType from '@/components/TextType';
import SplashCursor from "@/components/SplashCursor";

export default function Me() {
    return (

        <div
            className="trapezoid h-[85vh] w-[55vh] mx-auto my-auto text-white overflow-hidden flex flex-col">

            {/* <SplashCursor/> */}

            <div className="relative w-full aspect-[4/5] h-full overflow-hidden">

                <Image
                    className="object-cover w-full h-full grayscale"
                    src={img}
                    alt="profile photo"
                    layout="fill"
                    objectFit="cover"
                />


            </div>


            <div className="bg-gray-800 backdrop-blur-lg">
                <div className="p-6 flex flex-col items-center flex-grow">
                    <h1 className="text-3xl play-bold tracking-wide pt-4">Md. Fahim Morshed</h1>
                    <div className="flex items-center space-x-2 mb-8 text-xl text-green-400 font-medium">
                        <TextType
                            text={["Full Stack Developer"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </div>


                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6 mb-auto text-2xl text-gray-400">
                        <a href="https://github.com/ahm-fahim" target='_blank' className="hover:text-white transition duration-200">
                            <GithubIcon className="h-6 w-6"/>
                        </a>
                        <a href="https://www.linkedin.com/in/md-fahim-morshed-5b2126233/" target='_blank' className="hover:text-white transition duration-200">
                            <LinkedinIcon className="h-6 w-6 "/>
                        </a>
                    </div>
                </div>
                <div className="flex border-t border-gray-600 w-full text-center text-md font-semibold pb-10 ">
                    <button
                        className="flex-1 py-4 flex items-center justify-center space-x-2 text-white hover:bg-gray-800 transition duration-200">
                        <span>DOWNLOAD CV</span>
                        <CloudDownload/>
                    </button>

                    <button
                        className="flex-1 py-4 flex items-center justify-center space-x-2 border-l border-gray-600 text-white hover:bg-gray-800 transition duration-200">
                        <span>CONTACT ME</span>
                        <Phone/>
                    </button>
                </div>
            </div>

        </div>
    );
};