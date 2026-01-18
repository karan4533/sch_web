import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    submenu: [
      { label: "Management", href: "/about-us/management" },
      { label: "Student Council", href: "/about-us/student-council" },
      { label: "School Environment", href: "/about-us/school-environment" },
    ]
  },
  {
    label: "Academics",
    href: "/academics",
  },
  {
    label: "Amenities",
    href: "/amenities",
    submenu: [
      { label: "Transport", href: "/amenities/transport" },
      { label: "Sports & Games", href: "/amenities/sports-games" },
      { label: "Labs", href: "/amenities/labs" },
      { label: "Culturals", href: "/amenities/culturals" },
      { label: "Library", href: "/amenities/library" },
      { label: "Canteen", href: "/amenities/canteen" },
      { label: "Classroom", href: "/amenities/classroom" },
      { label: "Campus", href: "/amenities/campus" },
      { label: "Restroom", href: "/amenities/restroom" },
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
];
