import HomeHeader from "@/components/HomeHeader"
import HomeSearch from "@/components/HomeSearch"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function Home () {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <HomeHeader />
      <div className="flex flex-col items-center flex-1 justify-center">
        <div className="relative">
          <Image
            priority
            width={300}
            height={100}
            alt="Google logo"
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"}
          />
          <div className="absolute hidden sm:inline-block right-0 top-0 text-gray-500">Clone</div>
        </div>
        <HomeSearch/>
      </div>
      <Footer />
    </div>
  )
}
