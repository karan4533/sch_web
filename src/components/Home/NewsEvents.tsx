"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const NewsEvents: React.FC = () => {
    const newsItems = [
        {
            date: "15 Jan 2026",
            category: "Achievement",
            title: "Students Win State Level Science Exhibition",
            description: "Our Grade 10 students secured first place in the State Level Science Exhibition with their innovative project on renewable energy.",
            icon: "mdi:trophy",
            color: "blue",
        },
        {
            date: "10 Jan 2026",
            category: "Sports",
            title: "Annual Sports Day Celebration",
            description: "A spectacular display of athletic prowess and sportsmanship as students competed in various track and field events.",
            icon: "mdi:medal",
            color: "green",
        },
        {
            date: "05 Jan 2026",
            category: "Event",
            title: "Cultural Festival - Unity in Diversity",
            description: "Students showcased the rich cultural heritage of India through dance, music, and traditional performances.",
            icon: "mdi:music",
            color: "purple",
        },
        {
            date: "28 Dec 2025",
            category: "Academic",
            title: "Workshop on AI and Machine Learning",
            description: "Senior students participated in an intensive workshop on artificial intelligence and its real-world applications.",
            icon: "mdi:robot",
            color: "orange",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; border: string }> = {
            blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
            green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
        };
        return colors[color];
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:max-w-screen-xl">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
                        Latest Updates
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        News &
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Events</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Stay updated with the latest happenings, achievements, and events at Excellence Academy.
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {newsItems.map((item, index) => {
                        const colors = getColorClasses(item.color);
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Card Header */}
                                <div className={`${colors.bg} p-6 border-b ${colors.border}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`${colors.text} text-sm font-semibold uppercase tracking-wider`}>
                                            {item.category}
                                        </span>
                                        <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center border-2 ${colors.border}`}>
                                            <Icon icon={item.icon} className={`${colors.text} text-2xl`} />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Icon icon="mdi:calendar" className="text-lg" />
                                        <span>{item.date}</span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <button className={`inline-flex items-center gap-2 ${colors.text} font-semibold hover:gap-3 transition-all`}>
                                        Read More
                                        <Icon icon="mdi:arrow-right" className="text-lg" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="text-center" data-aos="fade-up">
                    <Link
                        href="/life-at-school/calendar"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        View All News & Events
                        <Icon icon="mdi:arrow-right" className="text-xl" />
                    </Link>
                </div>

                {/* Quick Links Section */}
                <div className="mt-20 grid md:grid-cols-3 gap-6" data-aos="fade-up">
                    <Link
                        href="/life-at-school/calendar"
                        className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <Icon icon="mdi:calendar-month" className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">School Calendar</h3>
                        <p className="text-blue-100 mb-4">View upcoming events and important dates</p>
                        <span className="inline-flex items-center gap-2 font-semibold">
                            View Calendar
                            <Icon icon="mdi:arrow-right" className="group-hover:translate-x-2 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="/academics/achievements"
                        className="group bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <Icon icon="mdi:trophy-variant" className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">Achievements</h3>
                        <p className="text-green-100 mb-4">Celebrate our students' success stories</p>
                        <span className="inline-flex items-center gap-2 font-semibold">
                            View Achievements
                            <Icon icon="mdi:arrow-right" className="group-hover:translate-x-2 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="/admissions"
                        className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <Icon icon="mdi:school" className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">Admissions Open</h3>
                        <p className="text-purple-100 mb-4">Join our learning community today</p>
                        <span className="inline-flex items-center gap-2 font-semibold">
                            Apply Now
                            <Icon icon="mdi:arrow-right" className="group-hover:translate-x-2 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
