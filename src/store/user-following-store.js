import { create } from 'zustand';


const initialState={
    loading:false,
    data:null,
    error:false,
    errorData:null,

}
export const useGetUserFollowing=create((set)=>({
    ...initialState,
    execute: async(search)=>{
        set({...initialState, loading: true, });
        try{
            const fetchUserFollowing=await fetch(`https://api.github.com/users/${search}/following`);
            
            if(!fetchUserFollowing.ok){
                set({...initialState, loading:false, error: true, errorData: 'There was an error while fetching the data'});
            }
            const fetchUserFollowingJSON=await fetchUserFollowing.json();
            console.log(fetchUserFollowingJSON);
            set({...initialState, loading: false, data: fetchUserFollowingJSON})
        }catch(error){
            console.log(error);
            set({...initialState, loading: false, error: true, errorData: error.message})
        }
    }
}))