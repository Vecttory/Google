import Image from "next/image"
import Link from "next/link"
import SearchBox from "./SearchBox"
import { RiSettings3Line } from "react-icons/ri"
import { TbGridDots } from "react-icons/tb"
import SearchHeaderOptions from "./SearchHeaderOptions"

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-center p-2">
        <Link href="/" className="sm:hidden">
          <Image
            className="pb-2 pt-2 h-14 object-contain"
            width={120}
            height={40}
            alt="Google logo"
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"}
          />
        </Link>
      </div>
      <div className="flex w-full px-2 pb-3 sm:p-6 items-center justify-between">
        <Link href="/" className="hidden sm:block">
          <Image
            width={120}
            height={40}
            alt="Google logo"
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"}
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 mr-3">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="hidden sm:block bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}

export default SearchHeader
