import http from "@config";
import { create } from "zustand";
import { LikesStore } from "@globalinterface";


const useLikesStore = create <LikesStore> (() => ({
    Postlike: async (payload) => {
        try{
            const response = await http.post(`/like/${payload.id}`)
            if(response.status === 201){
                return response
            }
        }catch(err){
            return err
        }
    },
    Getlike: async (payload) => {
        try{
            const response = await http.get(`/wishlist?page=${payload.page}&limit=${payload.limit}`)
            if(response.status === 200){
                return response
            }
        }catch(err){
            return err
        }
    }
}))


export default useLikesStore;