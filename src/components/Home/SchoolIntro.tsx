"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SchoolIntro: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:max-w-screen-xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image Grid */}
                    <div className="relative" data-aos="fade-right">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large Image */}
                            <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                                <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <Icon icon="mdi:book-education-outline" className="text-7xl text-blue-600 mx-auto mb-3" />
                                        <p className="text-blue-900 font-medium">[Students in Classroom]</p>
                                    </div>
                                </div>
                            </div>

                            {/* Small Images */}
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <Icon icon="mdi:microscope" className="text-5xl text-green-600 mx-auto mb-2" />
                                        <p className="text-green-900 text-sm font-medium">[Science Lab]</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <Icon icon="mdi:basketball" className="text-5xl text-purple-600 mx-auto mb-2" />
                                        <p className="text-purple-900 text-sm font-medium">[Sports]</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div className="text-center">
                                <div className="text-3xl font-bold">25+</div>
                                <div className="text-sm font-medium">Years of Excellence</div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6" data-aos="fade-left">
                        {/* Section Label */}
                        <div className="inline-block">
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                                Our Objectives
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            The Objectives of
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Nam Vidhya Mandir</span>
                        </h2>

                        {/* Description */}
                        <ul className="space-y-4 text-lg text-gray-600 leading-relaxed list-disc pl-5">
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
                        <div className="pt-4">
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Discover More About Us
                                <Icon icon="mdi:arrow-right" className="text-xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolIntro;
