import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-deepSlate py-8 sm:py-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:gap-y-10 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
            <Logo />
            <p className="mt-4 text-black/60 text-sm leading-relaxed">
              If you want to provide your children the right education where they are nurtured to be their best, most confident selves then we encourage you to seek out this School.
            </p>
            <div className='flex items-center gap-4 mt-4'>
              <Link href="#" className='hover:text-primary text-black text-2xl sm:text-3xl transition-colors touch-manipulation'>
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-2xl sm:text-3xl transition-colors touch-manipulation'>
                <Icon icon="tabler:brand-twitter" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-2xl sm:text-3xl transition-colors touch-manipulation'>
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-2xl font-medium">About Us</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/about-us/management">Management</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/about-us/student-council">Student Council</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/about-us/school-environment">School Environment</Link></li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-2xl font-medium">Amenities</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/amenities/transport">Transport</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/amenities/sports-games">Sports & Games</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/amenities/labs">Labs</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/amenities/culturals">Culturals</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/amenities/library">Library</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit text-sm sm:text-base transition-colors"><Link href="/amenities/canteen">Canteen</Link></li>
            </ul>
          </div>
          <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
            <div className="flex items-start gap-2">
              <Icon icon="tabler:map-pin" className="text-primary text-2xl sm:text-3xl inline-block me-1 sm:me-2 flex-shrink-0 mt-0.5" />
              <h5 className="text-sm sm:text-base lg:text-lg text-black/60 leading-relaxed">
                Nam Vidhya Mandir<br />
                Paalpannai Road<br />
                T.Vadipatti, Madurai<br />
                Tamil Nadu 625218
              </h5>
            </div>
            <div className="flex items-center gap-2 mt-4 sm:mt-6">
              <Icon icon="tabler:phone" className="text-primary text-2xl sm:text-3xl inline-block me-1 sm:me-2 flex-shrink-0" />
              <h5 className="text-sm sm:text-base lg:text-lg text-black/60">9094889835, 7397615166</h5>
            </div>
            <div className="flex items-center gap-2 mt-4 sm:mt-6">
              <Icon icon="tabler:mail" className="text-primary text-2xl sm:text-3xl inline-block me-1 sm:me-2 flex-shrink-0" />
              <h5 className="text-sm sm:text-base lg:text-lg text-black/60 break-all">namvidhyamandir@gmail.com</h5>
            </div>
            <Link href="https://wa.me/917397615166" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 sm:mt-6 hover:text-primary transition-colors touch-manipulation">
              <Icon icon="tabler:brand-whatsapp" className="text-primary text-2xl sm:text-3xl inline-block me-1 sm:me-2 flex-shrink-0" />
              <h5 className="text-sm sm:text-base lg:text-lg text-black/60">WhatsApp: 7397615166</h5>
            </Link>
          </div>
        </div>

        <div className='mt-8 sm:mt-10 border-t border-gray-200 pt-5 sm:pt-6 text-center'>
          <h4 className='text-black/50 text-xs sm:text-sm font-normal'>@2026 Nam Vidhya Mandir. All Rights Reserved.</h4>
        </div>
      </div>
    </footer>
  )
}

export default footer;
