import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Card from "./Card";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Gallery = () => {
  const { user } = useAuthContext();
  const [cards, setCards] = useState([]);
  const axiosSecure = useAxiosSecure();


  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const { data } = await axiosSecure.get("/gallery");
    console.log(data);
    setCards(data);
  };

 
  // console.log(cards);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.name.value;
    const image = form.photo.value;
    const feedback = form.feedback.value;

    if(feedback.length>100) return toast.error("Your character limit exceeds")

    console.table({ user_name, image, feedback });

    const cardInfo={
      user_name, image, feedback
    }

    try{
      const {data} = await axiosSecure.post("/gallery", cardInfo)
      
       console.log(data);
       if(data.acknowledged){
        document.getElementById("my_modal_3").close();
        getCards();
        toast.success("Thanks for your feedback!");
        form.reset();
       }
    }
    catch(err){
       console.log(err.message)
       toast.error(err.message)
    }


   
  };

  const handleClose = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <div className="flex relative w-full ">
        <img
          src="https://i.ibb.co/cQLLT5j/g-banner.png"
          className="lg:max-h-[300px] md:max-h-[180px] max-h-[100px] w-full "
          alt=""
        />

        <div className="absolute h-full w-full flex flex-col justify-center bg-gradient-to-r from-[#026f3e] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-center text-white space-y-3">
            <h1 className="font-bold lg:text-4xl text-2xl merienda">
              Foods Gallery
            </h1>
            <h1 className="font-bold text-sm">
              <Link className="text-orange-500" to="/">
                Home
              </Link>{" "}
              | Foods Gallery
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 text-center">
        <h1 className="md:text-xl text-lg font-semibold merienda">
          You can also give your feedback here.
        </h1>
      </div>

      <div className=" text-center space-y-3">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {
          user ?  <button
          className="btn btn-outline btn-accent md:px-6 px-4 btn-sm font-semibold"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Give Feedback
        </button>
        :
         <Link
          className="btn btn-outline btn-accent md:px-6 px-4 btn-sm font-semibold"
          to='/login'
        >
          Give Feedback
        </Link>
       
        }
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleFeedbackSubmit} method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">User Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  disabled={true}
                  name="name"
                  placeholder="email"
                  className="input input-bordered font-semibold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter food’s photo url"
                  name="photo"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Give Feedback
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  name="feedback"
                  placeholder="Give your feedback about specific food within 85 characters."
                  required
                ></textarea>
              </div>
              <div type="submit" className="form-control mt-6">
                <button className="btn btn-outline btn-accent  text-lg font-bold">
                  Submit
                </button>
              </div>

              <button
                onClick={handleClose}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
          </div>
        </dialog>
      </div>


      <div className="w-[70%] mx-auto mt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {
            cards.map(card=> (
               <Card key={card._id}
                card={card}
               />
            ))
          }
        
        </div>
      </div>
    </div>
  );
};

export default Gallery;

//https://i.ibb.co/jk5qVGq/banner-img.png
//https://i.ibb.co/cQLLT5j/g-banner.png
//https://i.ibb.co/Qk3z8nR/feedback-2.png
