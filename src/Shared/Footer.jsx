import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div>
     <nav className="bg-white shadow ">


        <NavLink className="border-b-2 border-transparent transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">blog</NavLink>

</nav>
    </div>
  );
};

export default Footer;