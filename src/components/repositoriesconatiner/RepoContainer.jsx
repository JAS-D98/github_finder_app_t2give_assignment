import React from 'react'
import RepoCard from '../repocontainer/RepoCard'

export default function RepoContainer() {
  return (
    <div className='w-full'>
        <p className='text-2xl font-bold mb-4'>Repositories(30)</p>
        <div>
        <RepoCard/>
        </div>
    </div>
  )
}
