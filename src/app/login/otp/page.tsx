'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";


export default function Otp() {
    return (
        <div className="mt-[6%] flex justify-center">
            <div className=" w-[569px] h-[769.57px] top-[179.22px] left-[498px] rounded-xl py-11 px-[34px] gap-[10px] bg-white flex flex-col items-center justify-between">

                <Image width={207} height={153.67} src="/img/Logo-cpg.png" alt="Logo-cpg" className="object-cover" />
                <h1 className="text-2xl font-bold">Insira o código que enviamos para você</h1>
                <span className="text-[#8B8D97] w-80 text-center">Enviamos um código de 6 digitos por whatsaapp para o número *** *** 000</span>


                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} className="w-[66px] h-[59px] rounded-xl bg-[#F8F9FB] border-none focus-visible:ring-0" />
                        <InputOTPSeparator className="text-transparent" />
                        <InputOTPSlot index={1} className="w-[66px] h-[59px] rounded-xl bg-[#F8F9FB] border-none focus-visible:ring-0" />
                        <InputOTPSeparator className="text-transparent" />
                        <InputOTPSlot index={2} className="w-[66px] h-[59px] rounded-xl bg-[#F8F9FB] border-none focus-visible:ring-0" />
                    </InputOTPGroup>
                    <InputOTPSeparator className="text-transparent" />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} className="w-[66px] h-[59px] rounded-xl bg-[#F8F9FB] border-none focus-visible:ring-0" />
                        <InputOTPSeparator className="text-transparent" />
                        <InputOTPSlot index={4} className="w-[66px] h-[59px] rounded-xl bg-[#F8F9FB] border-none focus-visible:ring-0" />
                        <InputOTPSeparator className="text-transparent" />
                        <InputOTPSlot index={5} className="w-[66px] h-[59px] rounded-xl bg-[#F8F9FB] border-none focus-visible:ring-0" />
                    </InputOTPGroup>
                </InputOTP>



                <Button variant="outline" className="w-[501px] h-[52px] border-[1px] rounded-2xl bg-[#A44035] text-white hover:text-white hover:bg-[#A44035]  ">Pronto</Button>

                <div>
                    02:39
                </div>

                <div>
                    <span className="text-[#8B8D97]">Não recebeu o código? </span>
                    <Link href="#" className="text-[#A44035] ">Reenviar</Link>
                </div>

            </div>
        </div>
    )
}