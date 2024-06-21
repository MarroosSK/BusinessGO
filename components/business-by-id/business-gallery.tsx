"use client";

import Image from "next/image";
import React from "react";
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BusinessGallery = ({ photos }: { photos: string[] }) => {
  // console.log(photos);

  //slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  //console.log(photos);

  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo: string, index: number) => (
          <div key={index}>
            <Image
              src={photo ? photo : "/placeholder.jpg"}
              alt={"business-photo"}
              width={850}
              height={450}
              priority
              className="w-full h-[450px] rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BusinessGallery;
