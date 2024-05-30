
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="z-0">

      <div className="" data-aos="zoom-in">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          loop={true}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[800px] md:min-h-[600px] min-h-[520px] bg-[url('https://i.ibb.co/bBZrh50/banner-2.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-10 gap-4 p-2 absolute h-full   md:bg-gradient-to-r bg-gradient-to-t from-[#191919fa]  to-[rgba(21, 21, 21, 0.00)]  ">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h3 className="md:text-3xl text-2xl font-semibold text-[#87ff24f1] animate__animated animate__fadeInTopLeft  animate__slow">
                      Delicious Foods
                    </h3>
                    <h1 className="lg:text-7xl md:text-5xl text-3xl  font-bold animate__animated  animate__fadeInUp animate__slower text-white merienda my-4">
                    Welcome to <br /> Muhammad<span className="text-orange-500">’</span>s{" "}
            <span className="text-orange-500 ">Cuisine</span>{" "}
                    </h1>
                    <p  className="md:my-4 my-2 md:text-xl  md:w-[70%] animate__animated animate__fadeInBottomRight md:mx-0 w-[90%] mx-auto text-orange-200">
                    Welcome to <span className="text-white"> Muhammad<span className="text-orange-500">’</span>s{" "}
            <span className="text-orange-500 ">Cuisine</span></span> , where tradition meets innovation. Taste the rich flavors of time-honored recipes, fall in love with our creative culinary twists, and delight in a diverse array of delectable dishes.
                    </p>
                    <Link to="/allFoods">
                    <button className="btn btn-sm md:btn-md btn-outline text-[#71ff61] font-bold rounded-none animate__animated animate__backInUp  hover:bg-orange-600 hover:text-white hover:border-white">
                      Explore All Foods
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[800px] md:min-h-[600px] min-h-[520px] bg-[url('https://i.ibb.co/X39MDLY/banner-pizzas.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-10 gap-4 p-2 absolute h-full md:bg-gradient-to-r bg-gradient-to-t from-[#191919fa]  to-[rgba(21, 21, 21, 0.00)]">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h3 className="md:text-3xl text-2xl font-semibold text-[#87ff24f1] animate__animated animate__fadeInTopLeft  animate__slow">
                      Fast Foods
                    </h3>
                    <h1 className="lg:text-7xl md:text-5xl text-3xl  font-bold animate__animated  animate__fadeInUp animate__slower text-white merienda my-4">
                    Delight in <br /> Diverse Delicacies
                    </h1>
                    <p  className="md:my-4 my-2 md:text-xl  md:w-[70%] animate__animated animate__fadeInBottomRight md:mx-0 w-[90%] mx-auto text-orange-200">
                    Our menu offers a wide array of dishes, each crafted to bring you the best flavors from around the world. Experience a culinary journey that celebrates variety and excellence in every bite.
                    </p>
                    <Link to="/allFoods">
                    <button className="btn btn-sm md:btn-md btn-outline text-[#71ff61] font-bold rounded-none animate__animated animate__backInUp  hover:bg-orange-600 hover:text-white hover:border-white">
                      Explore All Foods
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[800px] md:min-h-[600px] min-h-[520px] bg-[url('https://i.ibb.co/pf36CfH/banner-trad.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-10 gap-4 p-2 absolute h-full  md:bg-gradient-to-r bg-gradient-to-t from-[#191919fa]  to-[rgba(21, 21, 21, 0.00)]">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h3 className="md:text-3xl text-2xl font-semibold text-[#87ff24f1] animate__animated animate__fadeInTopLeft  animate__slow">
                      Traditional Foods
                    </h3>
                    <h1 className="lg:text-7xl md:text-5xl text-3xl  font-bold animate__animated  animate__fadeInUp animate__slower text-white merienda my-4">
                    Taste the Tradition, <br />
                     Love the Innovation
                    </h1>
                    <p  className="md:my-4 my-2 md:text-xl  md:w-[70%] animate__animated animate__fadeInBottomRight md:mx-0 w-[90%] mx-auto text-orange-200">
                    Taste the tradition with our classic, time-honored recipes, and love the innovation with our creative, modern culinary twists. Join us for a unique dining adventure that blends heritage and contemporary flavors.
                    </p>
                    <Link to="/allFoods">
                    <button className="btn btn-sm md:btn-md btn-outline text-[#71ff61] font-bold rounded-none animate__animated animate__backInUp  hover:bg-orange-600 hover:text-white hover:border-white">
                      Explore All Foods
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;