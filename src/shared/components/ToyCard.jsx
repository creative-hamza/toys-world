import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { name, price, rating } = toy;
  return (
    <div className="my-5">
      <div className="card w-96 mx-auto glass my-2">
        <figure>
          <img
            className="w-36 md:w-48 hover:cursor-pointer hover:-tranblue-y-2 duration-200 p-3 rounded-xl"
            src={toy?.photo}
            alt="Action Toy"
          />
        </figure>
        <div className=" rounded-xl p-4 text-xl">
          <h2>
            <span className="font-bold mr-2">Toy Name: </span> {name}
          </h2>

          <p>
            {" "}
            <span className="font-bold mr-2">Price: </span>${price}
          </p>

          <p>
            {" "}
            <span className="font-bold mr-2">Rating:</span>
            {rating}
            <FaStar className="inline text-center mb-2"></FaStar>
          </p>

          <div className="card-actions justify-center my-5">
            <Link to={`/all/${toy._id}`} className="btn btn-outline btn-sm text-blue-500">
              View Details<FaEye className="text-lg ml-2"></FaEye>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
