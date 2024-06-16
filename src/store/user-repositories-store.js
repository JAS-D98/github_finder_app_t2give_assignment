import { create } from 'zustand';

const initialState={
    loading:false,
    data:null,
    error:false,
    errorData:null,
}

export const useGetUserRepos=create((set)=>({
    ...initialState,
    execute:async(search)=>{
        set({...initialState, loading:true})
        try{
            const fetchUserRepos=await fetch(`https://api.github.com/users/${search}/repos`);
            if(!fetchUserRepos){
                set({...initialState, error: true, loading:false, errorData: 'Error Fetching the data', })
            }
            const fetchUserReposJSON=await fetchUserRepos.json();
            console.log(fetchUserReposJSON);
            set({...initialState, data: fetchUserReposJSON, loading:false})

        }catch(error){
            console.log(error);
            set({...initialState, error: true, errorData:error.message, loading:false})
        }
    }
})) 