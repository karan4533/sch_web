import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    submenu: [
      { label: "Management", href: "/about-us#management" },
      { label: "Our Vision", href: "/about-us#vision" },
      { label: "Mission & Philosophy", href: "/about-us#mission" },
      { label: "School Logo", href: "/about-us#school-logo" },
      { label: "Our Location", href: "/about-us#location" },
      { label: "Public Disclosure", href: "/about-us/public-disclosure" },
    ]
  },
  {
    label: "Academics",
    href: "/academics",
    submenu: [
      { label: "Curriculum", href: "/academics#curriculum" },
      { label: "Holistic Learning", href: "/academics/holistic-learning" },
      { label: "Projects & Activities", href: "/academics/projects-activities" },
      { label: "Academic Achievements", href: "/academics/achievements" },
      { label: "Homework System", href: "/academics/homework" },
      { label: "Home Schooling", href: "/academics/home-schooling" },
    ]
  },
  {
    label: "Beyond Academics",
    href: "/beyond-academics",
    submenu: [
      { label: "Sports & Co-curricular", href: "/beyond-academics#sports" },
      { label: "Hobby Clubs", href: "/beyond-academics/hobby-clubs" },
      { label: "Field Trips", href: "/beyond-academics/field-trips" },
      { label: "Achievements", href: "/beyond-academics/achievements" },
    ]
  },
  {
    label: "Life @ School",
    href: "/life-at-school",
    submenu: [
      { label: "School Timings", href: "/life-at-school#timings" },
      { label: "Pastoral Care", href: "/life-at-school/pastoral-care" },
      { label: "School Calendar", href: "/life-at-school/calendar" },
      { label: "School Assemblies", href: "/life-at-school/assemblies" },
      { label: "Dining Facilities", href: "/life-at-school/dining" },
      { label: "Transportation", href: "/life-at-school/transportation" },
      { label: "Our Campus", href: "/life-at-school/campus" },
      { label: "Resource Centre", href: "/life-at-school/resource-centre" },
    ]
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];
