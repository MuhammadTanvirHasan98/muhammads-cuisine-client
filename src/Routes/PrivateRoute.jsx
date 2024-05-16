import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BallTriangle} from "react-loader-spinner";
import useAuthContext from "../hooks/useAuthContext";



const PrivateRoute = ({ children }) => {
  console.log("Private Route Called!");
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="blue"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object,
};