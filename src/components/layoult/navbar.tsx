'use client'
import React from "react"
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { PiMapPinFill, PiMagnifyingGlassBold } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";


export default function Navbar() {

  return (
      <div className="max-w-full w-screen h-fit sticky -top-16 bg-white z-50 flex flex-col items-center duration-300 "  >
        <div className="w-[1500px] h-16 rounded-full bg-[#81C408] flex items-center justify-between px-6 text-white">
          <div className="flex items-center justify-between w-[450px]">
            <Link href="#" className="flex items-center "><PiMapPinFill className="mr-3 text-[#FFB524] " /> Km 14b Rua, Ponte Partida</Link>
            <Link href="#" className="flex items-center"><FaEnvelope className="mr-3 text-[#FFB524] " /> cossengue@gmail.com</Link>
          </div>

          <div className="flex items-center justify-between  w-[480px]">
            <Link href="#" className="hover:text-[#FFB524] duration-300 ">Política de privacidade</Link>
            <span> /</span>
            <Link href="#" className="hover:text-[#FFB524] duration-300 ">Termos de uso</Link>
            <span> /</span>
            <Link href="#" className="hover:text-[#FFB524] duration-300 ">vendas e reembolsos</Link>

          </div>
        </div>

        <div className="w-[1500px] h-24 duration-500 bg-white  z-50 flex items-center justify-between " >
          <Image width={200} height={100} src="/img/Logo.png" alt="Logo da empresa" className="object-cover" />

          <div className="flex items-center justify-between  w-[470px]">

            <Link href="/pages/home" className="hover:text-[#81C408] text-[#81C408] text-xl border-none ">Casa</Link>
            <Link href="/pages/loja" className="hover:text-[#81C408] text-xl ">Loja</Link>
            <Link href="/pages/shop-detail" className="hover:text-[#81C408] text-xl ">Detales da Loja</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-[#81C408] text-xl flex items-center duration-300">Páginas</NavigationMenuTrigger>
                  <NavigationMenuContent className="grid w-[200px] gap-5 p-4 md:w-[200px] md:grid-cols-1 lg:w-[200px] bg-transparent ">
                    <NavigationMenuLink href="/pages/card" className="hover:bg-[#FFB524] ">Cartões</NavigationMenuLink>
                    <NavigationMenuLink href="/pages/checkout" className="hover:bg-[#FFB524] ">Confira</NavigationMenuLink>
                    <NavigationMenuLink href="/pages/testimonial" className="hover:bg-[#FFB524] ">Testemunhos</NavigationMenuLink>
                    <NavigationMenuLink href="/pages/404-page" className="hover:bg-[#FFB524] ">Página 404</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/pages/contact" className="hover:text-[#81C408] text-xl ">Contactos</Link>
          </div>

          <div className="flex items-center justify-between text-[#81C408] w-44 h-16 ">
            <AlertDialog >
              <AlertDialogTrigger className=" flex items-center justify-center rounded-full border-[1px] border-[#FFB524] hover:bg-[#FFB524] hover:text-[#81C408] w-12 h-12">
                <PiMagnifyingGlassBold className="w-6 h-7" />
              </AlertDialogTrigger>
              <AlertDialogContent className=" !w-full max-w-full h-full bg-white/60 border-none" >
                <AlertDialogFooter>
                  <div className=" flex justify-between w-full">
                    <AlertDialogTitle>Pesquisar por palavra-chave</AlertDialogTitle>
                    <AlertDialogCancel><AiOutlineClose className="" /></AlertDialogCancel>
                  </div>
                </AlertDialogFooter>
                <AlertDialogHeader className="flex items-center">
                  <div className="flex items-center w-4/5 h-[50px] bg-white rounded-lg">
                    <Input type="text" placeholder="Pesquisar" className="bg-transparent border-none" />
                    <div className="bg-slate-400/45 w-[50px] h-[50px] flex items-center justify-center rounded-r-lg">
                      <PiMagnifyingGlassBold className="w-6 h-7" />
                    </div>
                  </div>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
            <Link href="#"><BsBagFill className="w-8 h-8 hover:text-[#87ab45] " /></Link>
            <Link href="/login/login"><FaUserAlt className="w-8 h-8 hover:text-[#87ab45] " /></Link>

          </div>
        </div>

      </div>
  )
};