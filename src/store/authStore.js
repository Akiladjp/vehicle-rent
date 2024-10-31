import { create } from "zustand";
import axios from 'axios';


const API_URL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user:null,
    isAuthenticated:false,
    error:null,
    isLoading:false,
    isCheckingAuth:true,

    signup: async(email, password, name, mobile) => {
        set({isLoading:true, error:null});

        try {
            await axios.post(`${API_URL}/signup`, {email, password, name, mobile});
            set({user:response.data.userModel, isLoading:false, isAuthenticated:true });
        } catch (error) {
            set({ error: error.response.data.message || "Error in signing up", isLoading: false });
            throw error;
        }
    }

}))