'use client'
import React, { useState } from "react";
import Image from "next/image";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { MdAlternateEmail } from "react-icons/md";

export default function Password() {
  const [phone, setPhone] = useState(true);
  const [, setEmail] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);


  function Phone() {
    setPhone(true);
    setEmail(false);
  };

  function Email() {
    setEmail(true);
    setPhone(false);
  };

  return (
    <div className="mt-[6%] flex justify-center">
      <div className=" w-[395px] h-[531.57px] top-[246.22px] left-[498px] rounded-xl py-11 px-[34px] gap-[10px] bg-white flex flex-col items-center justify-between">

        <Image width={207} height={153.67} src="/img/Logo-cpg.png" alt="Logo-cpg" className="object-cover" />
        <h1 className="text-2xl font-bold">Recuperar Palavra passe</h1>
        <span className="text-[#8B8D97] text-center">Insira o número que utilizaste para se cadastrar</span>

        <div>

          {phone ?
            <div className="grid  w-[327px] items-center gap-1.5 ">
              <div className="flex items-center justify-between">
                <Label>Número de telefone</Label> <Button variant="outline" onClick={Email} className="border-none shadow-none text-[#A44035] hover:text-[#A44035] hover:bg-transparent duration-300">Entrar com e-mail</Button>
              </div>
              <PhoneInput
                containerClass=" w-[327px] h-[52px]  rounded-2xl px-3 !flex !justify-between "
                inputClass=" !h-[52px] !w-[300px] !ml-[30%] !rounded-2xl !pl-3  focus:!border-[#A44035]"
                buttonClass="!bg-transparent !w-[60px] !h-[52px] !rounded-2xl !pl-1 hover:!border-[#A44035] "
                country={'ao'}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true
                }}
              />
            </div>
            :
            <div className="grid  w-[327px] items-center gap-1.5">
              <div className="flex items-center justify-between">
                <Label>E-mail</Label> <Button variant="outline" onClick={Phone} className="border-none shadow-none text-[#A44035] hover:text-[#A44035] hover:bg-transparent duration-300">Entrar com número de telefone</Button>
              </div>
              <div className={`flex items-center w-[327px] h-[52px] border-[1px] rounded-2xl px-3 ${isFocused ? "border-[#A44035]" : "border-[#8B8D97]"
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={0}>
                <MdAlternateEmail className="w-[24px] h-[24px] text-[#8B8D97] " />
                <Input id="picture" type="email" placeholder="Insiraa seu e-mail" className="border-none   shadow-none focus-visible:ring-0 focus:!border-[#A44035]" />
              </div>
            </div>}

        </div>

        <Button variant="outline" onClick={() => window.location.href = "/recover/otp"} className="w-[301px] h-[52px] border-[1px] rounded-2xl text-white bg-[#A44035] hover:text-white hover:bg-[#A44035]  ">Recuperar</Button>


      </div>
    </div>
  );
}
