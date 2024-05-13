import { Link } from "react-router-dom";


const Gallery = () => {
  return (
    <div>
       <div className="flex relative w-full ">
         <img src="https://i.ibb.co/cQLLT5j/g-banner.png" className="lg:max-h-[300px] md:max-h-[200px] max-h-[100px] w-full " alt="" />

         <div className="absolute h-full w-full flex flex-col justify-center bg-gradient-to-r from-[#026f3e] to-[rgba(21, 21, 21, 0.00)]">
            <div className= "text-center text-white space-y-3">
              <h1 className="font-bold lg:text-4xl text-2xl merienda">Foods Gallery</h1>
              <h1 className="font-bold text-sm">
               <Link className="text-orange-600" to='/'>Home</Link> | Foods Gallery
              </h1>
            </div>
          </div>

       </div>
      
    </div>
  );
};

export default Gallery;

//https://i.ibb.co/jk5qVGq/banner-img.png
//https://i.ibb.co/cQLLT5j/g-banner.png