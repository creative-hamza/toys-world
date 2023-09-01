import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import {
  FaEdit,
  FaTrashAlt,

  FaStar,
  FaArrowUp,
 
} from "react-icons/fa";
import Swal from "sweetalert2";
import UpdateToy from "../../shared/components/UpdateToy";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const MyTOys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToy] = useState([]);
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const [del, setDel] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleId = (id) => {
    setId(id);
  };
  useEffect(() => {
    fetch(
      `https://toys-server-umber.vercel.app/mytoys?sellerEmail=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => setToy(data));
  }, [user, update, del]);


  //handle delete request
  const handleDelete = (idd) => {
    
    console.log(idd);
    Swal.fire({
      title: "Do you want to delete your Toy?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-server-umber.vercel.app/singletoy/${idd}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = toys.filter((toy) => toy._id !== id);
              setToy(remaining);
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              setDel(!del)
            }
            
          })
          .catch((error) => {
            console.error("Error updating toy:", error);
            Swal.fire("Error!", "Server Problem! Try again.", "error");
          });

      }
    });
  };

  const handleToyUpdate = (data) => {
    console.log(data);
    fetch(`https://toys-server-umber.vercel.app/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message) {
          setUpdate(!update);
          toast("Your Toy Details have been updated");
        } 
        console.log(result);
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
        toast("Error occurred! Please click on id and try again");
      });
  };


//search by name
const handleSearch = () => {
  console.log(searchText);
  fetch(`https://toys-server-umber.vercel.app/getToysByText?name=${searchText}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setToy(data);
    });
};


  
  useTitle("my toys");
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-5 text-blue-700">My Toys</h1>

      
      <div className="search-box p-2 text-center text-blue-700 ">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border"
            placeholder="Search by Toy name"
          />{" "}
          <button className="btn btn-outline  btn-sm" onClick={handleSearch}>Search</button>
        </div>

      <div className="overflow-x-auto text-blue-500">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl">no.</th>
              <th className="text-2xl">Toy Name</th>

              <th className="text-2xl">Sub Category</th>
              <th className="text-2xl">
                Price<FaArrowUp className="inline mx-2 mb-1   "></FaArrowUp>
              </th>
              <th className="text-2xl">Ratings</th>
              <th className="text-2xl">Available quantity</th>

              <th>delete</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, i) => (
              <>
                <tr>
                  <th>{i + 1}</th>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td>${toy.price}</td>
                  <td>
                    {toy.rating}
                    <FaStar className="inline ml-1 mb-1   "></FaStar>
                  </td>
                  <td>{toy.quantity}</td>
                  <td>
                    <FaTrashAlt
                      onClick={() => handleDelete(toy._id)}
                      className="text-xl mx-auto my-5"
                    ></FaTrashAlt>
                  </td>
                  <td>
                    <label htmlFor="my-modal-5">
                      <FaEdit
                        onClick={() => handleId(toy._id)}
                        className="text-xl mx-auto"
                      ></FaEdit>
                    </label>

                    <UpdateToy
                      id={id}
                      key={toy._id}
                      handleToyUpdate={handleToyUpdate}
                    ></UpdateToy>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTOys;
