"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { BiDollar } from "react-icons/bi"

type IInputProps = {
   id: string
   label: string
   type?: React.HTMLInputTypeAttribute
   disabled?: boolean
   formatPrice?: boolean
   required?: boolean
   register: UseFormRegister<FieldValues>
   errors: FieldErrors
}

export default function Input({
   id,
   label,
   type,
   disabled,
   formatPrice,
   required,
   register,
   errors,
}: IInputProps) {
   return (
      <div className="relative w-full">
         {formatPrice && <BiDollar size={24} className="absolute top-5 left-2 text-neutral-700" />}
         <input
            id={id}
            disabled={disabled}
            {...register(id, { required })}
            placeholder=""
            type={type}
            className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
            ${formatPrice ? "pl-9" : "pl-4"}
            ${errors[id] ? "border-red-500" : "border-neutral-200"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
         />
         <label
            htmlFor=""
            className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 
            ${formatPrice ? "left-9" : "left-4"}
            ${errors[id] ? "text-rose-500" : "text-zinc-400"}`}>
            {label}
         </label>
      </div>
   )
}
