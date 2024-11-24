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
              <p className='hover:border-black p-4 hover:bg-[#F7F7F7] rounded-2xl border-b border-l border-r border-t border-transparent'>Home</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#courses" className="cursor-pointer">
              <p className='hover:border-black p-4 hover:bg-[#F7F7F7] rounded-2xl border-b border-l border-r border-t border-transparent'>Courses</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#services" className="cursor-pointer">
              <p className='hover:border-black p-4 hover:bg-[#F7F7F7] rounded-2xl border-b border-l border-r border-t border-transparent'>Services</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#achievement" className="cursor-pointer">
              <p className='hover:border-black p-4 hover:bg-[#F7F7F7] rounded-2xl border-b border-l border-r border-t border-transparent'>Achievement</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#about-us" className="cursor-pointer">
              <p className='hover:border-black p-4 hover:bg-[#F7F7F7] rounded-2xl border-b border-l border-r border-t border-transparent'>About Us</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="/#testimonials" className="cursor-pointer">
              <p className='hover:border-black p-4 hover:bg-[#F7F7F7] rounded-2xl border-b border-l border-r border-t border-transparent'>Testimonials</p>
            </Link>
          </SheetTitle>

        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
