import { Helmet } from "react-helmet";


const AddFood = () => {
 
  return (
    <div className="md:w-[80%] mx-auto my-20">
      <Helmet>
        <title>Add Food | Muhammad’s Cuisine</title>
      </Helmet>

      <div className="bg-[#F4F3F0] md:p-10 p-6 my-4 rounded-lg xl:w-[70%] w-[84%]  mx-auto border-2 border-purple-300 bg-gradient-to-br from-[#d8ffe1] via-blue-50 to-[#ffe0c5ed]">
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
          <form >
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
                    Category
                  </span>
                </label>
                <select
                  name="category"
                  className="select select-bordered select-info text-blue-600"
                >
                  <option>Options</option>
                  <option value="01">Clay-made pottery</option>
                  <option value="02">Stoneware</option>
                  <option value="03">Porcelain</option>
                  <option value="04">Terra Cotta</option>
                  <option value="05">Ceramics & Architectural</option>
                  <option value="06">Home decor pottery</option>
                </select>
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

                <div className="border-2 border-blue-300 rounded-lg">
                  <input
                    type="text"
                    name="userName"
                    className="input input-bordered input-info text-blue-600 w-full font-semibold"
                    disabled={true}
                    // value={user?.displayName}
                  />
                </div>
              </div>

              {/* User email */}
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Your Email
                  </span>
                </label>

                <div className="border-2 border-blue-300 rounded-lg">
                  <input
                    type="text"
                    name="userEmail"
                    className="input input-bordered input-info text-blue-600 w-full font-semibold"
                    disabled={true}
                    // value={user?.email}
                  />
                </div>
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
