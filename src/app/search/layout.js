import Footer from "@/components/Footer"
import SearchHeader from "@/components/SearchHeader"

export default function SearchLayout ({ children }) {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <SearchHeader />
      {children}
      <Footer />
    </div>
  )
}
