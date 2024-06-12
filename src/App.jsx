import Navbar from './components/navbar/Navbar'
import RepoContainer from './components/repositoriesconatiner/RepoContainer'
import Side from './components/sidenav/Side'
export default function App() {
  return (
   <>
    <Navbar/>
    <div className='flex gap-4 mt-2 px-10'>
      <Side/>
      <RepoContainer/>
    </div>
   </>
  )
}