import Link from "next/link"
import Parser from "html-react-parser"
import PaginationButtons from "./PaginationButtons"

const WebSearchResults = ({ data }) => {
  return (
    <div className="w-full mx-auto px-3 pt-2 pb-4 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {data.searchInformation?.formattedTotalResults} results ({data.searchInformation?.formattedSearchTime} seconds)
      </p>
      {
        data.items?.map(result => (
          <div key={result.link} className="mb-8 max-w-xl">
            <div className="group flex flex-col">
              <Link href={result.link} className="text-sm truncate">
                {result.formattedUrl}
              </Link>
              <Link href={result.link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
                {result.title}
              </Link>
            </div>
            <p className="text-gray-600">
              {Parser(result.htmlSnippet)}
            </p>
          </div>
        ))
      }
      <PaginationButtons />
    </div>
  )
}

export default WebSearchResults
