"use client"

import Link from "next/link"
import { TbGridDots } from "react-icons/tb"

const HomeHeader = () => {
  return (
    <header className="flex text-sm justify-end">
      <div className="flex space-x-4 p-4 items-center" >
        <a href={"/gmail"} onClick={e => e.preventDefault()} className="hover:underline">
          Gmail
        </a>
        <Link href={"/images"} onClick={e => e.preventDefault()} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer"/>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
      </div>
    </header>
  )
}

export default HomeHeader
