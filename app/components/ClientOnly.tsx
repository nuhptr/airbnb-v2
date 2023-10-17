// to avoid CSR issues with certain components

"use client"

import { useEffect, useState } from "react"

type IClientOnlyProps = {
   children: React.ReactNode
}

export default function ClientOnly({ children }: IClientOnlyProps) {
   const [hasMounted, setHasMounted] = useState(false)

   useEffect(() => {
      setHasMounted(true)
   }, [])

   if (!hasMounted) return null

   return <>{children}</>
}
