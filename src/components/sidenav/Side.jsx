import React from 'react'
import person from './../../assets/person.png'
import { FaGithubSquare } from "react-icons/fa";
import Button from '../button/Button';

export default function Side() {
  return (
  <div className='lg:max-w-[25.5%] bg-slate-400 min-h-[100vh]'>
    <div className="object-cover overflow-hidden w-[20em] rounded-xl">
        <img src={person} alt="" />
        {/* <FaGithubSquare className='w-full h-full' /> */}
    </div>
    <div>
        <p className='text-2xl font-bold text-dark'>Jasper Ngunjiri</p>
        <p className="text-dark text-xl my-2">GitHub</p>
        <p className='text-md text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aspernatur?</p>
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