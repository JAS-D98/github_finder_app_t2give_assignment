import React from 'react'
import RepoCard from '../repocontainer/RepoCard'

export default function RepoContainer({repositoryData}) {
  return (
    <div className='w-full md:ml-[30%] overflow-hidden'>
        <p className='text-2xl font-bold mb-4 text-center md:text-left md:ml-[2%]'>Repositories(30)</p>
        <div className='flex items-center justify-center flex-wrap gap-10 md:w-[70%] overflow-hidden'>
        <RepoCard/>
        </div>
    </div>
  )
}
