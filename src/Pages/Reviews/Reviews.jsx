import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import UserReviewCard from "./UserReviewCard";


const Reviews = () => {


  const [reviews, setReviews] = useState([]);
  const axiosSecure = useAxiosSecure();


  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const { data } = await axiosSecure.get("/reviews");
     setReviews(data);
  };
    
  console.log(reviews);



  return (
    <div>
         <Helmet>
        <title>Reviews | Muhammad’s Cuisine</title>
      </Helmet>
      <div className="flex relative w-full ">
        <img
          src="https://i.ibb.co/XX00jJd/banner-reviews.jpg"
          className="lg:max-h-[300px] md:max-h-[180px] max-h-[100px] w-full "
          alt=""
        />

        <div className="absolute h-full w-full flex flex-col justify-center bg-gradient-to-l from-[#026f3e] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-center text-white space-y-3">
            <h1 className="font-bold lg:text-4xl text-2xl merienda">
              Customer Reviews
            </h1>
            <h1 className="font-bold text-sm">
              <Link className="text-orange-500" to="/">
                Home
              </Link>{" "}
              | Customer Reviews
            </h1>
          </div>
        </div>
      </div>


      {/* Give review section */}     
      <div className="mt-10 mb-4 text-center space-y-3">
        <h1 className="md:text-xl text-lg font-semibold merienda text-orange-500">
          You can also give a review here.
        </h1>
        <Link
          className="btn btn-outline btn-accent md:px-6 px-4 btn-sm font-semibold"
          to='/reviewUs'
        >
          Give Review
        </Link>
      </div>


     <div className="lg:w-[60%] md:w-[80%] w-[90%] mx-auto space-y-4 mt-10">
      {
        reviews.map(review=>(
          <UserReviewCard
          key={review?._id}
          review={review}
          >
          </UserReviewCard>
        ))
      }
     </div>

      
    </div>
  );
};

export default Reviews;