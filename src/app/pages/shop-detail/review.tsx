'use client'

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaStar} from "react-icons/fa";

const reviews =[
  {
    nome: "Jorge C. Nunes",
    classFaStar1: "",
    classFaStar2: "",
    classFaStar3: "",
    classFaStar4: "",
    classFaStar5: "text-slate-600",
  },
  {
    nome: "Margarida Cristovão",
    classFaStar1: "",
    classFaStar2: "",
    classFaStar3: "",
    classFaStar4: "text-slate-600",
    classFaStar5: "text-slate-600",
  },
]

export default function Review() {
  return (
    <>
   {reviews.map((item) =>(
     <div key={item.nome} className="flex items-center gap-5">
      <Avatar className="w-28 h-28">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="grid gap-3">
        <span className="text-slate-400">12 de abril de 2024</span>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-slate-500">{item.nome}</span>
          <span className="flex text-[#FFB524]">
            <FaStar className={`${item.classFaStar1} w-5 h-5`} />
            <FaStar className={`${item.classFaStar2} w-5 h-5`} />
            <FaStar className={`${item.classFaStar3} w-5 h-5`} />
            <FaStar className={`${item.classFaStar4} w-5 h-5`} />
            <FaStar className={`${item.classFaStar5} w-5 h-5`} />
          </span>
        </div>
        <p className="text-slate-400">O Lorem Ipsum gerado é, portanto, sempre livre de repetição, humor injetado, ou palavras não características, etc. Susp endisse ultricies nisi vel quam suscipit</p>
      </div>

    </div>
   ))}
    </>
  )
}