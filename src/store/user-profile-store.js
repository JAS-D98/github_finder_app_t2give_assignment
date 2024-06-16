import { create } from 'zustand';

const initialState={
    loading:false,
    error:false,
    data:null,
    errorData:null,
}

export const useGetData=create((set)=>({
    ...initialState,
    execute:async(search)=>{
        set({...initialState, loading:true});
        try{
            const profileSearchResponse=await fetch(`https://api.github.com/users/${search}`)
            if(!profileSearchResponse.ok){
                console.log(error.message);
                set({...initialState, loading: false,error:true, errorData:'There was a problem fetching the user'})
            }
            const profileSearchJSONResponse=await profileSearchResponse.json();
            // console.log(profileSearchJSONResponse);
            set({...initialState, loading:false, data:profileSearchJSONResponse})
        }catch(error){
            console.log(error.message);
            set({...initialState, loading: false,error:true, errorData: error.message})
        }
    }
}))