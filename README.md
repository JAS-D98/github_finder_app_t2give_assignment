https://github-finder-six-blond.vercel.app/

 getUserFollowers={getUserFollowers.data}
 import { MdOutlineLink } from "react-icons/md";
   
      <div className='mt-6'>
      <p className='text-2xl font-bold mb-4 text-center md:text-left md:ml-[2%]'>Followers (30)</p>
      <div>
        {getUserFollowers.map((card)=>(
           <div className='w-[15em] bg-cream flex flex-col items-center justify-center p-2 space-y-3'>
           <div className='w-[5em] overflow-hidden object-cover rounded-md'>
           <img src={card.avatar_url} alt={`image of ${card.login}`} className='w-full h-full'/>
           </div>
           <h1 className='text-dark font-bold'>{card.login}</h1>
           <button className='bg-dark text-white text-sm px-3 py-1 rounded flex items-center gap-1'><span className='text-white text-xl'><MdOutlineLink /></span> View {card.login}</button>
           </div>
        ))}
      </div>
    </div>
