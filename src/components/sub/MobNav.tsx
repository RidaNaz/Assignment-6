import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export default function MobNav() {
  return (
    <Sheet >
      <SheetTrigger>
        <Image src="/hamburger.svg" alt="Mobile Nav" width={30} height={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pt-12 items-center">

          <SheetTitle>
            <Link href="/#home" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Home</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#courses" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Courses</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#services" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Services</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#achievement" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Achievement</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#about-us" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>About Us</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#testimonials" className="cursor-pointer">
              <p className='p-4 hover:bg-[#F7F7F7] rounded-2xl px-16'>Testimonials</p>
            </Link>
          </SheetTitle>

        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
