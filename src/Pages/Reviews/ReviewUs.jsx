import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ReviewUs = () => {

  const { user } = useAuthContext();
   const axiosSecure = useAxiosSecure()
   const navigate = useNavigate();
  const [rating, setRating] = useState(0);



  const handleReview = async (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);

    const user_occupation = form.get("occupation");
    const user_review  = form.get("reviewText");

    if(user_review.length> 170) return toast.error("Your review's character limit exceeds!") 
  

    const reviewInfo = {
      user_name: user?.displayName,
      user_image:user?.photoURL,
      user_email: user?.email,
       user_occupation, user_review, rating
    };
    console.table(reviewInfo);

    try{
      const {data} =  await axiosSecure.post("/addReview", reviewInfo)
      console.log(data);

      if(data.insertedId){
              Swal.fire({
                title: "Review Submitted!",
                text: "Your review has been submitted successfully.",
                icon: "success"
              });
              navigate('/reviews')
            }
    }
    catch(err){
       toast.error(err.message);
    }

  };

  return (
    <div className="md:w-[80%] mx-auto my-20">
      <Helmet>
        <title>Update Food | Muhammad’s Cuisine</title>
      </Helmet>

      <div className="md:p-10 p-6 my-4 rounded-lg xl:w-[70%] w-[84%]  mx-auto border-2 border-orange-200 bg-gradient-to-br from-[#d8ffe1] via-sky-100 to-[#d8ffe1]">
        <div className="text-center">
          <h1 className=" md:text-3xl text-2xl coff font-bold merienda text-orange-400">
            Review Us
          </h1>
          <hr className="md:w-[150px] w-[120px] mx-auto border-orange-400 mt-1" />
          <p className="md:w-3/4 mx-auto lg:mt-6 mt-2 text-gray-500 font-semibold tracking-wide md:text-lg text-xs">
            You can review about our any services that you liked or disliked.
            Your review is so important to us to improve ourselves to ensure you
            the best quality.
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleReview}>
            {/* Field 1 */}
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

            {/* Field 2 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Your Occupation
                  </span>
                </label>

                <input
                  type="text"
                  name="occupation"
                  placeholder="Enter your occupation"
                  className="input input-bordered input-info text-blue-500 w-full"
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Rate Us
                  </span>
                </label>
                <div className="input input-bordered input-info p-2.5 text-blue-500 w-full">

                <Rating
                  style={{ maxWidth: 130 }}
                  value={rating}
                  onChange={setRating}
                />
                </div>
              </div>
            </div>

            {/*Give review field */}
            <div className="form-control w-">
              <label className="label">
                <span className="label-text font-bold text-blue-600 text-lg">
                  Review here!
                </span>
              </label>
              <textarea
                name="reviewText"
                className="textarea textarea-info text-blue-600"
                placeholder="Give a short review about any services within 20-30 words."
                required
              ></textarea>
            </div>

            {/*Give Review Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn transition duration-700 text-orange-400 hover:bg-orange-400 hover:text-black btn-outline font-bold merienda text-xl mt-4 px-10"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewUs;
