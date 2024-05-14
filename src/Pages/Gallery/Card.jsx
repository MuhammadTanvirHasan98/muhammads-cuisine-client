import PropTypes from 'prop-types'

const Card = ({card}) => {


  const{user_name, feedback, image} = card;


  return (
    <div>
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 md:max-h-[300px] lg:max-h-[400px] max-h-[270px]">
            <div className="h-full w-full">
              <img
                className="w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={image}
                alt="food_image"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/60 group-hover:via-black/60 group-hover:to-black/90 "></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-700 group-hover:translate-y-0">

              <p className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               {feedback}
              </p>
              
               <h1 className="font-bold text-orange-400 text-lg">{user_name}</h1>
            </div>
          </div>

    </div>
  );
};

export default Card;


Card.propTypes ={
   card: PropTypes.object
}