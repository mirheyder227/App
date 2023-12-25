 
import { useSelector } from "react-redux/es/hooks/useSelector";
import { roots } from "../Routes/constans";
 
import { Navigate, Outlet } from "react-router-dom";
 

 
const PublicLayout = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
 
      {token ? <Outlet /> : <Navigate to={roots.Login} />}
   
    </>
  );
  
}

export default PublicLayout