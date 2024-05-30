import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuthContext from "../../hooks/useAuthContext";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyAddedFoods = () => {

  const {user} = useAuthContext();
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();


  useEffect(() => {
    getFoods();
  }, [user?.email]);

  const getFoods = async () => {
    const { data } = await axiosSecure.get(`/addedFoods/${user?.email}`);
    setFoods(data);
  };

  console.log(foods);




  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center justify-center gap-x-3'>
        <h2 className='text-xl font-medium text-orange-500 merienda'>Your Added Foods</h2>

        <span className='px-3 py-1 text-md text-orange-500 font-bold bg-[#deffd8] rounded-full '>
          {foods.length}
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-orange-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>

                <thead className='bg-[#e9ffed] text-blue-500 '>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm  text-left rtl:text-right'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Food Image</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm  text-left rtl:text-right '
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Food Name</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm  text-left rtl:text-right '
                    >
                      <span>Category</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm  text-left rtl:text-right '
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Food Origin</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm  text-left rtl:text-right '
                    >
                      Price
                    </th>

                    <th className='px-4 py-3.5 text-sm  text-center rtl:text-right '>
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className='bg-white divide-y divide-gray-200 '>
                 {
                  foods.map(food=> (
                    <tr key={food?._id}>
                  
                  {/* Food image */}
                  <td className="px-2 ">
                    <div className="avatar">
                        <div className="mask mask-squircle md:w-[70px] md:h-[70px] w-12 h-12 mt-2 ml-3">
                          <img src={food?.food_img} alt="Art&Craft Image" />
                        </div>
                      </div>
                   </td>

                    {/* Food Name */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {food?.food_name}
                    </td>

                    {/* Food Category */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {food?.category}
                    </td>

                  {/* Food Origin */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {food?.food_origin}
                    </td>

                    {/* Price */} 
                    <td className='px-4 py-4 text-sm text-orange-500  whitespace-nowrap'>
                       $ {food?.price}
                    </td>   
                  
                    {/* Action button */}
                    <td className='px-4 py-4 text-sm flex justify-center whitespace-nowrap'>
                      <Link
                       to={`/updateFood/${food?._id}`}>
                      <button
                      >
                      <FaEdit className="text-2xl text-orange-400"/>
                      </button>

                      </Link>
                     
                    </td>
                  </tr>
                  ))
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAddedFoods