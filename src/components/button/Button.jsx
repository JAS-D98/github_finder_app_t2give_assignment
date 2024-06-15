import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Button() {
  return (
    <div className='bg-dark rounded-md text-blue flex justify-center items-center px-4 py-3 my-2 cursor-pointer font-semibold gap-2 '><FaExternalLinkAlt /> View On GitHub</div>
  )
}
