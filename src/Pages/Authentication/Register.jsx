import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import logo from '../../assets/images/logo.png'
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {

  const {user,setUser, createUser, updateUserProfile} = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate('/');
    }
 },[user])


  
  const handleRegister = async e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name,photo,email, password});

    try{
       const result = await createUser(email, password);
       await updateUserProfile(name, photo);
       console.log(result);

    //take a token to be verified as valid user
       const{data} = await axiosSecure.post( '/jwt', {email: result?.user?.email})

       console.log(data);

       setUser({...result?.user, displayName: name, photoURL: photo})
       toast.success("Registered successfully!")
       navigate('/');
    } catch(err){
       console.log(err.message)
    }
}


    
  if(user) return

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-20">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className='flex justify-center mx-auto'>
            <img
              className='w-12 h-12 '
              src={logo}
              alt='website logo'
            />
          </div>

          <p className="mt-3 text-2xl text-center text-gray-600 font-extrabold merienda">
            Get Your Free Account Now.
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
             Get registered with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          {/* Form of register */}
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-semibold text-gray-600 "
                htmlFor="name"
              >
              Name
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                placeholder="Enter your name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-semibold text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                placeholder="Enter your photo url"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-semibold text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                placeholder="Enter your email address"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-semibold text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                placeholder="Enter unique password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://i.ibb.co/JqN87MD/register.png')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
