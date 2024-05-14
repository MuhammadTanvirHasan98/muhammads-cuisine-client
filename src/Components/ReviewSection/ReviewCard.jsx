import { IoStarOutline } from "react-icons/io5";
import PropTypes from 'prop-types'

const ReviewCard = ({card}) => {

   const{name,image, review, occupation} =  card;

  return (
    <div className="md:mx-10 mx-4 mb-4 md:w-full w-[300px]">
       <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border-2 border-orange-300">
    <div className="flex justify-center -mt-16">
        <img className="object-cover w-32 h-32 border-2 border-orange-500 p-1.5 rounded-full" alt="Testimonial avatar" src={image}/>
    </div>

    <h2 className="mt-2 text-lg  font-semibold  md:mt-0">{occupation}</h2>

    <p className="mt-2 text-sm  ">{review}</p>

    <div className="flex flex-col-reverse gap-4 items-center lg:justify-between lg:flex-row mt-4">
        <p className="flex gap-1 text-orange-500">
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        </p>
        <p  className="text-lg text-center font-semibold text-blue-600 merienda" >{name}</p>
    </div>
</div>
    </div>
  );
};

export default ReviewCard;

ReviewCard.propTypes = {
   card: PropTypes.object
}
