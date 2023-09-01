import { useLoaderData } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const ToyDetails = ({ params }) => {
  const data = useLoaderData();
  console.log(data);
  const {
    description,
    name,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
  } = data;
  return (
    <div className="my-5">
      <div className="card w-4/5 mx-auto glass my-2">
        <figure>
          <img
            className="w-1/2 rounded-xl p-3"
            src={data?.photo}
            alt="Action Toy"
          />
        </figure>
        <div className=" rounded-xl text-center p-4 text-xl">
          <h2>
            <span className="font-bold mr-2">Toy Name: </span> {name}
          </h2>
          <p>
            {" "}
            <span className="font-bold mr-2">Sub Category:</span> {subCategory}
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2">Price: </span>
            {price}
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2">Description:</span>
            {description}
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2">Rating:</span>
            {rating}
            <FaStar className="inline text-center mb-2"></FaStar>
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2">Available:</span>
            {quantity}
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2">Seller:</span>
            {sellerName}
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2">Seller mail:</span>
            {sellerEmail}
          </p>
          <div className="card-actions justify-center my-5">
            <button className="btn btn-blue">Order now !</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
