import type { Metadata } from "next"
import { Nunito } from "next/font/google"

import "./globals.css"

import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"

const font = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Airbnb | place to stay in the world",
   description: "AirBnB website for booking rooms and houses in the world",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={font.className} suppressHydrationWarning={true}>
            <ClientOnly>
               <RegisterModal />
               <Navbar />
            </ClientOnly>
            {children}
         </body>
      </html>
   )
}
