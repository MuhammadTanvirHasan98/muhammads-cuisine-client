import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const UserReviewCard = ({review}) => {

  console.log(review);

  const {user_name, user_review, user_image, user_occupation, rating} = review || "";

  return (
    <div className="border-2 border-orange-100 p-3 rounded-md">
      <div className="flex md:flex-row flex-col md:gap-4 gap-2">

        <figure className="border-2 border-blue-100 rounded-md p-1 md:w-32 md:h-32 w-20 h-20 md:mx-0 mx-auto">
         <img src={user_image} className="lg:w-[40] md:w-32 w-full h-full rounded-[3px]" alt="user_img" />
        </figure>
 
         <div className="space-y-2">
          <div className="md:text-left text-center">
            <h1 className="font-semibold merienda ">{user_name}</h1>
            <p className="text-orange-300">{user_occupation}</p>
          </div>
          
            <p className="flex md:justify-start justify-center">

             <Rating
              value={rating}
              style={{maxWidth:100}}
              readOnly
             />
            </p>
            <p className="text-gray-500"><span className="font-semibold">Review: </span>{user_review}</p>
         </div>
         
      </div>
    </div>
  );
};

export default UserReviewCard;

UserReviewCard.propTypes={
   review: PropTypes.object
}