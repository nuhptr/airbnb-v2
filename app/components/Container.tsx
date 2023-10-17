"use client"

type IPropsContainer = {
   children: React.ReactNode
}

export default function Container({ children }: IPropsContainer) {
   return <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2">{children}</div>
}
