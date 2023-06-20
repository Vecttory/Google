import Link from "next/link"
import { TbGridDots } from "react-icons/tb"

const HomeHeader = () => {
  return (
    <header className="flex text-md justify-end">
      <div className="flex space-x-4 p-5 items-center" >
        <Link href={"/gmail"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"/images"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"/>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
      </div>
    </header>
  )
}

export default HomeHeader
