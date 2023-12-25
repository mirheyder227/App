import { Navigate, Outlet } from "react-router-dom";
import { roots } from "../Routes/constans";
import { useSelector } from "react-redux/es/hooks/useSelector";
const ProtectedLayout = () => {
  const { token } = useSelector((state) => state.auth);
  console.log(token);
  return <>{!token ? <Outlet /> : <Navigate to={roots.Home} />}</>;
};

export default ProtectedLayout;
