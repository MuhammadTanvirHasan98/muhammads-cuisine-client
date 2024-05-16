import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet";

const AllFoods = () => {

  const [cards, setCards] = useState([]);
  const[search, setSearch] = useState('');
  const axiosSecure = useAxiosSecure();


  useEffect(() => {
    getCards();
  }, [search]);

  const getCards = async () => {
    const { data } = await axiosSecure.get(`/allFoods?search=${search}`);
    setCards(data);
  };

  console.log(cards);

  const handleSearch = e =>{
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search)
}

console.log(search);


  return (
    <div className="space-y-10">
       <Helmet>
        <title>All Foods | Muhammad’s Cuisine</title>
      </Helmet>
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

          <form onSubmit={handleSearch}>
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder="Search foods by name"
                name="search"
                className="block w-full rounded-r-none rtl:rounded-r-lg rtl:rounded-l-none  rounded-lg border bg-white px-5 lg:py-2.5 py-1.5  focus:border-[#4ee04e] focus:outline-none focus:ring focus:ring-[#a6f0a6] focus:ring-opacity-40"
              />
              <button
                type="submit"
                className="lg:py-2.5 py-1.5 px-3 text-gray-400 bg-[#d4ffd4]  border border-r-0 rtl:rounded-r-lg  rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-r-lg font-bold"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="xl:w-[70%] w-[80%] mx-auto">

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8">
      {
        cards.map(card=> <FoodCard
         key={card._id}
         card={card}
        />)
      }
      </div>
      </div>

    </div>
  );
};

export default AllFoods;
