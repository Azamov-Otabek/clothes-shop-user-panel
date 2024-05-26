import http from "@config";
import { create } from "zustand";
import { Request } from "../../interface/products";


const useProductStore = create <Request> ((set) => ({
   products: [],
   getProducts: async (payload) => {
    try{
      const response = await http.get(`/products?page=${payload.page}&limit=${payload.limit}`)
      if(response.status === 200){
         set({products: response.data.products})
      }
    }catch(err){
      console.log(err);
    }
   },
   getProductbyId: async(payload) =>{
    try{
      const response = await http.get(`/product/${payload.id}`)
      if(response.status === 200){
         return response
      }
    }catch(err){
      console.log(err);
    } 
  },
   getProductPhoto: async(payload) => {
    try{
      const response = await http.get(`/media/${payload.id}`)
      if(response.status === 200){
         return response
      }
    }catch(err){
      console.log(err);
    }
   }
}))


export default useProductStore;