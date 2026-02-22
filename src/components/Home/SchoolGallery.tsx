"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const previewImages = [
    "/images/hero%20page/IMG-20251219-WA0021.jpg.jpeg",
    "/images/hero%20page/IMG-20251219-WA0022.jpg.jpeg",
    "/images/hero%20page/IMG-20251219-WA0023.jpg.jpeg",
    "/images/hero%20page/IMG-20251219-WA0024.jpg.jpeg",
    "/images/hero%20page/IMG-20250822-WA0020.jpg.jpeg",
    "/images/hero%20page/IMG-20250822-WA0028.jpg.jpeg",
    "/images/hero%20page/IMG-20251024-WA0033.jpg.jpeg",
    "/images/hero%20page/IMG-20251210-WA0011.jpg.jpeg",
];

const SchoolGallery: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 lg:max-w-screen-xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Icon icon="mdi:image-multiple" className="text-lg" />
                        School Life
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Explore Our School
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        A glimpse into the vibrant life at Nam Vidhya Mandir — from classrooms to playgrounds, every moment is a memory.
                    </p>
                </div>

                {/* Preview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                    {previewImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <Image
                                src={src}
                                alt={`School photo ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <Icon
                                    icon="mdi:magnify-plus-outline"
                                    className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <Icon icon="mdi:image-album" className="text-2xl" />
                        View All Photos
                        <Icon icon="mdi:arrow-right" className="text-xl" />
                    </Link>
                    <p className="text-gray-400 dark:text-gray-500 mt-3 text-sm">
                        30+ photos from school events & activities
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SchoolGallery;
