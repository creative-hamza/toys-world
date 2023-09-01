import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoGallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const photos = [
    { src: "https://i.ibb.co/G26rD9M/t1.jpg" },
    { src: "https://i.ibb.co/N2ZMYNH/t2.jpg" },
    { src: "https://i.ibb.co/mTrxxKq/iron1.jpg" },
    { src: "https://i.ibb.co/0r2CXdf/t3.jpg" },
    { src: "https://i.ibb.co/XbkbzFF/s1.jpg" },
    { src: "https://i.ibb.co/X35w04c/t4.jpg" },
    { src: "https://i.ibb.co/GF6WhDV/j1.jpg" },
    { src: "https://i.ibb.co/qY3W4Z9/dark.jpg" },
    { src: "https://i.ibb.co/0pb7SM9/thor.jpg" },
    { src: "https://i.ibb.co/2njD88x/thanos.jpg" },
   
   
    
    
  ];

  return (
    <>
  <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-700 my-10">
    Choose your Favorite Action Toy
  </h1>
  <div className="hidden sm:block"> {/* Show the marquee on large screen */}
    <Marquee>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-3">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden">
              <div
                data-aos="zoom-in-down"
                data-aos-duration="3500"
                className="max-w-sm"
              >
                <img src={photo.src} alt="" className="w-64" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Marquee>
  </div>
  <div className="block sm:hidden"> {/* Hide the marquee on mobile */}
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3">
        {photos.map((photo, index) => (
          <div key={index} className=" overflow-hidden">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="3500"
              className="max-w-sm"
            >
              <img src={photo.src} alt="" className=" h-32 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</>

  );
};

export default PhotoGallery;
