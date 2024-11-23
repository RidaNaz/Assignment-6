"use client";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
    {
        name: "James Nduku",
        role: "Software Developer",
        photo: "/person3.png",
        rating: 5,
        feedback:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    },
    {
        name: "Erick Kipkemboi",
        role: "Scrum Master",
        photo: "/person1.png",
        rating: 5,
        feedback:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    },
    {
        name: "Stephen Kerubo",
        role: "UI/UX Designer",
        photo: "/person6.png",
        rating: 5,
        feedback:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-12 bg-[#F7F7F7] mb-10 px-4">
            <div className="w-fit mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-5 justify-items-start">
                    <h2 className="text-3xl font-bold mb-2 text-black pb-5">Customer testimonials</h2>
                    <p className="text-black pb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    <div className="flex overflow-hidden space-x-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`flex-none w-full md:w-1/3 transform transition-transform ${index === currentIndex ? "scale-100" : "scale-95"
                                    }`}
                            >
                                <div className="bg-[#F7F7F7] border border-black shadow-lg p-10 text-left">
                                    {/* Star Rating */}
                                    <div className="flex space-x-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Image key={i} src="/starblack.svg" alt="star" width={17} height={17} className=" -mt-6"/>
                                        ))}
                                    </div>

                                    {/* Feedback */}
                                    <p className="text-black text-sm mb-4">
                                        {testimonial.feedback}
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            width={100}
                                            height={100}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="text-black font-bold">{testimonial.name}</h4>
                                            <p className="text-black text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-end mr-10 mt-10">
                <button
                    onClick={prevTestimonial}
                >
                    <Image src="/left.svg" alt="left arrow" width={50} height={50} />
                </button>
                <button
                    onClick={nextTestimonial}
                >
                    <Image src="/right.svg" alt="right arrow" width={50} height={50} />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
