"use client"

import Image from "next/image"

export default function Avatar() {
   return (
      <Image
         src="/airbnb-placeholder.jpg"
         alt="Avatar"
         height={30}
         width={30}
         className="rounded-full"
      />
   )
}
