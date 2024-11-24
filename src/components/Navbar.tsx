import Image from 'next/image';
import Link from 'next/link';
import MobNav from './sub/MobNav';

export default function Navbar() {
    return (
        <div className='flex flex-col gap-4 z-10 relative'>
            <div className='hidden lg:block'>
                <div className=" px-12 py-2 bg-[#F7F7F7] flex text-black gap-10 border items-center justify-evenly shadow-md">

                    <div className='w-5/6 flex gap-5 items-center'>
                        <p>Phone Number: 956 742 455 678</p>
                        <div className="border-l border-[#676767] h-8 mx-4 "></div> {/* Vertical line */}
                        <p>Email:info@ddsgnr.com</p>
                    </div>

                    <div className='flex gap-5'>
                        <Link href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/facebook.svg" alt="facebook" width={10} height={10} />
                        </Link>
                        <Link href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/instagram.svg" alt="instagram" width={18} height={18} />
                        </Link>
                        <Link href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/twitter.svg" alt="twitter" width={18} height={18} />
                        </Link>
                        <Link href="" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedin.svg" alt="linkedin" width={18} height={18} />
                        </Link>
                    </div>

                </div>
            </div>


            <div className='px-12 py-3 flex gap-20 lg:justify-evenly justify-between items-center bg-[#F7F7F7] shadow-md'>
                <div className='flex gap-5 items-center'>
                    <Image src="/frame1.svg" alt="linkedin" width={40} height={40} />
                    <Link href="">
                        <div className='text-black font-bold text-3xl'>Ddsgnr</div>
                    </Link>
                </div>

                <div className='hidden lg:block '>
                    <div className='flex gap-14 text-black bg-white py-1 pl-4 xl:pr-0 pr-4 font-medium items-center'>
                        <Link href="/#home" className="cursor-pointer">
                            <p className='hover:border-black border-b border-transparent'>Home</p>
                        </Link>
                        <Link href="/#courses" className="cursor-pointer">
                            <p className='hover:border-black border-b border-transparent'>Courses</p>
                        </Link>
                        <Link href="/#services" className="cursor-pointer">
                            <p className='hover:border-black border-b border-transparent'>Services</p>
                        </Link>
                        <Link href="/#achievement" className="cursor-pointer">
                            <p className='hover:border-black border-b border-transparent'>Achievement</p>
                        </Link>
                        <Link href="/#about-us" className="cursor-pointer">
                            <p className='hover:border-black border-b border-transparent'>About</p>
                        </Link>
                        <Link href="/#testimonials" className="cursor-pointer">
                            <p className='hover:border-black border-b border-transparent'>Testimonials</p>
                        </Link>

                        <div className='xl:block hidden'>
                            <div className='gap-3 flex'>
                                <button
                                    className="bg-white text-black py-2 px-5 rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b ">Login</button>

                                <button
                                    className="bg-black text-white py-2 px-5 rounded hover:bg-white hover:text-black border-black border-l border-r border-t border-b">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden block'>
                    <MobNav />
                </div>
            </div>
        </div >
    )
}