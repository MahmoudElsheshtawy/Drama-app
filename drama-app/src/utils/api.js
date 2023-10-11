import axios from 'axios'
const LINK_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;
const headers ={
    Authorization:"bearer "+ TMDB_TOKEN
}
export const fetchDatafromapi=async (url,params)=>{
    try {
        const {data} =await axios.get(LINK_URL+url,{headers,params});
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}