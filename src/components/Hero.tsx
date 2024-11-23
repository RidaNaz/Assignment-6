import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex text-black gap-32">

            <div className="flex flex-col items-center w-1/2 justify-center gap-10 px-12">

                <h1 className="font-bold text-5xl">Learn new skills online with ease</h1>
                <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

                <div className='gap-3 flex -ml-32'>
                    <button
                        className="bg-black text-white py-2 px-5 rounded hover:bg-white hover:text-black border-black border-l border-r border-t border-b">Start learning now</button>
                    <button
                        className="bg-white text-black py-2 px-5 rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b ">Explore Courses</button>
                </div>

            </div>

            <div className="w-fit h-screen relative">
                <Image
                    src="/heroimage.jpeg"
                    alt="Hero Image"
                    width={800}
                    height={0}
                     />
            </div>
        </div>
    )
}

