import React from "react";
import HeroSlider from "@/components/Home/HeroSlider";
import SchoolIntro from "@/components/Home/SchoolIntro";
import VideoSection from "@/components/Home/VideoSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import NewsEvents from "@/components/Home/NewsEvents";
import Testimonial from "@/components/Home/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nam Vidhya Mandir - Achieving Excellence",
  description: "Nam Vidhya Mandir provides world-class holistic education, nurturing excellence, values, and a passion for lifelong learning.",
};

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <SchoolIntro />
      <VideoSection />
      <WhyChooseUs />
      <NewsEvents />
      <Testimonial />
    </main>
  );
}