import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white ">
            <div className=" mx-auto py-8 max-w-8xl">
                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row gap-6 mb-8 ">

                    <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 px-6 md:px-10 justify-items-center">
                        <div className="justify-items-center md:justify-items-start">
                            <h2 className="text-xl font-bold mb-2 text-black">Subscribe to our newsletter</h2>
                            <p className="text-black mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="w-full col-span-2 xl:col-span-3">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow border border-gray-300 rounded-md px-4 py-2 "
                                />
                                <button type="submit"
                                    className="bg-white text-black py-2 px-10 w-full md:w-fit rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b ">
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-sm text-black mt-2">
                                By subscribing, you agree to with our{" "}
                                <Link href="" className="text-blue-500 underline">
                                    Privacy Policy
                                </Link>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8 pt-6">
                    {/* Logo and Branding */}
                    <div>
                        <Link href="" className="flex items-center space-x-2">
                            <Image
                                src="/frame1.svg"
                                alt="Logo"
                                width={50}
                                height={50}
                                className="w-8 h-8 object-contain"
                            />
                            <span className="font-semibold text-xl text-black xl:text-2xl">Ddsgnr</span>
                        </Link>
                    </div>

                    {/* Courses */}
                    <div className="justify-items-center md:justify-items-start">
                        <h3 className="font-semibold mb-4 text-black">Courses</h3>
                        <ul className="space-y-2 text-black justify-items-center md:justify-items-start">
                            <li><Link href="" className="hover:underline">Business</Link></li>
                            <li><Link href="" className="hover:underline">Development</Link></li>
                            <li><Link href="" className="hover:underline">Technology</Link></li>
                            <li><Link href="" className="hover:underline">Design</Link></li>
                            <li><Link href="" className="hover:underline">Programming</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="justify-items-center md:justify-items-start">
                        <h3 className="font-semibold mb-4 text-black ">Resources</h3>
                        <ul className="space-y-2 text-black justify-items-center md:justify-items-start">
                            <li><Link href="" className="hover:underline">Career</Link></li>
                            <li><Link href="" className="hover:underline">Resume</Link></li>
                            <li><Link href="" className="hover:underline">Learning</Link></li>
                            <li><Link href="" className="hover:underline">Interview Preparation</Link></li>
                            <li><Link href="" className="hover:underline">Jobs</Link></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="justify-items-center md:justify-items-start">
                        <h3 className="font-semibold mb-4 text-black">About Us</h3>
                        <ul className="space-y-2 text-black justify-items-center md:justify-items-start">
                            <li><Link href="" className="hover:underline">Contact</Link></li>
                            <li><Link href="" className="hover:underline">Help/Support</Link></li>
                            <li><Link href="" className="hover:underline">FAQ</Link></li>
                            <li><Link href="" className="hover:underline">Terms and Conditions</Link></li>
                            <li><Link href="" className="hover:underline">Partners</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 border-t border-black mx-8 md:mx-14">
                    <div className="p-5  grid grid-cols-1 lg:grid-cols-5 gap-5 justify-items-center mt-4">

                        <div className="text-black flex text-sm gap-10 -mx-2">&copy; 2023 Ddsgnr. All rights reserved.</div>
                        <div className="flex space-x-4 text-black text-xs md:text-sm lg:col-span-2 ">
                            <Link href="" className="underline">Privacy Policy</Link>
                            <Link href="" className="underline">Terms of Service</Link>
                            <Link href="" className="underline">Cookie Settings</Link>
                        </div>

                        <div className='flex gap-5 lg:col-span-2 lg:justify-end mt-2 lg:mt-0'>
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
            </div>
        </footer>
    );
};

export default Footer;
