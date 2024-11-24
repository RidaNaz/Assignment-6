// import { StarIcon } from "@heroicons/react";

import Image from "next/image";

export default function Courses() {
    const courses = [
      {
        id: 1,
        title: "UI/UX Design 201",
        price: "$400",
        category: "Design",
        image: "/course1.jpeg",
      },
      {
        id: 2,
        title: "Introduction to Python",
        price: "$440",
        category: "Programming",
        image: "/course2.jpeg",
      },
      {
        id: 3,
        title: "Data Analysis for Beginners",
        price: "$300",
        category: "Business",
        image: "/course3.jpeg",
      },
      {
        id: 4,
        title: "Art Specialization",
        price: "$350",
        category: "Art",
        image: "/course4.jpeg",
      },
      {
        id: 5,
        title: "Rule of Law",
        price: "$420",
        category: "Law",
        image: "/course5.jpeg",
      },
      {
        id: 6,
        title: "Introduction to Webflow",
        price: "$300",
        category: "Tech",
        image: "/course6.jpeg",
      },
    ];
  
    return (
      <div id="courses" className="mt-10 min-h-screen bg-white py-10 mb-14">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black pb-4">Courses</h1>
          <p className="text-black font-medium">Your Ultimate Guide to Learning</p>
        </div>
  
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="text-black font-medium hover:font-semibold hover:border-b-2 hover:border-[#676767]">
            Popular
          </button>
          <button className="text-black font-medium hover:font-semibold hover:border-b-2 hover:border-[#676767]">
            Recommended
          </button>
          <button className="text-black font-medium hover:font-semibold hover:border-b-2 hover:border-[#676767]">
            Best Price
          </button>
        </div>
  
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#F7F7F7] shadow-md hover:shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={800}
                  className="object-cover"
                />
              </div>
  
              {/* Course Info */}
              <div className="p-4">
                <div className="flex justify-between">
                <p className="text-sm font-bold text-black pb-6">{course.category}</p>
                {/* <StarIcon className="h-6 w-6 text-[#D9D9D9]" /> */}
                <div className="flex justify-start items-center gap-1">
                <Image src="/star.svg" alt="star" width={17} height={17} className="-mt-6"/>
                <p className="text-sm font-bold text-black pb-6">5.0</p>
                </div>
                </div>
                <h3 className="text-lg font-bold text-black">{course.title}</h3>
                <p className="text-sm text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className="flex justify-between items-center">
                  <button className="bg-white text-black py-1 px-4 rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b ">
                    Enroll Now
                  </button>
                  <span className="text-gray-800 font-bold">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-white text-black py-2 px-5 rounded hover:bg-black hover:text-white border-black border-l border-r border-t border-b mt-5">
            View All Courses
          </button>
        </div>
      </div>
    );
  }
  