import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-4">
      <Image
        src="/images/logo/school_logo.png"
        alt="Nam Vidhya Mandir Logo"
        width={160}
        height={160}
        className="w-auto h-10 sm:h-16 md:h-20"
        quality={100}
      />
      <div>
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-none">Nam Vidhya Mandir</h1>
      </div>
    </Link>
  );
};

export default Logo;
