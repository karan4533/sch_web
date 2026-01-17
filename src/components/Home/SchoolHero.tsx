"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SchoolHero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-32 pb-20 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 lg:max-w-screen-xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6" data-aos="fade-right">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-blue-100">
                            <Icon icon="mdi:certificate-outline" className="text-blue-600 text-xl" />
                            <span className="text-sm font-medium text-gray-700">
                                Affiliated to CBSE | Affiliation No: XXXXX
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Welcome to
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mt-2">
                                Excellence Academy
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Empowering young minds with world-class holistic education,
                            nurturing excellence, values, and a passion for lifelong learning.
                        </p>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon icon="mdi:school" className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Quality Education</h3>
                                    <p className="text-sm text-gray-600">World-class curriculum</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon icon="mdi:heart-outline" className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Values & Ethics</h3>
                                    <p className="text-sm text-gray-600">Character building</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon icon="mdi:trophy-outline" className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Excellence</h3>
                                    <p className="text-sm text-gray-600">Academic & beyond</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon icon="mdi:account-group-outline" className="text-orange-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Holistic Growth</h3>
                                    <p className="text-sm text-gray-600">All-round development</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6">
                            <Link
                                href="/admissions"
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Apply Now
                                <Icon icon="mdi:arrow-right" className="text-xl group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-600 transition-all duration-300"
                            >
                                Learn More
                                <Icon icon="mdi:information-outline" className="text-xl" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <Icon icon="mdi:school-outline" className="text-9xl text-white opacity-50 mx-auto mb-4" />
                                    <p className="text-white text-lg font-medium">
                                        [School Campus Image]
                                    </p>
                                    <p className="text-white/80 text-sm mt-2">
                                        Suggested: Aerial view of school building with playground
                                    </p>
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600">25+</div>
                                        <div className="text-xs text-gray-600">Years Legacy</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-600">1500+</div>
                                        <div className="text-xs text-gray-600">Students</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-purple-600">100+</div>
                                        <div className="text-xs text-gray-600">Faculty</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
};

export default SchoolHero;
