"use client"

import { useCallback, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

import useRegistrationModal from "@/app/hooks/UseRegistrationModal"

import MenuItem from "./MenuItem"
import Avatar from "../Avatar"

export default function UserMenu() {
   const registerModal = useRegistrationModal()
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const toogleOpen = useCallback(() => {
      setIsOpen((value) => !value)
   }, [])

   return (
      <div className="relative">
         <div className="flex flex-row items-center gap-3">
            <div
               onClick={() => {}}
               className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-500">
               Airbnb your home
            </div>
            <div
               onClick={toogleOpen}
               className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
               <AiOutlineMenu />
               <div className="hidden md:block">
                  <Avatar />
               </div>
            </div>
         </div>

         {isOpen && (
            <div className="absolute shadow-md rounded-xl w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-13 text-sm">
               <div className="flex flex-col cursor-pointer">
                  <>
                     <MenuItem label="Login" onClick={() => {}} />
                     <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
                  </>
               </div>
            </div>
         )}
      </div>
   )
}
