import React from 'react'

export default function navbar() {
  return (
    <div className="flex gap-2 flex-col md:flex-row w-full min-h-10 bg-dark justify-between items-center px-10 py-3 fixed z-20">
    <p className="text-xl md:text-3xl font-bold text-blue">GITHUB FINDER</p>
    <p classname="md:text-xl text-blue"><span className='text-blue text-xl'>By</span> <a href="" className='text-xl capitalize text-blue underline'>Jasper Ngunjiri</a></p>
    <div>
        <form className='flex'>
        <input type="text" placeholder="Search a User" className='px-2 py-2 outline-none border-r-2 border-dark rounded-sm'/>
        <button className='px-3 py-2 bg-white text-dark font-semibold rounded-sm cursor-pointer'>Search</button>
        </form>
    </div>
    </div>
  )
}
