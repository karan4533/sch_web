"use client";
import React from "react";
import { Icon } from "@iconify/react";

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            icon: "mdi:account-tie",
            title: "Dedicated Teachers",
            description: "Highly qualified and passionate educators committed to student success and holistic development.",
            color: "blue",
        },
        {
            icon: "mdi:lightbulb-on",
            title: "Focus on Innovation",
            description: "Cutting-edge teaching methodologies and technology integration for enhanced learning experiences.",
            color: "purple",
        },
        {
            icon: "mdi:rocket-launch",
            title: "Future-Ready Learning",
            description: "Preparing students for tomorrow's challenges while discovering new strengths and interests today.",
            color: "green",
        },
        {
            icon: "mdi:star-circle",
            title: "Vibrancy and Excellence",
            description: "A dynamic learning environment that celebrates achievement and encourages continuous improvement.",
            color: "orange",
        },
        {
            icon: "mdi:heart-multiple",
            title: "Community Spirit",
            description: "Many hearts make our school! A strong, supportive community of students, parents, and staff.",
            color: "red",
        },
        {
            icon: "mdi:trophy-award",
            title: "Proven Track Record",
            description: "Consistent academic excellence and outstanding achievements in sports and co-curricular activities.",
            color: "indigo",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; icon: string; hover: string; gradient: string }> = {
            blue: { bg: "bg-blue-50", icon: "text-blue-600", hover: "hover:bg-blue-100", gradient: "from-blue-500 to-blue-600" },
            purple: { bg: "bg-purple-50", icon: "text-purple-600", hover: "hover:bg-purple-100", gradient: "from-purple-500 to-purple-600" },
            green: { bg: "bg-green-50", icon: "text-green-600", hover: "hover:bg-green-100", gradient: "from-green-500 to-green-600" },
            orange: { bg: "bg-orange-50", icon: "text-orange-600", hover: "hover:bg-orange-100", gradient: "from-orange-500 to-orange-600" },
            red: { bg: "bg-red-50", icon: "text-red-600", hover: "hover:bg-red-100", gradient: "from-red-500 to-red-600" },
            indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", hover: "hover:bg-indigo-100", gradient: "from-indigo-500 to-indigo-600" },
        };
        return colors[color];
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 lg:max-w-screen-xl">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 px-2" data-aos="fade-up">
                    <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-block mb-3 sm:mb-4">
                        Our Strengths
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Why Choose
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Excellence Academy?</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        We provide an exceptional educational experience that goes beyond textbooks,
                        nurturing well-rounded individuals ready to make a positive impact on the world.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const colors = getColorClasses(feature.color);
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${colors.hover}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <Icon icon={feature.icon} className="text-white text-3xl" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative Element */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-bl-full`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats */}
                <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white" data-aos="fade-up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                        <div className="space-y-1 sm:space-y-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">120+</div>
                            <div className="text-blue-100 text-xs sm:text-sm uppercase tracking-wider leading-tight">Teaching & Non-Teaching Staff</div>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">1500+</div>
                            <div className="text-blue-100 text-xs sm:text-sm uppercase tracking-wider leading-tight">Happy Students</div>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">3000+</div>
                            <div className="text-blue-100 text-xs sm:text-sm uppercase tracking-wider leading-tight">Proud Parents</div>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">50+</div>
                            <div className="text-blue-100 text-xs sm:text-sm uppercase tracking-wider leading-tight">Classes</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
