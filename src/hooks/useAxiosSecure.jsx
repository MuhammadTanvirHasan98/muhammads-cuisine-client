import axios from 'axios';
import useAuthContext from './useAuthContext';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
   baseURL: `${import.meta.env.VITE_API_URL}`,
   withCredentials:true
})

const useAxiosSecure = () => {

  // does not work properly
const {logOut} = useAuthContext();
const navigate = useNavigate();


  // response interceptor 
  axiosSecure.interceptors.response.use(
     res =>{
      console.log("Response inside interceptor", res)
      return res
     },
     async error => {
      console.log('Error from axios interceptor', error.response)
      if(error.response.status===401 || error.response.status===403){
        await logOut()
        navigate('/login')
      }
      return Promise.reject(error);
     }
  )

  return axiosSecure;

}
export default useAxiosSecure;