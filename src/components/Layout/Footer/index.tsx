import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-deepSlate py-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4 md:col-span-12 lg:col-span-4'>
            <Logo />
            <p className="mt-4 text-black/60 text-sm">
              If you want to provide your children as right education where they are nurtured to be their best, most confident selves then I encourage you to seek out this School.
            </p>
            <div className='flex items-center gap-4 mt-4'>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon icon="tabler:brand-twitter" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">About Us</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/about-us/management">Management</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/about-us/student-council">Student Council</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/about-us/school-environment">School Environment</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Amenities</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/amenities/transport">Transport</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/amenities/sports-games">Sports & Games</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/amenities/labs">Labs</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/amenities/culturals">Culturals</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/amenities/library">Library</Link></li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit"><Link href="/amenities/canteen">Canteen</Link></li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <div className="flex items-start gap-2">
              <Icon icon="tabler:map-pin" className="text-primary text-3xl inline-block me-2 flex-shrink-0" />
              <h5 className="text-lg text-black/60">
                Nam Vidhya Mandir<br />
                Paalpannai Road<br />
                T.Vadipatti, Madurai<br />
                Tamil Nadu 625218
              </h5>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Icon icon="tabler:phone" className="text-primary text-3xl inline-block me-2" />
              <h5 className="text-lg text-black/60">9094889835, 7397615166</h5>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Icon icon="tabler:mail" className="text-primary text-3xl inline-block me-2" />
              <h5 className="text-lg text-black/60">namvidhyamandir@gmail.com</h5>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-gray-200 pt-6 text-center'>
          <h4 className='text-black/50 text-sm font-normal'>@2026 Nam Vidhya Mandir. All Rights Reserved.</h4>
        </div>
      </div>
    </footer>
  )
}

export default footer;
