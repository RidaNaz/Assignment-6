import Image from "next/image";

export default function Hero() {
    return (
        <div id="home" className="grid grid-cols-1 lg:grid-cols-2 text-black gap-32">

            <div className="flex flex-col gap-5 mx-7 lg:mx-0 lg:ml-24 justify-center mt-36">

                <h1 className="font-bold text-5xl justify-items-center">Learn new skills online with ease</h1>
                <p className="justify-items-center">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

                <div className='gap-3 flex'>
                    <button
                        className="bg-black text-white py-2 px-5 rounded hover:bg-white hover:text-black border-black border-l border-r border-t border-b ">Start learning now</button>
                    <button
                        className="bg-white text-black py-2 px-5 rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b ">Explore Courses</button>
                </div>

            </div>

            <div className="w-full h-screen relative -mt-16">
                <Image
                    src="/heroimage.jpeg"
                    alt="Hero Image"
                    width={800}
                    height={700}
                />
            </div>
        </div>
    )
}

