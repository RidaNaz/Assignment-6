"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles

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
    },
    {
        name: 'Stephen Kerubo',
        role: 'President of Sales',
        photo: '/person5.png',
        rating: 5,
        feedback:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    },
    {
        name: 'Joseph Munyambu',
        role: 'Nursing Assistant',
        photo: '/person2.png',
        rating: 5,
        feedback:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    },
    {
        name: 'Erick Kipkemboi',
        role: 'Web Designer',
        photo: '/person4.png',
        rating: 5,
        feedback:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-12 bg-[#F7F7F7] mb-10 px-4 w-full">
            <div className="w-full mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-5 justify-items-start">
                    <h2 className="text-3xl font-bold mb-2 text-black pb-5">Customer testimonials</h2>
                    <p className="text-black pb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]} // Enable navigation, pagination, and autoplay
                    spaceBetween={20} // Space between slides
                    slidesPerView={1} // Default 1 slide on small screens
                    loop={true} // Enable looping
                    autoplay={{
                        delay: 3000, // Autoplay speed in ms
                        disableOnInteraction: false, // Keep autoplay after interaction
                    }}
                    pagination={{
                        clickable: true, // Enable dots for pagination
                    }}
                    navigation={true} // Enable navigation buttons
                    breakpoints={{
                        768: {
                            slidesPerView: 2, // 2 slides on medium screens
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides on large screens
                        },
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="border border-black shadow-lg p-10 text-left w-full mx-auto">
                                {/* Star Rating */}
                                <div className="flex space-x-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Image key={i} src="/starblack.svg" alt="star" width={17} height={17} />
                                    ))}
                                </div>

                                {/* Feedback */}
                                <p className="text-black text-sm mb-4">{testimonial.feedback}</p>

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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;