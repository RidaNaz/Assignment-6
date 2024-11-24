import Image from "next/image";

export default function LogoSec() {
    return (
        <div className="bg-[#F7F7F7] py-10 lg:mb-0 mb-4 lg:flex space-y-4 absolute w-full justify-items-center lg:justify-between shadow-md">
            <div className="font-bold text-black text-xl md:text-2xl lg:w-1/4 pl-6">Trusted by 2000+ companies worldwide.</div>

            <div className="items-center lg:justify-between md:mx-0 mx-3 md:w-4/6 justify-items-center grid grid-cols-3 lg:grid-cols-6">
                <Image
                src="/logo1.png"
                alt="logo"
                width="123"
                height="38"
                 />
                <Image
                src="/logo2.png"
                alt="logo"
                width="123"
                height="38"
                 />
                <Image
                src="/logo3.png"
                alt="logo"
                width="123"
                height="38"
                 />
                <Image
                src="/logo4.png"
                alt="logo"
                width="123"
                height="38"
                 />
                <Image
                src="/logo5.png"
                alt="logo"
                width="123"
                height="38"
                 />
                <Image
                src="/logo6.png"
                alt="logo"
                width="123"
                height="38"
                 />
            </div>
        </div>
    )
}