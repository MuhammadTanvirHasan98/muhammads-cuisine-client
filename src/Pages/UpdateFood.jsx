import { Helmet } from "react-helmet";
import useAuthContext from "../hooks/useAuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateFood = () => {

   const foodInfo = useLoaderData();
   const { user } = useAuthContext();
   const axiosSecure = useAxiosSecure()
   const navigate = useNavigate();

   console.log(foodInfo);

   const {
    _id, food_name,food_img,price, quantity,purchase_count, category,food_origin ,  made_by,
    description
  } = foodInfo;
  

  const handleUpdateFood = async (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
 
    const food_name = form.get("itemName");
    const food_img  = form.get("photo");
    const category = form.get("category");
    const quantity = parseInt(form.get("quantity"));
    const price = form.get("price");
    const food_origin = form.get("origin");
    const description = form.get("description");


    const updatedFood = {
      food_name,food_img,price, quantity,purchase_count, category,food_origin ,  made_by,
      description
    };
    console.table(updatedFood);

    try{
      const {data} = await axiosSecure.post(`/updateFood/${_id}`, updatedFood)
      console.log(data);
      if(data.modifiedCount> 0){
              Swal.fire({
                title: "Food Updated!",
                text: "Your food item has been updated successfully.",
                icon: "success"
              });
              navigate('/addedFoods')
            }
          else{
            Swal.fire({
              title: "Food updating failed!",
              text: "Your did not update anything!",
              icon: "error"
            });
          }  
    }
    catch(err){
       console.log(err.message);
    }


  };

 
  return (
    <div className="md:w-[80%] mx-auto my-20">
      <Helmet>
        <title>Update Food | Muhammad’s Cuisine</title>
      </Helmet>

      <div className="md:p-10 p-6 my-4 rounded-lg xl:w-[70%] w-[84%]  mx-auto border-2 border-orange-200 bg-gradient-to-br from-[#ffe0c5ed] via-blue-50 to-[#d8ffe1]">
        <div className="text-center">
          <h1 className=" md:text-3xl text-2xl coff font-bold merienda text-orange-400">
            Update a food item
          </h1>
          <hr className="md:w-[280px] w-[230px] mx-auto border-orange-400 mt-1" />
          <p className="md:w-3/4 mx-auto lg:mt-6 mt-2 text-gray-500 font-semibold tracking-wide md:text-lg text-xs">
          You can update food item that you added in your list. After updating food, you can find updated food item at <span className="font-bold text-orange-400"> My added food items</span> list.
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleUpdateFood}>
            {/* Field 1 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Food Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter food's name"
                  name="itemName"
                  defaultValue={food_name}
                  className="input input-bordered input-info text-blue-600 "
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  placeholder="Enter food's price"
                  name="price"
                  className="input input-bordered input-info text-blue-600 "
                  required
                />
              </div>
            </div>

              {/* Field 2 */}
              <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={food_img}
                  placeholder="Enter photo url of food item"
                  className="input input-bordered input-info text-blue-600"
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Enter food's quantity"
                  className="input input-bordered input-info text-blue-600"
                />
              </div>
              </div>

            {/* Field 3 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
           
            <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Categroy
                  </span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter food's category"
                  className="input input-bordered input-info text-blue-600"
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Food Origin
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={food_origin}
                  name="origin"
                  placeholder="Enter food's origin (Country)"
                  className="input input-bordered input-info text-blue-600"
                />
              </div>
            </div>

        
          

            {/* Field 4 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Your Name
                  </span>
                </label>

                  <input
                    type="text"
                    name="userName"
                    className="input input-bordered input-info text-blue-300 w-full font-semibold"
                    value={user?.displayName}
                  />
              </div>

              {/* User email */}
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Your Email
                  </span>
                </label>
                 
                  <input
                    type="text"
                    name="userEmail"
                    className="input input-bordered input-info text-blue-300 w-full font-semibold"
                    value={user?.email}
                  />
              </div>
            </div>

            {/*Short description field */}
            <div className="form-control w-">
              <label className="label">
                <span className="label-text font-bold text-blue-600 text-lg">
                   Description
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-info text-blue-600"
                placeholder="Give a short description of food item such as making procedure, ingredients etc. within 100-120 words."
              ></textarea>
            </div>

            {/*Add coffee Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn transition duration-700 text-orange-400 hover:bg-orange-400 hover:text-black btn-outline font-bold merienda text-xl mt-4 px-10"
              >
                Add Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
