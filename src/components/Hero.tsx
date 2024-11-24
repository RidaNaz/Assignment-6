import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 text-black gap-24 lg:gap-32 items-center px-5 lg:px-24 py-10 lg:py-0"
    >
      {/* Left Section: Text and Buttons */}
      <div className="flex flex-col gap-5 justify-center mt-16 lg:mt-0">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left">
          Learn new skills online with ease
        </h1>
        <p className="text-center lg:text-left">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <button className="bg-black text-white py-2 px-5 rounded hover:bg-white hover:text-black border border-black">
            Start learning now
          </button>
          <button className="bg-white text-black py-2 px-5 rounded hover:bg-black hover:text-white border border-black">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative w-full max-w-lg lg:max-w-none h-80 sm:h-96 lg:h-screen">
        <Image
          src="/heroimage.jpeg"
          alt="Hero Image"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
    </div>
  );
}
