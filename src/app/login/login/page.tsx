'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
  const [phone, setPhone] = useState(true);
  const [, setEmail] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handlePass = () => setPassFocused(true);
  const handlered = () => setPassFocused(false);

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
      <div className="w-[395px] h-[665.57px] top-[179.22px] left-[498px] rounded-xl py-11 px-[34px] gap-[10px] bg-white flex flex-col items-center justify-between">

        <Image width={207} height={153.67} src="/img/Logo-cpg.png" alt="Logo-cpg" className="object-cover" />
        <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
        <span className="text-[#8B8D97]">Iniciar sessão na sua conta</span>

        <div>

          {phone ?
            <div className="grid  w-[327px] items-center gap-1.5 ">
              <div className="flex items-center justify-between">
                <Label>Número de telefone</Label> <Button variant="outline" onClick={Email} className="border-none shadow-none text-[#A44035] hover:text-[#A44035] hover:bg-transparent  duration-300">Entrar com e-mail</Button>
              </div>
              <PhoneInput
                containerClass=" w-[327px] h-[52px]  rounded-2xl px-3 !flex !justify-between "
                inputClass=" !h-[52px] !w-[220px] !ml-[30%] !rounded-2xl !pl-3 focus:!border-[#A44035] "
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
              <div
                className={`flex items-center w-[327px] h-[52px] border-[1px] rounded-2xl px-3 ${isFocused ? "border-[#A44035]" : "border-[#8B8D97]"
                  }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={0}
              >
                <MdAlternateEmail className="w-[24px] h-[24px] text-[#8B8D97]" />
                <Input type="email" placeholder="Insiraa seu e-mail" className="border-none   shadow-none focus-visible:ring-0  " />
              </div>
            </div>}

        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Palavra passe</Label>
          <div className={`flex items-center w-[327px] h-[52px] border-[1px] rounded-2xl px-3 ${passFocused ? "border-[#A44035]" : "border-[#8B8D97]"
            }`}
            onFocus={handlePass}
            onBlur={handlered}
            tabIndex={0}>
            <RiLockPasswordLine className="w-[24px] h-[24px] text-[#8B8D97] " />
            <Input type="text" placeholder="Inserir palavra passe" className="h-[52px]  border-none   shadow-none focus:!border-none focus-visible:ring-0" />
          </div>
        </div>

        <div>
          <span className="text-[#8B8D97]">Esqueceu sua palaavra passe? </span>
          <Link href="/recover/password" className="text-[#A44035] ">Recuperar</Link>

          <AlertDialog>
            <AlertDialogTrigger className="w-[327px] h-[52px] border-[1px] rounded-2xl bg-[#A44035] text-white mt-3 hover:text-white hover:bg-[#A44035]">Entrar</AlertDialogTrigger>
            <AlertDialogContent className="w-[443px] h-[310px] flex flex-col items-center">
              <AlertDialogHeader className="flex flex-col items-center justify-between">
                <AlertDialogTitle>Estamos aguardando a sua resposta</AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col items-center justify-between">
                  <span className="w-72 text-center"> Aprove este acesso abrindo o aplicativo da CPJ e clicando em “Sim, sou eu”</span>
                  <Image width={53.33} height={53.33} src="/img/Loading.svg" alt="svg" className="animate-spin py-6 " />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button variant="outline" onClick={() => window.location.href = "/login/shippingmethods"} className="text-[#A44035] border-none shadow-none hover:text-[#A44035] hover:bg-transparent  ">Não recebi um pedido de aprovação</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>



        </div>
      </div>
    </div>
  );
}
