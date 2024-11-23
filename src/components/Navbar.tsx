import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className='flex flex-col gap-4 '>

            <div className="px-12 py-2 bg-[#F7F7F7] flex text-black gap-10 border items-center justify-evenly">

                <div className='w-5/6 flex gap-5 items-center'>
                    <p>Phone Number: 956 742 455 678</p>
                    <div className="border-l border-[#676767] h-8 mx-4 "></div> {/* Vertical line */}
                    <p>Email:info@ddsgnr.com</p>
                </div>

                <div className='flex gap-5'>
                    <FaFacebook className="text-black h-6 w-6 hover:text-gray-500" />
                    <FaLinkedin className="text-black h-6 w-6 hover:text-gray-500" />
                    <FaTwitter className="text-black h-6 w-6 hover:text-gray-500" />
                    <FaInstagram className="text-black h-6 w-6 hover:text-gray-500" />
                </div>

            </div>



            <div className='px-12 py-3 flex gap-20 justify-evenly items-center bg-[#F7F7F7]'>
                <div className='flex gap-5 items-center'>
                    <div className='w-[75px] h-[50px] bg-[#10F2C5] rounded-3xl'>

                    </div>
                    <div className='text-black font-bold text-3xl hover:text-gray-500'>Ddsgnr</div>

                </div>

                <div className='flex gap-14 text-black bg-white py-1 pl-4 font-medium items-center'>
                    <p className='hover:border-black border-b border-transparent'>Home</p>
                    <p className='hover:border-black border-b border-transparent'>Courses</p>
                    <p className='hover:border-black border-b border-transparent'>Services</p>
                    <p className='hover:border-black border-b border-transparent'>Achievement</p>
                    <p className='hover:border-black border-b border-transparent'>About Us</p>
                    <p className='hover:border-black border-b border-transparent'>Testimonials</p>

                    <div className='gap-3 flex'>
                        <button
                            className="bg-white text-black py-2 px-5 rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b ">Login</button>

                        <button
                            className="bg-black text-white py-2 px-5 rounded hover:bg-white hover:text-black border-black border-l border-r border-t border-b">Sign Up</button>
                    </div>

                </div>

            </div>
        </div >
    )
}