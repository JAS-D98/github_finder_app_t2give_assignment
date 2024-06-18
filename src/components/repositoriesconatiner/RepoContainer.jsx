import React, { useState } from 'react'
import { IoIosGitNetwork } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdOutlineLink } from "react-icons/md";

export default function RepoContainer({getUserRepoData, getUserFollowers, getUserFollowing, searchUser }) {
  const [search, setSearch]=useState("");
  const handleSearch = (login) => {
    setSearch(login);
    searchUser(login);
  }
  return (
    <div className='w-full md:ml-[30%] overflow-hidden'>
        <p className='text-2xl font-bold mb-4 text-center md:text-left md:ml-[2%]'>Repositories (30)</p>
        <div className='flex items-center justify-center flex-wrap gap-10 md:w-[70%] overflow-hidden'>
          {getUserRepoData?.map((repo, i)=>(
            <a href={repo.clone_url} target='blank' key={i}>
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


       {/* fetch followers section */}
      <div className='mt-6 p-2'>
        <p className='text-2xl font-bold mb-4 text-center md:text-left md:ml-[2%]'>Followers</p>
        <div className='flex flex-col md:flex-row gap-2 flex-wrap w-[90%]'>
          {getUserFollowers?.map((card, i)=>(
            <div className='md:w-[15%] bg-cream flex flex-col items-center justify-center p-2 space-y-3' key={i}>
            <div className='w-[5em] overflow-hidden object-cover rounded-md'>
            <img src={card.avatar_url} alt={`image of ${card.login}`} className='w-full h-full'/>
            </div>
            <h1 className='text-dark font-bold'>{card.login}</h1>
            <button  onClick={() => handleSearch(card.login)} className='bg-dark text-white text-sm px-3 py-1 rounded flex items-center gap-1'><span className='text-white text-xl'><MdOutlineLink /></span> View {card.login}</button>
            </div>
          ))}
        </div>
      </div>
        {/*end of fetch followers section */}
      
       {/* fetch following section */}
      <div className='mt-6 p-2'>
        <p className='text-2xl font-bold mb-4 text-center md:text-left md:ml-[2%]'>Following</p>
        <div className='flex flex-col md:flex-row gap-2 flex-wrap w-[90%]'>
          {getUserFollowing?.map((card, i)=>(
            <div className='md:w-[15%] bg-cream flex flex-col items-center justify-center p-2 space-y-3' key={i}>
            <div className='w-[5em] overflow-hidden object-cover rounded-md'>
            <img src={card.avatar_url} alt={`image of ${card.login}`} className='w-full h-full'/>
            </div>
            <h1 className='text-dark font-bold'>{card.login}</h1>
            <button  onClick={() => handleSearch(card.login)} className='bg-dark text-white text-sm px-3 py-1 rounded flex items-center gap-1'><span className='text-white text-xl'><MdOutlineLink /></span> View {card.login}</button>
            </div>
          ))}
        </div>
      </div>
        {/*end of fetch following section */}

    </div>
  )
}
