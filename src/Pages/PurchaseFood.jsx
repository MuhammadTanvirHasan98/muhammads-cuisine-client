import { useLoaderData, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PurchaseFood = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const foodInfo = useLoaderData();
  const navigate = useNavigate();

  const [selectQuantity, setSelectQuantity] = useState(1);

  console.log(foodInfo);

  const { _id, food_img, food_name, price, quantity, made_by } = foodInfo;

  const handlePurchase = async () => {
    const purchase_quantity = parseInt(selectQuantity);
    console.log(purchase_quantity);
    const time = new Date(Date.now()).toLocaleTimeString();
    const date = new Date(Date.now()).toLocaleDateString();


    if (quantity < purchase_quantity) {
      return toast.error(
        "You have selected food items more than available quantity!"
      );
    }

    if(made_by?.email === user?.email){
      return toast.error('Action can be permitted!')
    }

    const purchase_date = {
      time,
      date,
    };

    const purchaseFoodInfo = {
      food_name,
      food_img,
      price,
      food_owner: made_by?.name,
      purchase_date,
      buyer_email: user?.email,
    };

    try {
      const { data } = await axiosSecure.post(
        `/addPurchaseFood?id=${_id}&quantity=${purchase_quantity}`,
        purchaseFoodInfo
      );
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Purchased food!",
          text: "Your food item has been purchased successfully.",
          icon: "success",
        });
        navigate('/orderedFoods')
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="w-[90%] mx-auto my-16">
        <h1 className="text-center md:text-5xl text-3xl  font-bold text-orange-500 merienda mb-10">
          Purchase Food
        </h1>
        {quantity===0 && <p className="text-center mb-4 text-gray-500">You can not buy this  food. Because this <span className="text-red-500">item is not available!</span></p> }

        <div className="lg:w-1/2 md:w-[60%] w-[90%] mx-auto  border-2 border-orange-200 rounded-xl shadow-2xl bg-gradient-to-br">
          <div className="xl:text-2xl w-full lg:p-10 md:p-7 p-5 text-[#385398]">
            {/* Buyer info */}
            <div>
              <div className="">
                <p className="md:text-lg text-sm">
                  Your Name:{" "}
                  <span className="font-semibold">{user?.displayName} </span>
                </p>
              </div>
              <hr className="border-orange-100 md:my-2 my-1 " />

              <div>
                <p className="md:text-lg text-sm">
                  Your Email:{" "}
                  <span className="font-semibold">{user?.email} </span>
                </p>
              </div>
            </div>

            <hr className="border-orange-100 md:my-2 my-1 " />

            {/* Food info */}
            <div className="mt-4">
              <h3>Food Info:</h3>

              <h1 className="lg:text-3xl text-center text-2xl mb-2 font-bold merienda">
                {food_name}
              </h1>

              <h2 className="xl:text-2xl text-lg  text-center">
                Price:{" "}
                <span className="font-bold text-orange-500">${price}</span>
              </h2>

              {/* Quantity */}
              <div className="flex items-center justify-center gap-3">
                <p>Quantity:</p>

                <div className="flex items-center  gap-2 mt-2">
                  <button
                    onClick={() => setSelectQuantity(selectQuantity - 1)}
                    disabled={selectQuantity === 0 ? true : false}
                    className="px-2 border-2 border-orange-200 rounded-md"
                  >
                    -
                  </button>
                  <p>{selectQuantity}</p>
                  <button
                    onClick={() => setSelectQuantity(selectQuantity + 1)}
                    className="px-2 border-2 border-orange-200 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Purchase button */}
            <div className="flex justify-center lg:justify-end mt-4">
              <button
                onClick={handlePurchase}
                disabled={quantity === 0}
                className="btn md:btn-md btn-sm btn-outline  transition duration-500 hover:bg-orange-400 font-extrabold text-[#385398] merienda"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFood;
