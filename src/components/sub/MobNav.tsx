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
    <Sheet>
      <SheetTrigger>
        <Image src="/hamburger.svg" alt="Mobile Nav" width={30} height={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>

          <SheetTitle>
            <Link href="">
              <p className='hover:border-black border-b border-transparent'>Home</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="">
              <p className='hover:border-black border-b border-transparent'>Courses</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="">
              <p className='hover:border-black border-b border-transparent'>Services</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="">
              <p className='hover:border-black border-b border-transparent'>Achievement</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="">
              <p className='hover:border-black border-b border-transparent'>About Us</p>
            </Link>
          </SheetTitle>
          <SheetTitle>
            <Link href="">
              <p className='hover:border-black border-b border-transparent'>Testimonials</p>
            </Link>
          </SheetTitle>

        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
