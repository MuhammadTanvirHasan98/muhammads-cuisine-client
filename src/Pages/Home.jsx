import { Helmet } from "react-helmet";
import ReviewSection from "../Components/ReviewSection/ReviewSection";

import TopFoods from "../Components/TopFoods";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="space-y-32">
      <Helmet>
        <title>Home | Muhammad’s Cuisine</title>
      </Helmet>
      <Banner/>
      <TopFoods />
      <ReviewSection />
    </div>
  );
};

export default Home;
