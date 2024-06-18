import { useState } from "react";

export default function Navbar({searchUser}) {
  const [search, setSearch]=useState('');

  const handleWord=(e)=>{
    setSearch(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    searchUser(search);
  }
return (
    <div className="flex gap-2 flex-col md:flex-row w-full min-h-10 bg-dark justify-between items-center px-10 py-3 fixed z-20">
    <p className="text-xl md:text-2xl font-bold text-blue Open-Sans">GITHUB FINDER</p>
    <p className="text-blue"><span className='text-blue text-md'>By</span> <a href="https://github.com/JAS-D98" target="_blank" className='capitalize text-blue underline text-md'>Jasper Ngunjiri</a></p>
    <div>
        <form className='flex' onSubmit={handleSubmit}>
        <input type="text" placeholder="Search a User" className='px-2 py-1 outline-none border-r-2 border-dark rounded-sm' onChange={handleWord}/>
        <button className='px-3 bg-white text-dark font-semibold rounded-sm cursor-pointer'>Search</button>
        </form>
    </div>
    </div>
  )
}
