import { Link } from "react-router-dom";

const AllFoods = () => {
  return (
    <div className="space-y-10">
      <div className="flex relative w-full ">
        <img
          src="https://i.ibb.co/gwKPfxp/allfoods-banner.png"
          className="lg:max-h-[300px] md:max-h-[180px] max-h-[100px] w-full "
          alt=""
        />

        <div className="absolute h-full w-full flex flex-col justify-center bg-gradient-to-t from-[#076e40] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-center text-white space-y-3">
            <h1 className="font-bold lg:text-4xl text-2xl merienda">
              All Delicious Foods
            </h1>
            <h1 className="font-bold text-sm">
              <Link className="text-orange-500" to="/">
                Home
              </Link>{" "}
              | All Foods
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="lg:w-1/3 md:w-1/2 w-[80%] mx-auto">
          
          <form>
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder="Search foods by name"
                className="block w-full rounded-r-none rtl:rounded-r-lg rtl:rounded-l-none  rounded-lg border bg-white px-5 lg:py-2.5 py-1.5  focus:border-[#4ee04e] focus:outline-none focus:ring focus:ring-[#a6f0a6] focus:ring-opacity-40"
              />
              <button
                type="submit"
                className="lg:py-2.5 py-1.5 px-3 text-gray-500 bg-gray-100  border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-r-lg font-bold"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {}
    </div>
  );
};

export default AllFoods;
