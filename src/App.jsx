import Navbar from './components/navbar/Navbar'
import RepoContainer from './components/repositoriesconatiner/RepoContainer'
import Side from './components/sidenav/Side'
export default function App() {
  return (
   <>
    <Navbar/>
    <div className='flex flex-col md:flex-row gap-4 px-10'>
      <div className='mt-[6%] overflow-hidden flex flex-col items-center lg:block'>
      <Side/>
      <RepoContainer/>
      </div>
    </div>
   </>
  )
}