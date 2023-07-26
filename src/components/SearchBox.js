"use client"

import { useRef, useEffect } from "react"
import { RxCross2 } from "react-icons/rx"
import { BsFillMicFill } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

const SearchBox = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("searchTerm")
  const inputRef = useRef("null")

  useEffect(() => {
    inputRef.current.value = searchTerm
  })

  function handleSubmit (e) {
    e.preventDefault()
    if (!inputRef.current.value.trim() || inputRef.current.value === searchTerm) return
    router.push(`/search/${pathname.includes("/web") ? "web" : "image"}?searchTerm=${inputRef.current.value}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-grow border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 items-center max-w-3xl"
    >
      <input ref={inputRef} type="text" className="w-full focus:outline-none"/>
      <RxCross2
        onClick={() => { inputRef.current.value = "" }}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  )
}

export default SearchBox
