import Image from "next/image";

export default function LogoSec() {
    return (
        <div className="bg-[#F7F7F7] py-14 flex absolute w-full mt-56 justify-between">
            <div className="font-bold text-black text-2xl items-center w-1/4 pl-2">Trusted by 2000+ companies worldwide.</div>

            <div className="flex items-center justify-between w-4/6">
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