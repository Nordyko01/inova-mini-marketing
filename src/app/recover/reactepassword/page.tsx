'use client'
import React, { useState } from "react";
import Image from "next/image";


import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { RiLockPasswordLine } from "react-icons/ri";


export default function ReactPassword() {
  const [isFocused, setIsFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handlePass = () => setPassFocused(true);
  const handlered = () => setPassFocused(false);
  return (
    <div className="mt-[6%] flex justify-center">
      <div className=" w-[395px] h-[665.57px] top-[179.22px] left-[498px] rounded-xl py-11 px-[34px] gap-[10px] bg-white flex flex-col items-center justify-between">

        <Image width={207} height={153.67} src="/img/Logo-cpg.png" alt="Logo-cpg" className="object-cover" />
        <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
        <span className="text-[#8B8D97]">Iniciar sessão na sua conta</span>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Palavra passe</Label>
          <div className={`flex items-center w-[327px] h-[52px] border-[1px] rounded-2xl px-3 ${isFocused ? "border-[#A44035]" : "border-[#8B8D97]"
            }`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={0}>
            <RiLockPasswordLine className="w-[24px] h-[24px] text-[#8B8D97] " />
            <Input id="picture" type="text" placeholder="Inserir palavra passe" className="border-none   shadow-none focus-visible:ring-0" />
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Repetir Palavra Passe</Label>
          <div className={`flex items-center w-[327px] h-[52px] border-[1px] rounded-2xl px-3 ${passFocused ? "border-[#A44035]" : "border-[#8B8D97]"
            }`}
            onFocus={handlePass}
            onBlur={handlered}
            tabIndex={0}>
            <RiLockPasswordLine className="w-[24px] h-[24px] text-[#8B8D97] " />
            <Input id="picture" type="text" placeholder="Inserir palavra passe" className="border-none   shadow-none focus-visible:ring-0" />
          </div>
        </div>

        <Button variant="outline" className="w-[327px] h-[52px] border-[1px] rounded-2xl bg-[#A44035] text-white hover:text-white hover:bg-[#A44035] ">Concluir</Button>

      </div>
    </div>
  )
}