import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ card }) => {

  const { _id, food_name,food_img, category, purchase_count, price,quantity } = card;

  return (
    <div className="">
      <div className=" hover:bg-[#eefff3] transition duration-700 hover:scale-105 hover:border-orange-300 hover:border-2 rounded-lg shadow-2xl">
        {/* Card Image */}
        <figure className="xl:px-8 xl:pt-8 px-5 pt-5">
          <img
            src={food_img}
            alt="food_image"
            className="rounded-lg w-full xl:h-[300px] md:h-[220px] h-[280px]"
          />
        </figure>


        <div className="font-semibold p-4">
          {/* Cards Info */}
          <div className="text-lg">
            <h2 className="text-2xl font-semibold merienda text-center mb-2">
              {food_name}
            </h2>
            <p>
              Category:{" "}
              <span className="font-bold text-yellow-600">{category}</span>
            </p>
            <p>
              Available Quantity:{" "}
              <span className="font-bold text-yellow-600">{quantity}</span>
            </p>
          </div>

          <div className="flex justify-between  mt-4">
            <div>
               <p className="text-lg text-orange-600 font-normal">${price}</p>
                <p className="text-gray-400 text-xs">{purchase_count} sales</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center mt-2">
              <Link to={`/foodDetails/${_id}`}>
                <button className="btn btn-outline btn-sm transition duration-500 hover:bg-orange-400 font-extrabold text-[#27a373] merienda">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  card: PropTypes.object,
};
