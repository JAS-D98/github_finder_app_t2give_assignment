import { create } from 'zustand';

const initialState={
    loading:false,
    error:false,
    data:null,
    errorData:null,
}

export const useGetRepositoryData=create((set)=>({
    ...initialState,
    execute:async(search)=>{
        set({...initialState, loading: true});
        try{
            const fetchUserRepositoriesResponse=await fetch(`https://api.github.com/users/${search}/repos`)
            if(!fetchUserRepositoriesResponse.ok){
                set({...initialState, loading: false, error:true, errorData:`An issue occurred when fetching ${search} repositories`})   
            }
            const fetchUserRepositoriesResponseJSON=fetchUserRepositoriesResponse.json();
            console.log(fetchUserRepositoriesResponseJSON);
            set({...initialState, loading: false, data: fetchUserRepositoriesResponseJSON })
        }catch(error){
            console.log(error.message);
            set({...initialState, loading: false, error:true, errorData:error.message})
        }
    }
}))