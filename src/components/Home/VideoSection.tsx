"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const VideoSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-4 lg:max-w-screen-xl">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
                        Experience Our School
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                        Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Nam Vidhya Mandir</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore our vibrant learning atmosphere, extracurricular activities, and student achievements on our official YouTube channel.
                    </p>
                </div>

                <div className="relative max-w-xl mx-auto w-full rounded-2xl overflow-hidden shadow-2xl group" data-aos="zoom-in">
                    <a
                        href="https://youtube.com/@namvidhyamandir526?si=Cj4Jv-oI3I4luX4j"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-video w-full h-full"
                    >
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10"></div>

                        <Image
                            src="/images/slider/slide1.png"
                            alt="Nam Vidhya Mandir YouTube Channel"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                            <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300 mb-6">
                                <Icon icon="mdi:youtube" className="text-5xl" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
                                Watch Our Videos
                            </h3>
                            <p className="text-white/90 text-lg md:text-xl font-medium max-w-md drop-shadow-md">
                                Click here to visit our channel @namvidhyamandir526
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-20 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </section>
    );
};

export default VideoSection;
