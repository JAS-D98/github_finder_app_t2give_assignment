import React from 'react'
import { IoIosGitNetwork } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export default function RepoCard() {
  return (
    <div className='w-full md:w-[45%] bg-repocard_bg p-3 flex flex-col items-center lg:items-start gap-5 rounded-md cursor-pointer'>
        <p className='font-bold text-xl'>Air_BnB_Clone</p>
        <p>alx backend user data</p>
        <div className='bg-cream flex items-center gap-4 text-[1.1em] p-2 w-full'>
            <p className='flex items-center gap-2' ><IoIosGitNetwork />0 forks</p>
            <p className='flex items-center gap-2' ><FaStar/>0 stars</p>
        </div>
    </div>
  )
}
