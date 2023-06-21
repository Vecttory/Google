"use client"

import { useState, useEffect } from "react"

const placeholder = "Placeholder"

const CountryLookup = () => {
  const [country, setCountry] = useState(placeholder)
  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setCountry(data.country)
      })
  }, [])

  return (
    <div className={`${country === placeholder && "bg-transparent text-transparent"} "border-b px-8 py-3 bg-[#f2f2f2] transition duration-300`}>{country}</div>
  )
}

export default CountryLookup
