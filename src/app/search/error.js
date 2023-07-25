"use client"

import { useEffect } from "react"

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log({ error })
  }, [error])
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <h1 className="text-3xl">Something went wrong</h1>
      <button onClick={reset} className="my-4 text-blue-400">Try again</button>
    </div>
  )
}

export default Error
