import { useContext } from "react";
import { AuthContext } from "../Provider/FirebaseAuth";





// Custom hook
 const useAuthContext =()=>{
  const authContext = useContext(AuthContext);
  return authContext; 
}

export default useAuthContext;