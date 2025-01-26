'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineChevronRight } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

export default function ShippingMethods() {

  return (
    <div className="mt-[6%] flex justify-center">
      <div className=" w-[415px] h-[665.57px] top-[203.72px] left-[498px] rounded-xl py-11 px-[34px] gap-[10px] bg-white flex flex-col items-center justify-between">

        <Image width={207} height={153.67} src="/img/Logo-cpg.png" alt="Logo-cpg" className="object-cover" />
        <h1 className="text-2xl font-bold text-center">Precisa receber o código de outra forma?</h1>
        <span className="text-[#8B8D97] w-96 text-center">O seu número de telefone ou e-mail cadastrado são:
          *** *** *84****95@gmail.com</span>

        <div className="h-52 gap-[10px] flex flex-col justify-between items-center">

          <Link href="/login/otp" className="w-[356px] h-14 gap-[68px] flex items-center justify-around ">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="bg-[#3E6D9D] w-14 h-14 p-4 gap-[10px] rounded-full text-white flex items-center justify-center "> <AiOutlineMessage className="w-5 h-5" /> </div>
                <p className="ml-4">Enviar o código por SMS</p>
              </div>
              <HiOutlineChevronRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/login/otp" className="w-[356px] h-14 gap-[68px] flex items-center ">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="bg-[#3E6D9D] w-14 h-14 p-4 gap-[10px] rounded-full text-white flex items-center justify-center "> <FaWhatsapp className="w-5 h-5" /> </div>
                <span className="ml-4">Enviar o código via WhatsApp</span>
              </div>
              <HiOutlineChevronRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/login/otp" className="w-[356px] h-14 gap-[68px] flex items-center ">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="bg-[#3E6D9D] w-14 h-14 p-4 gap-[10px] rounded-full text-white flex items-center justify-center "> <MdAlternateEmail className="w-5 h-5" /> </div>
                <span className="ml-4">Enviar o código por E-mail</span>
              </div>
              <HiOutlineChevronRight className="w-4 h-4" />
            </div>
          </Link>

        </div>

      </div>
    </div>

  );

};
