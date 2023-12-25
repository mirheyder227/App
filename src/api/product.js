import { instance } from "./index";
export const getAllProducts = async () =>{
  const result = await instance.get("/products?populate=*")
  return result.data
}



