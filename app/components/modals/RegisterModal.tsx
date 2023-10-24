"use client"

import axios from "axios"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react"
import { FieldValues, useForm, SubmitHandler } from "react-hook-form"

import useRegistrationModal from "@/app/hooks/useRegistrationModal"

import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../Input"

export default function RegisterModal() {
   const registerModal = useRegistrationModal()
   const [isLoading, setIsLoading] = useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({ defaultValues: { name: "", email: "", password: "" } })

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true)

      axios
         .post("/api/register", data)
         .then(() => registerModal.onClose)
         .catch((error) => console.error(error))
         .finally(() => setIsLoading(false))
   }

   const bodyContent = (
      <div className="flex flex-col gap-4">
         <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
         <Input
            id="email"
            label="Email"
            type="email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
         />
         <Input id="name" label="Name" type="text" disabled={isLoading} register={register} errors={errors} required />
         <Input
            id="password"
            label="Password"
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
         />
      </div>
   )

   return (
      <Modal
         disabled={isLoading}
         isOpen={registerModal.isOpen}
         title="Register"
         actionLabel="Continue"
         onSubmit={handleSubmit(onSubmit)}
         onClose={registerModal.onClose}
         body={bodyContent}
      />
   )
}
