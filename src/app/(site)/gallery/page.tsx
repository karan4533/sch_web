import { Metadata } from "next";
import SchoolGalleryPage from "@/components/Gallery/SchoolGalleryPage";

export const metadata: Metadata = {
    title: "Gallery | Nam Vidhya Mandir",
    description: "Explore photos from school events, activities, celebrations, and daily life at Nam Vidhya Mandir.",
};

export default function GalleryPage() {
    return <SchoolGalleryPage />;
}
