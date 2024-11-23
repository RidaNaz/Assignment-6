import { FiPenTool } from "react-icons/fi"; // Pen Tool icon
// import { FiVolume2 } from "react-icons/fi"; // Volume High icon
// import { FiUsers } from "react-icons/fi"; // Group icon

export default function Explore() {

    const categories = [
        { title: "Design & Development", icon: <FiPenTool size={32} className="text-black" />, courses: "50+ Courses Available" },
        { title: "Marketing", icon: "📢", courses: "50+ Courses Available" },
        { title: "Development", icon: "⚙️", courses: "50+ Courses Available" },
        { title: "Communication", icon: "💬", courses: "50+ Courses Available" },
        { title: "Digital Marketing", icon: "🌐", courses: "50+ Courses Available" },
        { title: "Self Development", icon: "🌱", courses: "50+ Courses Available" },
        { title: "Business", icon: "💼", courses: "50+ Courses Available" },
        { title: "Finance", icon: "📈", courses: "50+ Courses Available" },
        { title: "Consulting", icon: "📄", courses: "50+ Courses Available" },
    ];

    return (
        <section className="py-20 bg-white mt-96 pt-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Explore Courses By Category</h2>
          <p className="text-gray-600 mt-2">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
        </div>

        {/* Grid Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] flex items-center justify-center gap-6 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl">{category.icon}</div>
              <div >
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.courses}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-white text-black border-black border-r border-b border-l border-t font-medium rounded-md hover:bg-black hover:text-white transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
