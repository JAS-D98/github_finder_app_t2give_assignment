import React from 'react'

export default function RepoCard() {
  return (
    <div className='lg:w-[40%] bg-repocard_bg p-3 flex flex-col gap-5 rounded-md'>
        <p className='font-bold text-xl'>Air_BnB_Clone</p>
        <p>alx backend user data</p>
        <div className='bg-cream flex items-center gap-4 text-[1.1em] p-2'>
            <p>0 forks</p>
            <p>0 stars</p>
        </div>
    </div>
  )
}
