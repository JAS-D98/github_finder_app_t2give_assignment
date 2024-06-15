import React from 'react'
import { RiGitRepositoryFill } from "react-icons/ri";
import Button from '../button/Button';
import { MdLocationOn, MdLocationCity, MdGroups  } from "react-icons/md";


export default function Side({profileData}) {
  return (
  <div className='flex flex-col items-center lg:max-w-[25%] lg:min-h-[100vh] lg:fixed mb-4 lg:mb-0'>
    <div className="object-cover overflow-hidden w-full h-[40vh] rounded-xl">
        <img src={profileData.data?.avatar_url} alt={`Github profile photo of ${profileData.data?.name}`} className='w-full h-full' />
    </div>
    <div className='flex flex-col items-center md:block'>
        <p className='text-2xl font-bold text-dark'>{profileData.data?.name}</p>
        <p className="text-dark text-xl my-2">{profileData.data?.login}</p>
        <p className='text-center md:text-left text-md text-dark'>{profileData.data?.bio}</p>
        <a href={profileData.data?.blog} target='blank'><Button/></a>
        <div className='text-dark '>
        <p className='flex items-center gap-2' ><MdLocationOn />Location {profileData.data?.location}</p>
        <p className='flex items-center gap-2' ><MdLocationCity />{profileData.data?.company} Organization</p>
        <p className='flex items-center gap-2' ><RiGitRepositoryFill />{profileData?.public_repos} Repositories</p>
        <p className='flex items-center gap-2' ><MdGroups />{profileData.data?.followers} Followers</p>
        <p className='flex items-center gap-2' ><MdGroups />{profileData.data?.following} Following</p>
        </div>
    </div>
</div>
  )
}