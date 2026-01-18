import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/school_logo.png"
        alt="Nam Vidhya Mandir Logo"
        width={160}
        height={160}
        className="w-auto h-16 sm:h-20"
        quality={100}
      />
    </Link>
  );
};

export default Logo;
