import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white ">
            <div className="max-w-6xl mx-auto py-8">
                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">

                    <div className="flex gap-10">
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-black">Subscribe to our newsletter</h2>
                            <p className="text-black mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div>
                            <form className="flex gap-5">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow border border-gray-300 rounded-md px-4 py-2 "
                                />
                                <button type="submit"
                                    className="bg-white text-black py-2 px-5 rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b ">
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
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
                            <span className="font-semibold text-xl text-black">Ddsgnr</span>
                        </Link>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="font-semibold mb-4 text-black">Courses</h3>
                        <ul className="space-y-2 text-black">
                            <li><Link href="" className="hover:underline">Business</Link></li>
                            <li><Link href="" className="hover:underline">Development</Link></li>
                            <li><Link href="" className="hover:underline">Technology</Link></li>
                            <li><Link href="" className="hover:underline">Design</Link></li>
                            <li><Link href="" className="hover:underline">Programming</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4 text-black">Resources</h3>
                        <ul className="space-y-2 text-black">
                            <li><Link href="" className="hover:underline">Career</Link></li>
                            <li><Link href="" className="hover:underline">Resume</Link></li>
                            <li><Link href="" className="hover:underline">Learning</Link></li>
                            <li><Link href="" className="hover:underline">Interview Preparation</Link></li>
                            <li><Link href="" className="hover:underline">Jobs</Link></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="font-semibold mb-4 text-black">About Us</h3>
                        <ul className="space-y-2 text-black">
                            <li><Link href="" className="hover:underline">Contact</Link></li>
                            <li><Link href="" className="hover:underline">Help/Support</Link></li>
                            <li><Link href="" className="hover:underline">FAQ</Link></li>
                            <li><Link href="" className="hover:underline">Terms and Conditions</Link></li>
                            <li><Link href="" className="hover:underline">Partners</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-20 flex border-black border-t gap-5 justify-between">
                    <div className="mt-10 text-black text-sm flex flex-col md:flex-row gap-10 justify-between items-center">
                        <p>2023 Ddsgnr. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="" className="hover:underline">Privacy Policy</Link>
                            <Link href="" className="hover:underline">Terms of Service</Link>
                            <Link href="" className="hover:underline">Cookie Settings</Link>
                        </div>
                    </div>
                    <div className='flex gap-5 mt-10'>
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
        </footer>
    );
};

export default Footer;
