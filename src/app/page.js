import HomeHeader from "@/components/HomeHeader"
import HomeSearch from "@/components/HomeSearch"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function Home () {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <HomeHeader />
      <div className="flex flex-col items-center flex-1 justify-center">
        <Image
          priority
          width={300}
          height={100}
          alt="Google logo"
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"}
        />
        <HomeSearch/>
      </div>
      <Footer />
    </div>
  )
}
