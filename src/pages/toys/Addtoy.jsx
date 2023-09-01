import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import useTitle from "../../hooks/useTitle";


import Swal from "sweetalert2";

const Addtoy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://toys-server-umber.vercel.app/toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          
          Swal.fire('Your Toy has been successfully added')
        }
      });
    console.log(data);
  };
  useTitle("add toy");
  return (
    <div>
      <h1 className="text-3xl md:text-5xl text-blue-700 font-bold text-center my-5">
        Add a toy you want to sell
      </h1>
      <form className="w-full text-blue-500" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 space-y-6 self-center w-11/12 items-center mx-auto">
          <input
            placeholder="Enter photo url"
            className="border-2 h-10 w-96 p-4"
            type="text"
            {...register("photo")}
          />
          <input
            placeholder="Enter Toy name"
            className="border h-10 w-96 p-4"
            type="text"
            {...register("name")}
            required
          />
          <input
            placeholder="Enter Seller name"
            type="text"
            className="border h-10 w-96 p-4"
            {...register("sellerName")}
            required
          />
          <input
            placeholder="Enter Seller email"
            value={user?.email}
            className="border h-10 w-96 p-4"
            {...register("sellerEmail")}
            required
          />

          <select
            className="select select-bordered h-10 w-96 "
            {...register("subCategory")}
            defaultValue="marvel"
          >
            <option value="pick" disabled selected>
              Pick a Sub-Category
            </option>
            <option value="marvel">Marvel Universe Toys</option>
            <option value="dc">DC Universe Toys</option>
            <option value="transformer">Transformers Toys</option>
            <option value="other">Other Toys</option>
          </select>

          <input
            placeholder="Enter Toy Price"
            className="border h-10 w-96 p-4"
            {...register("price")}
            required
          />
          <input
            placeholder="Enter Toy Rating"
            className="border h-10 w-96 p-4"
            {...register("rating")}
          />
          <input
            placeholder="Enter Toy Quantity"
            type="number"
            className="border h-10 w-96 p-4"
            {...register("quantity")}
            required
          />
          <input
            placeholder="Toy Description"
            className="border h-10 w-96 p-4"
            type="text"
            {...register("description")}
          />
        </div>

        <div className="w-36 mx-auto my-10">
          <input className="btn bg-blue-600 " type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Addtoy;
