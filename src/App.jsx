import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar'
import RepoContainer from './components/repositoriesconatiner/RepoContainer'
import Side from './components/sidenav/Side'
import { useGetData } from './store/user-profile-store';
import { useGetUserRepos } from './store/user-repositories-store';
import { useGetUserFollowers } from './store/user-followers-store';

export default function App() {

  const getData = useGetData((state)=>state);
  const getUserRepoData=useGetUserRepos((state)=>state);
  const getUserFollowers=useGetUserFollowers((state)=>state);

  const handleSearch=(search)=>{
    getData.execute(search);
    getUserRepoData.execute(search);
    getUserFollowers.execute(search);
  }
  useEffect(()=>{
    getData.execute("github");
    getUserRepoData.execute("github");
    getUserFollowers.execute("github");
  },[])
  return (
   <>
    <Navbar searchUser={handleSearch}/>
    <div className='flex flex-col md:flex-row gap-4 px-10'>
      <div className='mt-[6%] overflow-hidden flex flex-col items-center lg:block'>
      <Side profileData={getData}/>
      <div>
      <RepoContainer getUserRepoData={getUserRepoData.data}/>
      </div>
      </div>
    </div>
   </>
  )
}