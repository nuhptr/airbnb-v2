"use client"

type IHeadingProps = {
   title: string
   subtitle?: string
   center?: boolean
}

export default function Heading({ title, subtitle, center }: IHeadingProps) {
   return (
      <div className={center ? "text-center" : "text-start"}>
         <div className="text-2xl font-bold">{title}</div>
         <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
      </div>
   )
}
