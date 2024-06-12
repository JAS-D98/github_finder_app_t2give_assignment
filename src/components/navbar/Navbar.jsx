import React from 'react'

export default function navbar() {
  return (
    <div className="w-full min-h-10 bg-dark flex justify-between items-center px-10 py-3">
    <p className="text-3xl font-bold text-blue">GITHUB FINDER</p>
    <p classname="text-2xl text-blue"><span className='text-blue text-2xl'>By</span> <a href="" className='text-2xl capitalize text-blue underline'>Jasper Ngunjiri</a></p>
    <div>
        <form>
        <input type="text" placeholder="Search a User" className='px-2 py-2 outline-none border-r-2 border-dark rounded-sm'/>
        <button className='px-3 py-2 bg-white text-dark font-semibold rounded-sm'>Search</button>
        </form>
    </div>
    </div>
  )
}
