import { Helmet } from "react-helmet";
import useAuthContext from "../hooks/useAuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const AddFood = () => {

   const { user } = useAuthContext();
   const axiosSecure = useAxiosSecure()

  const handleAddFood = async (e) => {

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

    const purchase_count = 0;
    const made_by ={
       name: user?.displayName,
       email: user?.email,
    }

    const newFood = {
      food_name,food_img,price, quantity,purchase_count, category,food_origin ,  made_by,
      description
    };
    console.table(newFood);

    try{
      const {data} = await axiosSecure.post("/addFood", newFood)
      console.log(data);
      if(data.insertedId){
              Swal.fire({
                title: "Food Added!",
                text: "Your food item has been added successfully.",
                icon: "success"
              });
              //  e.target.reset();
            }
    }
    catch(err){
       console.log(err.message);
    }


    //  fetch("https://artistry-creations-server.vercel.app/allCrafts",{
    //    method:"POST",
    //    headers:{
    //     "content-type":"application/json"
    //    },
    //    body:JSON.stringify(newCraft)
    //  })
    //  .then(res=> res.json())
    //  .then(data =>{
    //     if(data.insertedId){
    //       Swal.fire({
    //         title: "Added!",
    //         text: "Your craft item has been added.",
    //         icon: "success"
    //       });
    //       //  e.target.reset();
    //        console.log(data);
    //     }
    //  })
  };

 
  return (
    <div className="md:w-[80%] mx-auto my-20">
      <Helmet>
        <title>Add Food | Muhammad’s Cuisine</title>
      </Helmet>

      <div className="md:p-10 p-6 my-4 rounded-lg xl:w-[70%] w-[84%]  mx-auto border-2 border-orange-200 bg-gradient-to-br from-[#d8ffe1] via-blue-50 to-[#ffe0c5ed]">
        <div className="text-center">
          <h1 className=" md:text-3xl text-2xl coff font-bold merienda text-orange-400">
            Add a food item
          </h1>
          <hr className="md:w-[240px] w-[195px] mx-auto border-orange-400" />
          <p className="md:w-3/4 mx-auto lg:mt-6 mt-2 text-gray-500 font-semibold tracking-wide md:text-lg text-xs">
          You can add food item that you like most so that people may know about new category of delicious foods and also purchase.After adding food, you can find at <span className="font-bold text-orange-400"> My added food items</span> list.
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleAddFood}>
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

export default AddFood;
