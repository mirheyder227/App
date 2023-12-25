import { instance } from "./index";

export const register=async(regObj)=>{
    const result= await instance.post("auth/local/register",regObj)
    return result.data
}


export const login=async(loginObj)=>{
    const result= await instance.post("auth/local",loginObj)
    return result.data
}