"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: "linear",
        arrows: true,
    };

    const slides = [
        {
            id: 1,
            image: "/images/hero%20page/a2dea5f1-424c-4736-a3dd-d50401505e9e.jpg",
            title: "Welcome To Nam Vidhya Mandir",
            subtitle: "Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that will support them, as life-long learners, to participate in and contribute to the global world and practise the core values of the school: respect, tolerance & inclusion, and excellence.",
            cta: { text: "Apply Now", href: "/admissions" },
            secondaryCta: { text: "Learn More", href: "/about-us" },
        },
        {
            id: 2,
            image: "/images/hero%20page/ad27389d-8572-4a35-bede-45f4cf14b57d.jpg",
            title: "Modern Smart Classrooms",
            subtitle: "Experience learning like never before with our state-of-the-art technology and interactive learning environments.",
            cta: { text: "Explore Academics", href: "/academics" },
            secondaryCta: { text: "Virtual Tour", href: "/campus" },
        },
        {
            id: 3,
            image: "/images/hero%20page/b9319b48-dfa2-44d2-96f8-5cc351d05913.jpg",
            title: "Holistic Development",
            subtitle: "From sports to arts, we provide a platform for every student to discover and groom their unique talents.",
            cta: { text: "Sports & Activities", href: "/activities" },
            secondaryCta: { text: "Achievements", href: "/achievements" },
        },
        {
            id: 4,
            image: "/images/hero%20page/dd93a8d8-ecaf-4062-85a4-8f5c0447394b.jpg",
            title: "Expert Faculty",
            subtitle: "Learn from the best minds dedicated to shaping the leaders of tomorrow with personalized attention.",
            cta: { text: "Meet Our Team", href: "/faculty" },
            secondaryCta: { text: "Join Us", href: "/careers" },
        },
        {
            id: 5,
            image: "/images/hero%20page/DSC_2392.JPG.jpeg",
            title: "Our Vibrant Campus",
            subtitle: "A nurturing environment where every corner inspires curiosity, creativity, and a spirit of excellence in our students.",
            cta: { text: "Explore Campus", href: "/amenities/campus" },
            secondaryCta: { text: "View Gallery", href: "/gallery" },
        },
        {
            id: 6,
            image: "/images/hero%20page/f66b469f-ea91-4e38-a683-c8902824b124.jpg",
            title: "Vibrant School Life",
            subtitle: "A home away from home where every student feels valued, celebrated, and supported in their journey.",
            cta: { text: "Explore School", href: "/gallery" },
            secondaryCta: { text: "Events", href: "/events" },
        },
    ];

    return (
        <section className="relative w-full overflow-hidden hero-slider-container">
            <Slider {...settings} className="w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[750px] relative">
                {slides.map((slide) => (
                    <div key={slide.id} className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[750px] outline-none">
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={slide.id === 1}
                                className="object-cover object-center"
                                quality={90}
                            />
                            {/* Overlay — heavier on mobile for readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 sm:to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                            <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl space-y-3 sm:space-y-5 lg:space-y-6">
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/30 w-fit">
                                    <Icon icon="mdi:school-outline" className="text-white text-base sm:text-xl" />
                                    <span className="text-xs sm:text-sm font-medium text-white">Excellence in Education</span>
                                </div>

                                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                                    {slide.title}
                                </h1>

                                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-lg sm:max-w-xl drop-shadow-md line-clamp-3 sm:line-clamp-none">
                                    {slide.subtitle}
                                </p>

                                <div className="flex flex-col xs:flex-row flex-wrap gap-3 pt-2 sm:pt-4">
                                    <Link
                                        href={slide.cta.href}
                                        className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 touch-manipulation"
                                    >
                                        {slide.cta.text}
                                        <Icon icon="mdi:arrow-right" className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href={slide.secondaryCta.href}
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm text-white px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base border-2 border-white/30 hover:border-white transition-all duration-300 touch-manipulation"
                                    >
                                        {slide.secondaryCta.text}
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>

            <style jsx global>{`
        .hero-slider-container .slick-dots {
          bottom: 16px;
          z-index: 20;
        }
        @media (min-width: 768px) {
          .hero-slider-container .slick-dots {
            bottom: 30px;
          }
        }
        .hero-slider-container .slick-dots li {
          margin: 0 3px;
        }
        .hero-slider-container .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.5;
        }
        @media (min-width: 768px) {
          .hero-slider-container .slick-dots li button:before {
            font-size: 12px;
          }
        }
        .hero-slider-container .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }
        .hero-slider-container .slick-prev,
        .hero-slider-container .slick-next {
          z-index: 20;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(5px);
          border-radius: 50%;
          transition: all 0.3s;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .hero-slider-container .slick-prev,
          .hero-slider-container .slick-next {
            width: 50px;
            height: 50px;
          }
        }
        .hero-slider-container .slick-prev:hover, 
        .hero-slider-container .slick-next:hover {
            background: rgba(255, 255, 255, 0.35);
        }
        .hero-slider-container .slick-prev {
          left: 12px;
        }
        @media (min-width: 768px) {
          .hero-slider-container .slick-prev { left: 30px; }
        }
        .hero-slider-container .slick-next {
          right: 12px;
        }
        @media (min-width: 768px) {
          .hero-slider-container .slick-next { right: 30px; }
        }
        .hero-slider-container .slick-prev:before,
        .hero-slider-container .slick-next:before {
            font-size: 20px;
        }
        @media (min-width: 768px) {
          .hero-slider-container .slick-prev:before,
          .hero-slider-container .slick-next:before {
              font-size: 24px;
          }
        }
        @media (max-width: 480px) {
            .hero-slider-container .slick-prev,
            .hero-slider-container .slick-next {
                display: none !important;
            }
        }
      `}</style>
        </section>
    );
};

export default HeroSlider;
