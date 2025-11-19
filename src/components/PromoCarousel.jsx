// src/components/PromoCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// TEST IMAGES (So we know slides load)
import promo1 from "../assets/promo.jpg";
import promo2 from "../assets/promo.jpg";
import promo3 from "../assets/promo.jpg";

const promos = [
  { id: 1, img: promo1 },
  { id: 2, img: promo2 },
  { id: 3, img: promo3 },
];

export default function PromoCarousel() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 2.4 },
            1280: { slidesPerView: 2.8 },
          }}
        >
          {promos.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="rounded-2xl overflow-hidden shadow-md bg-gray-50">
                <img
                  src={p.img}
                  alt="promo"
                  className="w-full h-48 md:h-56 lg:h-60 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
