import { Helmet } from "react-helmet";
import ReviewSection from "../Components/ReviewSection/ReviewSection";

import TopFoods from "../Components/TopFoods";

const Home = () => {
  return (
    <div className="space-y-56">
      <Helmet>
        <title>Home | Muhammad’s Cuisine</title>
      </Helmet>
      <TopFoods />
      <ReviewSection />
    </div>
  );
};

export default Home;
