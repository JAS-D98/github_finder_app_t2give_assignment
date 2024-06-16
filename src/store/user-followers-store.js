import { create } from 'zustand';


const initialState={
    loading:false,
    data:null,
    error:false,
    errorData:null,

}
export const useGetUserFollowers=create((set)=>({
    ...initialState,
    execute: async(search)=>{
        set({...initialState, loading: true, });
        try{
            const fetchUserFollowers=await fetch(`https://api.github.com/users/${search}/followers`);
            
            if(!fetchUserFollowers.ok){
                set({...initialState, loading:false, error: true, errorData: 'There was an error while fetching the data'});
            }
            const fetchUserFollowersJSON=await fetchUserFollowers.json();
            console.log(fetchUserFollowersJSON);
            set({...initialState, loading: false, data: fetchUserFollowersJSON})
        }catch(error){
            console.log(error);
            set({...initialState, loading: false, error: true, errorData: error.message})
        }
    }
}))