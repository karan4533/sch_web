import React from "react";
import HeroSlider from "@/components/Home/HeroSlider";
import SchoolIntro from "@/components/Home/SchoolIntro";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import NewsEvents from "@/components/Home/NewsEvents";
import Testimonial from "@/components/Home/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excellence Academy - Nurturing Young Minds | CBSE School",
  description: "Excellence Academy provides world-class holistic education, nurturing excellence, values, and a passion for lifelong learning. Affiliated to CBSE.",
};

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <SchoolIntro />
      <WhyChooseUs />
      <NewsEvents />
      <Testimonial />
    </main>
  );
}