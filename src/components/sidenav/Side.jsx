import React from 'react'
import person from './../../assets/person.png'
import { FaGithubSquare } from "react-icons/fa";
import Button from '../button/Button';

export default function Side() {
  return (
  <div className='flex flex-col items-center lg:max-w-[25%] lg:min-h-[100vh] lg:fixed mb-4 lg:mb-0'>
    <div className="object-cover overflow-hidden w-full rounded-xl">
        <img src={person} alt="" />
        {/* <FaGithubSquare className='w-full h-full' /> */}
    </div>
    <div className='flex flex-col items-center md:block'>
        <p className='text-2xl font-bold text-dark'>Jasper Ngunjiri</p>
        <p className="text-dark text-xl my-2">GitHub</p>
        <p className='text-center md:text-lefttext-md text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aspernatur?</p>
        <Button/>
        <div className='text-dark '>
        <p>Location</p>
        <p>TEACH2GIVE</p>
        <p>Repositories</p>
        <p>Followers</p>
        <p>Following</p>
        </div>
    </div>
</div>
  )
}