"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const allImages = [
    { src: "/images/hero%20page/IMG-20250729-WA0027.jpg.jpeg", alt: "School Activity" },
    { src: "/images/hero%20page/IMG-20250804-WA0018.jpg.jpeg", alt: "School Activity" },
    { src: "/images/hero%20page/IMG-20250804-WA0023.jpg.jpeg", alt: "School Activity" },
    { src: "/images/hero%20page/IMG-20250819-WA0064.jpg.jpeg", alt: "School Activity" },
    { src: "/images/hero%20page/IMG-20250822-WA0020.jpg.jpeg", alt: "School Event" },
    { src: "/images/hero%20page/IMG-20250822-WA0028.jpg.jpeg", alt: "School Event" },
    { src: "/images/hero%20page/IMG-20250822-WA0030.jpg.jpeg", alt: "School Event" },
    { src: "/images/hero%20page/IMG-20250830-WA0016.jpg.jpeg", alt: "School Activity" },
    { src: "/images/hero%20page/IMG-20250904-WA0037.jpg.jpeg", alt: "School Activity" },
    { src: "/images/hero%20page/InShot_20250914_145429339.jpg.jpeg", alt: "School Highlights" },
    { src: "/images/hero%20page/IMG-20251024-WA0033.jpg.jpeg", alt: "School Event" },
    { src: "/images/hero%20page/IMG-20251024-WA0042.jpg.jpeg", alt: "School Event" },
    { src: "/images/hero%20page/IMG-20251210-WA0011.jpg.jpeg", alt: "School Activity" },
    { src: "/images/hero%20page/IMG-20251219-WA0021.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0022.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0023.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0024.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0025.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0027.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0028.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0029.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0032.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0033.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0034.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0035.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0036.jpg%20(1).jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0037.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0038.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0039.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0040.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0041.jpg.jpeg", alt: "School Celebration" },
    { src: "/images/hero%20page/IMG-20251219-WA0070.jpg.jpeg", alt: "School Celebration" },
];

const SchoolGalleryPage: React.FC = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goNext = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % allImages.length);
    }, [lightboxIndex]);

    const goPrev = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
    }, [lightboxIndex]);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [lightboxIndex, goNext, goPrev]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-32 lg:mt-24 mt-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-1 h-full overflow-hidden">
                        {allImages.slice(0, 6).map((img, i) => (
                            <div key={i} className="relative h-full">
                                <Image src={img.src} alt="" fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                        <Icon icon="mdi:image-multiple" className="text-lg" />
                        School Gallery
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Our School in Pictures
                    </h1>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto">
                        Relive the cherished moments, events, and everyday life at Nam Vidhya Mandir.
                    </p>
                    <p className="text-white/60 mt-3">{allImages.length} photos</p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 lg:max-w-screen-xl py-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative aspect-square rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <Icon
                                    icon="mdi:magnify-plus-outline"
                                    className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-sm font-medium">{img.alt}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Close"
                    >
                        <Icon icon="mdi:close" className="text-2xl" />
                    </button>

                    {/* Counter */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
                        {lightboxIndex + 1} / {allImages.length}
                    </div>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Previous"
                    >
                        <Icon icon="mdi:chevron-left" className="text-3xl" />
                    </button>

                    {/* Image */}
                    <div
                        className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={allImages[lightboxIndex].src}
                            alt={allImages[lightboxIndex].alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Next"
                    >
                        <Icon icon="mdi:chevron-right" className="text-3xl" />
                    </button>

                    {/* Caption */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full">
                        {allImages[lightboxIndex].alt}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SchoolGalleryPage;
