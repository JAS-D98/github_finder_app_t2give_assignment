import React from 'react'
import { IoIosGitNetwork } from "react-icons/io";
import { FaStar } from "react-icons/fa";


export default function RepoContainer({getUserRepoData}) {
  return (
    <div className='w-full md:ml-[30%] overflow-hidden'>
        <p className='text-2xl font-bold mb-4 text-center md:text-left md:ml-[2%]'>Repositories (30)</p>
        <div className='flex items-center justify-center flex-wrap gap-10 md:w-[70%] overflow-hidden'>
          {getUserRepoData?.map((repo)=>(
            <a href={repo.clone_url} target='blank'>
                <div className='min-w-[15em] w-full md:w-[25em] bg-repocard_bg p-3 flex flex-col items-center lg:items-start gap-5 rounded-md cursor-pointer'>
                  <p className='font-bold text-xl'>{repo.name}</p>
                  <p>{repo.description}</p>
                  <div className='bg-cream flex items-center gap-4 text-[1.1em] p-2 w-full'>
                      <p className='flex items-center gap-2' ><IoIosGitNetwork />{repo.forks_count} forks</p>
                      <p className='flex items-center gap-2' ><FaStar/>{repo.stargazers_count} stars</p>
                  </div>
                </div>
            </a>
          ))}
        </div>
    </div>
  )
}
