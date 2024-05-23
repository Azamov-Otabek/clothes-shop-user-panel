import http from "@config";
import { create } from "zustand";
import { Request } from "../../interface/products";


const useProductStore = create <Request> ((set) => ({
   products: [],
   getProducts: async (payload:any) => {
    try{
      const response = await http.get(`/products?page=${payload.page}&limit=${payload.limit}`)
      if(response.status === 200){
         set({products: response.data.products})
      }
    }catch(err){
      console.log(err);
    }
   }
}))


export default useProductStore;