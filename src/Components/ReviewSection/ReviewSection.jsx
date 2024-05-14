import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const ReviewSection = () => {
  const [cards, setCards] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const { data } = await axiosSecure.get("/reviews");
    setCards(data);
  };

  console.log(cards);

  return (
    <div className="space-y-16 bg-[#f8fff9] py-32">
      <div className="text-center">
        <p className="text-xs font-bold text-orange-500">
          ◉ Customer Reviews ◉
        </p>
        <hr className="w-20  mx-auto border-orange-500 flex justify-end" />

        <h1 className="lg:text-5xl font-bold text-3xl merienda mt-4 mx-2">
          What customers say about us!
        </h1>
        <p className="text-gray-500  w-[90%] md:w-[60%]  lg:w-[55%] mx-auto mt-4">
          Welcome to the beating heart of{" "}
          <span className="merienda text-sm font-bold text-black">
            Muhammad
            <span className="text-orange-500">’</span>s{" "}
            <span className="text-orange-500">Cuisine</span>
          </span>. Dive into the heartfelt words of our patrons, each review a glowing tribute to our delicious foods and warm hospitality.
        </p>
        {/* <hr className="lg:w-[650px] w-[430px] border-orange-500 mx-auto mt-2"/> */}
      </div>

      <div className="lg:w-[70%] w-[80%] mx-auto">
        <Marquee style={{}} pauseOnHover={true} speed={40}>
          {cards.map((card) => (
            <ReviewCard card={card} key={card._id} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ReviewSection;
