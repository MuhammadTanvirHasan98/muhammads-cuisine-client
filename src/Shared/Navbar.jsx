import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


  const navLinks = (
    <div className="flex flex-col  lg:flex-row gap-2 ">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-orange-600 text-orange-500"
              : "font-bold text-lg flex justify-center text-orange-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-lg border-b-2 font-bold flex justify-center border-orange-600 text-orange-500"
            : "font-bold text-lg flex justify-center text-orange-500"
        }
          to="/allFoods"
        >
          All Foods
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg border-b-2 font-bold flex justify-center border-orange-600 text-orange-500"
              : "font-bold text-lg flex justify-center text-orange-500"
          }
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li>
    </div>
  );
  


  return (
    <div className="bg-[#dbf6db]">
      <div className="navbar lg:w-[86%] p-0  w-[95%] mx-auto">
        <div className="navbar-start lg:w-[50%] w-full">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn flex btn-sm px-1 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-8 md:w-8 h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="md:text-2xl text-xl font-extrabold meri">
            Muhammad<span className="text-orange-500">’</span>s{" "}
            <span className="text-orange-500 ">Cuisine</span>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {navLinks}
          </ul>
        </div>
        <div className="navbar-end lg:w-[50%] w-[30%]">
          <Link  className="font-bold text-xl border-x-2 border-orange-400 rounded-lg px-3 border-y-0 text-orange-400 hover:text-black">
              Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
