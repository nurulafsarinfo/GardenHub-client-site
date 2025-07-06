import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Navigation, Pagination, } from 'swiper/modules';

import image1 from '../../assets/imageSwiper/image-1.jpg';
import image2 from '../../assets/imageSwiper/image-2.jpg';
import image3 from '../../assets/imageSwiper/image-3.jpg';
import image4 from '../../assets/imageSwiper/image-4.jpg';
import image5 from '../../assets/imageSwiper/image-5.jpg';
import image6 from '../../assets/imageSwiper/image-6.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';


let slideImage = [
    { src: image1, title: "“Grow Your Green Paradise”", description: "Turn your balcony, backyard, or rooftop into a blooming sanctuary with expert gardening tips and tools." },
    { src: image2, title: "“Plant. Nurture. Bloom. ”", description: "Join a community of nature lovers and bring life to every corner with plants that thrive. " },
    { src: image3, title: "“Nurture Soil to Soul”", description: "Discover the healing power of gardening—one seed, one pot, one flower at a time. " },
    { src: image4, title: "“Cultivate Happiness”", description: "Experience the joy of gardening by nurturing plants that bring peace, beauty, and fresh air into your life." },
    { src: image5, title: "“Grow With Nature”", description: " Get inspired to build a sustainable and beautiful garden, no matter your space or skill level." },
    { src: image6, title: "“Let's go Soil to Soul”", description: " Reconnect with nature and yourself as you learn to grow your own lush, thriving garden sanctuary." },

];

const Slider3D = () => {
    return (
        <div className="container mt-5 mb-10">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                slidesPerView={'auto'}
                autoplay={{ delay: 4000 }}
                speed={2000}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }
                }
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}

                className='swiper_container'
            >
                {
                    slideImage.map((img, i) => (
                        <SwiperSlide key={i} className="relative">
                            <img
                                src={img.src} alt={`Slide ${i + 1}`
                                }
                                className="h-[450px] w-full object-cover mx-auto rounded-xl shadow-md "
                            />

                            <div className="absolute mx-10 md:w-[700px] h-55 md:h-70  left-7 bottom-20 md:bottom-5 bg-black/50 text-white p-5 rounded-lg">
                                <h3 className="text-2xl md:text-4xl italic my-3 font-semibold">
                                   
                                    <Typewriter
                                    words={[img.title]}
                                    loop={false}
                                    cursor 
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={2000}
                                    />
                                </h3>
                                <p className="text-lg text-gray-300">-{img.description}</p>

                                <Link to={'/tips/browsetips'}>
                                <button className="md:text-lg font-semibold border-2 px-7 py-1  rounded-full md:my-10 mt-2 hover:bg-green-600"> Browse All Tips</button></Link>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <FaArrowLeft name="arrow-back-outline" />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <FaArrowRight name="arrow-forward-outline" />
                    </div>
                    <div className="swiper-pagination">

                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider3D;