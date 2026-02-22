"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const VideoSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div className="text-center mb-10 sm:mb-14 lg:mb-16" data-aos="fade-up">
                    <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-blue-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                        Experience Our School
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4">
                        Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Nam Vidhya Mandir</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
                        Explore our vibrant learning atmosphere, extracurricular activities, and student achievements on our official YouTube channel.
                    </p>
                </div>

                <div className="relative max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group" data-aos="zoom-in">
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
                            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                                <Icon icon="mdi:youtube" className="text-3xl sm:text-5xl" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
                                Watch Our Videos
                            </h3>
                            <p className="text-white/90 text-sm sm:text-lg md:text-xl font-medium max-w-xs sm:max-w-md drop-shadow-md">
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
