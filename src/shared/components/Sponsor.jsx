import React from "react";

const Sponsor = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto mb-12 mt-12">
        <h3
          className="font-bold text-blue-700 text-4xl text-center"
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          International Colabration{" "}
        </h3>
        <p
          className="font-medium text-center text-blue-500"
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-sine"
        >
          Here you can see our Sponsors. We are collaborating with them for
          making a great market place
        </p>
      </div>
      <div className="mb-12">
        <div className=" ">
          <div
            className="grid grid-cols-2 md:grid-cols-4  gap-10 p-2"
            data-aos="zoom-in-down"
            data-aos-easing="ease-in-sine"
          >
            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200"
              src="https://i.ibb.co/ZHSLj42/holw-removebg-preview.png"
              alt=""
            />
            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200  "
              src="https://i.ibb.co/pQP34jC/marvel.png"
              alt=""
            />
            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200  "
              src="https://i.ibb.co/2q5tt2N/dc.jpg"
              alt=""
            />
            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200  "
              src="https://i.ibb.co/Pjt6fqG/lego.png"
              alt=""
            />

            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200  "
              src="https://i.ibb.co/rc0WSWG/star.png"
              alt=""
            />
            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200  "
              src="https://i.ibb.co/Lk7ZyqR/ml.jpg"
              alt=""
            />
            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200  "
              src="https://i.ibb.co/BKQGkD4/Toys-R-Us-Logo.png"
              alt=""
            />
            <img
              className=" hover:cursor-pointer hover:-tranblue-y-2 duration-200  "
              src="https://i.ibb.co/bKXsf4p/pt.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
              
    </div>
  );
};

export default Sponsor;
