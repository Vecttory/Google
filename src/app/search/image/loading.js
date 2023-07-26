import React from "react"

function ImageLoadingShape () {
  return (
    <div className="animate-pulse">
      <div className="h-48 w-full sm:w-48 mb-4 bg-gray-200 rounded-md">
      </div>
      <div className="h-2 w-[70%] sm:w-48 mb-2.5  bg-gray-200 rounded-md">
      </div>
      <div className="h-2 w-[50%] sm:w-44 mb-2.5  bg-gray-200 rounded-md">
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42">
      <ImageLoadingShape />
      <div className="hidden sm:inline-flex sm:space-x-4">
        <ImageLoadingShape />
        <ImageLoadingShape />
      </div>
    </div>
  )
}

export default Loading
