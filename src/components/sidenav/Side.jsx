import React from 'react'
import person from './../../assets/person.png'
import { FaGithubSquare } from "react-icons/fa";

export default function Side() {
  return (
  <div className='pl-5 mt-3 lg:max-w-[25%]'>
    <div className="object-fit overflow-hidden w-[20em] rounded-xl">
        {/* <img src={person} alt="" /> */}
        <FaGithubSquare size={300} className='text-dark w-full h-full' />
    </div>
    <div>
        <p className='text-2xl font-bold text-dark'>Jasper Ngunjiri</p>
        <p className="text-dark text-xl my-2">GitHub</p>
        <p className='text-md text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aspernatur?</p>
    </div>
</div>
  )
}
