import Image from "next/image";

export default function Explore() {

    const categories = [
        { title: "Design & Development", icon: "/pentool.svg", courses: "50+ Courses Available" },
        { title: "Marketing", icon: "/volume.svg", courses: "50+ Courses Available" },
        { title: "Development", icon: "/group.svg", courses: "50+ Courses Available" },
        { title: "Communication", icon: "/microphone.svg", courses: "50+ Courses Available" },
        { title: "Digital Marketing", icon: "/link.svg", courses: "50+ Courses Available" },
        { title: "Self Development", icon: "/arrow.svg", courses: "50+ Courses Available" },
        { title: "Business", icon: "/briefcase.svg", courses: "50+ Courses Available" },
        { title: "Finance", icon: "/book.svg", courses: "50+ Courses Available" },
        { title: "Consulting", icon: "/book2.svg", courses: "50+ Courses Available" },
    ];

    return (
        <section className="py-20 bg-white mt-96 pt-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <h2 className="text-3xl font-bold text-black">Explore Courses By Category</h2>
          <p className="text-black mt-2">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
        </div>

        {/* Grid Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-start">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] flex items-center justify-start gap-6 shadow-md rounded-md p-4 text-center hover:shadow-lg transition duration-300"
            >
              <div className="bg-white p-5 rounded-md">
                <Image src={category.icon} alt={category.title} width={50} height={50} />
                </div>
              <div className="justify-items-start" >
              <h3 className="text-xl font-semibold text-black">{category.title}</h3>
              <p className="text-black mt-1">{category.courses}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-6 py-3 bg-white text-black border-black border-r border-b border-l border-t font-medium rounded-md hover:bg-black hover:text-white transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
