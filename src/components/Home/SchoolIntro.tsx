"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SchoolIntro: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left - Image Grid */}
                    <div className="relative mb-10 sm:mb-0" data-aos="fade-right">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {/* Large Image */}
                            <div className="col-span-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                                <div className="aspect-[16/9] sm:aspect-[16/10] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <div className="text-center p-4 sm:p-6">
                                        <Icon icon="mdi:book-education-outline" className="text-5xl sm:text-7xl text-blue-600 mx-auto mb-2 sm:mb-3" />
                                        <p className="text-blue-900 font-medium text-sm sm:text-base">[Students in Classroom]</p>
                                    </div>
                                </div>
                            </div>

                            {/* Small Images */}
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                    <div className="text-center p-3 sm:p-4">
                                        <Icon icon="mdi:microscope" className="text-4xl sm:text-5xl text-green-600 mx-auto mb-1 sm:mb-2" />
                                        <p className="text-green-900 text-xs sm:text-sm font-medium">[Science Lab]</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                    <div className="text-center p-3 sm:p-4">
                                        <Icon icon="mdi:basketball" className="text-4xl sm:text-5xl text-purple-600 mx-auto mb-1 sm:mb-2" />
                                        <p className="text-purple-900 text-xs sm:text-sm font-medium">[Sports]</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge — repositioned to avoid overflow on small screens */}
                        <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 lg:-right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold">25+</div>
                                <div className="text-xs sm:text-sm font-medium">Years of Excellence</div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-0" data-aos="fade-left">
                        {/* Section Label */}
                        <div className="inline-block">
                            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                                Our Objectives
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            The Objectives of
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Nam Vidhya Mandir</span>
                        </h2>

                        {/* Description */}
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed list-disc pl-4 sm:pl-5">
                            <li>Achieve cognitive, affective and psychomotor excellence</li>
                            <li>To enhance self-awareness and explore innate potential</li>
                            <li>To acquire the ability to utilize technology and information for the betterment of humankind</li>
                            <li>To promote physical fitness, health and well-being</li>
                            <li>To strengthen knowledge and attitude related to livelihood skills</li>
                            <li>To promote goal setting, and lifelong learning</li>
                            <li>To imbibe 21st century learning, literacy and life skills</li>
                            <li>To develop the ability to appreciate art and show case talents</li>
                            <li>To promote arts integrated learning</li>
                        </ul>

                        {/* CTA Button */}
                        <div className="pt-2 sm:pt-4">
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 touch-manipulation"
                            >
                                Discover More About Us
                                <Icon icon="mdi:arrow-right" className="text-lg sm:text-xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolIntro;
