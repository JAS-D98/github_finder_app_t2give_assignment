import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar'
import RepoContainer from './components/repositoriesconatiner/RepoContainer'
import Side from './components/sidenav/Side'
import { useGetData } from './store/user-profile-store';
import { useGetRepositoryData } from './store/user-repositories-store';
export default function App() {

  const getData = useGetData((state)=>state);
  const getUserRepositoryData=useGetRepositoryData((state)=>state);

  const handleSearch=(search)=>{
    getData.execute(search);
    getUserRepositoryData.execute(search);
  }
  useEffect(()=>{
    getData.execute("github");
    getUserRepositoryData.execute("github");
  },[])
  return (
   <>
    <Navbar searchUser={handleSearch}/>
    <div className='flex flex-col md:flex-row gap-4 px-10'>
      <div className='mt-[6%] overflow-hidden flex flex-col items-center lg:block'>
      <Side profileData={getData}/>
      <RepoContainer repositoryData={getUserRepositoryData}/>
      </div>
    </div>
   </>
  )
}