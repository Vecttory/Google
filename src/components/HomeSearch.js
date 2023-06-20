"use client"

import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const HomeSearch = () => {
  const router = useRouter()
  const inputRef = useRef(null)
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputRef.current.value.trim()) return
    router.push(`/search/web?searchTerm=${inputRef.current.value}`)
  }

  const randomSearch = async () => {
    setRandomSearchLoading(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word")
    if (!response) return setRandomSearchLoading(false)
    const data = await response.json()
    router.push(`/search/web?searchTerm=${data[0]}`)
  }

  useEffect(() => setRandomSearchLoading(false), [])

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md duration-200 sm:max-w-xl lg:max-w-2x"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
        <input type="text" ref={inputRef} className="flex-grow focus:outline-none"/>
        <BsFillMicFill className="text-lg"/>
      </form>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button className="btn" onClick={handleSubmit}>Google Search</button>
        <button
          onClick={randomSearch}
          disabled={randomSearchLoading}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {
            randomSearchLoading
              ? <img className="h-6 text-center" src="/spinner.svg" alt="loading..."/>
              : "I am Feeling Lucky"
          }
        </button>
      </div>
    </>
  )
}

export default HomeSearch
