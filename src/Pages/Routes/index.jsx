import { Routes, Route } from "react-router-dom";
import { roots } from "./constans";
import {
  Home,
  ProductList,
  Login,
  SignUp,
  TheBlog,
  About,
  Pricing,
  Contact,
  Article,
  Error,
   Product
} from "../Js/index";
import PublicLayout from "../Layout/PublicLayout";
import ProtectedLayout from "../Layout/ProtectedLayout";
// import Basket from "../../components/Basket";
// import useBasket from "../../components/Basket/useBasket";
const MainRoutes = () => {
  // const{basket,addToBasket}=useBasket()
  return (
    <Routes>
       
       
      <Route element={<PublicLayout/>}>
      <Route path={roots.Home} element={<Home />} />
        <Route path={roots.ProductList} List element={<ProductList/>} />
        <Route path={`${roots.Product}:id`} List element={<Product/>} />
        {/* <Route path={roots.Basket} element={<Basket basket={basket}/>} /> */}

        <Route path={roots.TheBlog} element={<TheBlog/>} />
        <Route path={roots.About} element={<About/>} />
        <Route path={roots.Pricing} element={<Pricing/>} />
        <Route path={roots.Contact} element={<Contact/>} />
        <Route path={roots.Article} element={<Article/>} />
        <Route path={roots.Error} element={<Error/>} />
      </Route>
      <Route element={<ProtectedLayout/>}>
      <Route path={roots.SignUp} element={<SignUp/>} />
        <Route path={roots.Login} element={<Login/>} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
