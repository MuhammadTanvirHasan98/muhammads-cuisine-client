import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import FoodCard from "../Pages/AllFoods/FoodCard";
import { Link } from "react-router-dom";


const TopFoods = () => {

  const [cards, setCards] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const { data } = await axiosSecure.get("/allFoods?sort=topFoods");
    setCards(data);
  };

  console.log(cards);


  return (
    <div className="mt-20 space-y-12">
      <div className="text-center">
          <p className="text-xs font-bold text-orange-500">◉ Top selling Foods ◉
          </p>
          <hr className="w-20  mx-auto border-orange-500 flex justify-end" />
         
          <h1 className="lg:text-5xl text-3xl merienda font-bold my-6">Our Top Delicious Foods</h1>
          <p className="text-gray-500  w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
          At <span className="text-orange-500 font-bold merienda text-sm">Muhammad’s Cuisine</span> , we believe that great food begins with great ingredients. That’s why we handpick the freshest produce and finest meats, ensuring that every bite bursts with flavor and vitality. Our Top Selling Food Section promises to delight and inspire.
          </p>
      </div>
      
      <div className="w-[70%] mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {
            cards.slice(0,6).map(card=> (
               <FoodCard key={card._id}
                card={card}
               />
            ))
          }
        
        </div>

        {/* Button */}

        <div className="flex justify-center mt-16 ">
          <Link to='/allFoods'>
           <button className="btn btn-outline text-[#33b658] btn-sm px-6 rounded-md hover:bg-[#6fd78d] transition duration-700 font-extrabold">Explore More</button>
          </Link>
        </div>
      </div>
       
    </div>
  );
};

export default TopFoods;