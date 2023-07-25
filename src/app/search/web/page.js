import Link from "next/link"

const WebPage = async ({ searchParams }) => {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`)

  const data = await response.json()

  if (!response.ok) throw new Error("Something went wrong")

  const results = data.items

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center flex-1">
        <h1 className="text-3xl">No results found</h1>
        <p className="text-lg py-4">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div>
      {
        results && results.map((result, index) => (
          <h1 key={index}>
            {result.title}
          </h1>
        ))
      }
    </div>
  )
}

export default WebPage
