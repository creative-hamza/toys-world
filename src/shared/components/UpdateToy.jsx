import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateToy = ({ id, handleToyUpdate }) => {
  // console.log(id);
  const { register, handleSubmit, reset } = useForm();
  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch(`https://toys-server-umber.vercel.app/singletoy/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
    reset(toy);
  }, [id]);

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form className="w-full" onSubmit={handleSubmit(handleToyUpdate)}>
              <h1 className="text-4xl font-semibold">
                Update Your Toy Details
              </h1>
              <div className="grid md:grid-cols-2 space-y-6 self-center w-11/12 items-center mx-auto">
                <input
                  placeholder="Enter photo url"
                  defaultValue={toy?.photo}
                  className="border-2 h-10 w-96 p-4"
                  {...register("photo")}
                />
                <input
                  placeholder="Enter Toy name"
                  defaultValue={toy?.name}
                  className="border h-10 w-96 p-4"
                  {...register("name")}
                  required
                />
                <input
                  placeholder="Enter Seller name"
                  defaultValue={toy.sellerName}
                  className="border h-10 w-96 p-4"
                  {...register("sellerName")}
                  required
                />

                <select
                  className="select select-bordered h-10 w-96 "
                  {...register("subCategory")}
                  defaultValue={toy?.subCategory}
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
                  defaultValue={toy?.price}
                  className="border h-10 w-96 p-4"
                  {...register("price")}
                  required
                />
                <input
                  placeholder="Enter Toy Rating"
                  defaultValue={toy?.rating}
                  className="border h-10 w-96 p-4"
                  {...register("rating")}
                />
                <input
                  placeholder="Enter Toy Quantity"
                  type="number"
                  defaultValue={toy?.quantity}
                  className="border h-10 w-96 p-4"
                  {...register("quantity")}
                  required
                />
                <input
                  placeholder="Toy Description"
                  className="border h-10 w-96 p-4"
                  defaultValue={toy?.description}
                  {...register("description")}
                />
                <input
                  className="border h-10 w-96 p-4"
                  {...register("_id")}
                  defaultValue={toy?._id}
                  value={toy?._id}
                />
              </div>

              <div className="w-36 mx-auto my-10">
                <input className="btn btn-blue text-white " type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
