"use client";
import { Specialty } from "@/types/Spciality";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

const Slider = ({ specialties }: { specialties: Specialty[] }) => {
  return (
    <Swiper
      modules={[Virtual, Navigation, Pagination]}
      initialSlide={2}
      breakpoints={{
        // Breakpoint for small devices
        320: {
          slidesPerView: 1,
        },
        // Breakpoint for medium devices
        768: {
          slidesPerView: 3,
        },
        // Breakpoint for extra-large devices
        1024: {
          slidesPerView: 5,
        },
      }}
      centeredSlides={true}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      spaceBetween={60}
      virtual
    >
      {specialties.map((specialty, index) => (
        <SwiperSlide key={specialty.id} virtualIndex={index}>
          <div className="swiper-slide w-[240px]">
            <Box
              key={specialty.id}
              sx={{
                height: "180px",
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "6px",
                padding: "40px 10px",
                transition: "0.3s",
                cursor: "pointer",
                "& img": {
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid #0000FF",
                },
              }}
            >
              <Image
                src={specialty.icon}
                alt="specialty icon"
                width={50}
                height={50}
              />
              <Box className="text-center">
                <Typography variant="h6" component="h4">
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          </div>
        </SwiperSlide>
      ))}
      <div className="w-full absolute top-1/2 h-[104px] -translate-y-1/2 flex justify-between items-center">
        <button className="swiper-button-prev relative top-0 z-10 -left-2 xl:-left-[105px]"></button>
        <button className="swiper-button-next relative top-0 z-10 -left-2 xl:left-16"></button>
      </div>
    </Swiper>
  );
};

export default Slider;
