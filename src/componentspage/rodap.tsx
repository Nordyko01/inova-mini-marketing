'use client'
import React from "react"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";


export default function Rodap() {
    return (
        <>
            <div className="h-[200px] "></div>
            <div className="bg-[#45595b] h-[600px] w-full flex items-center justify-center ">
                <div className="w-[1500px] h-4/5 ">

                    <div className="flex items-center justify-between">

                        <Link href="#" className="h-44">
                            <Image width={200} height={100} src="/img/Logo.png" alt="Logo da empresa" className="object-cover" />
                        </Link>

                        <div className="flex w-[600px]  items-center space-x-2 border-2 bg-white rounded-[30px] ">
                            <Input type="email" placeholder="Seu Email" className="  h-16 border-none bg-transparent outline-none  focus-visible:border-none  " />
                            <Button type="submit" className="text-white bg-[#81C408] border-2 border-[#FFB524] hover:bg-[#FFB524] w-56 h-16 rounded-[30px] ">Subscribe</Button>
                        </div>

                        <div className=" flex items-center justify-between w-[220px] ">
                            <Link href="#" className="text-[#FFB524] w-12 h-12 py-4 px-4 rounded-full border-[1px] border-[#FFB524] flex items-center justify-center hover:text-black hover:bg-[#FFB524] duration-300 "><FaTwitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-[#FFB524] w-12 h-12 py-4 px-4 rounded-full border-[1px] border-[#FFB524] flex items-center justify-center hover:text-black hover:bg-[#FFB524] duration-300 "><LiaFacebookF className="w-5 h-5" /></Link>
                            <Link href="#" className="text-[#FFB524] w-12 h-12 py-4 px-4 rounded-full border-[1px] border-[#FFB524] flex items-center justify-center hover:text-black hover:bg-[#FFB524] duration-300 "><FaYoutube className="w-5 h-5" /></Link>
                            <Link href="#" className="text-[#FFB524] w-12 h-12 py-4 px-4 rounded-full border-[1px] border-[#FFB524] flex items-center justify-center hover:text-black hover:bg-[#FFB524] duration-300 "><FaLinkedinIn className="w-5 h-5" /></Link>
                        </div>

                    </div>
                    <div className="  border-[0.5px] border-[#FFB524] "></div>

                    <div className="flex items-start justify-between mt-8">
                        <div>
                            <span className="text-white font-bold text-3xl mb-8">Por que as pessoas gostam de nós!</span>
                            <ul className="text-slate-300 grid grid-cols-1 gap-4">
                                <li>composição tipográfica, permanecendo essencialmente</li>
                                <li>inalterado. Foi popularizado no</li>
                                <li>Década de 1960 com o Aldus PageMaker</li>
                                <li>incluindo o Lorem Ipsum.</li>
                            </ul>
                            <Button variant="outline" className="bg-transparent rounded-3xl w-36 h-12 border-[#FFB524] text-[#81C408] mt-4 hover:bg-[#FFB524] hover:text-white text-xl ">Ler mais</Button>
                        </div>

                        <div>
                            <span className="text-white font-bold text-3xl">Informações da loja</span>
                            <ul className="grid grid-cols-1 gap-4">
                                <li><Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">Sobre Nós</Link></li>
                                <li><Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">Contate-nos</Link></li>
                                <li><Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">política de Privacidade</Link></li>
                                <li><Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">Termos e condições</Link></li>
                                <li><Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">Política de devolução</Link></li>
                                <li><Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">FAQs e ajuda</Link></li>
                            </ul>
                        </div>

                        <div>
                            <span className="text-white font-bold text-3xl">conta</span>
                            <ul className="grid grid-cols-1 gap-4">
                                <li> <Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">Minha Conta</Link></li>
                                <li> <Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">Detalhes da loja</Link></li>
                                <li> <Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">Cartão de compras</Link></li>
                                <li> <Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">lista de desejos</Link></li>
                                <li> <Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">histórico de pedidos</Link></li>
                                <li> <Link href="#" className="text-slate-300 hover:text-[#FFB524] duration-300 ">pedidos internacionais</Link></li>
                            </ul>
                        </div>

                        <div>
                            <span className="text-white font-bold text-3xl">Contactos</span>
                            <ul className="text-slate-300 grid grid-cols-1 gap-4">
                                <li>Address: 1429 Netus Rd, NY 48247</li>
                                <li>Email: cossengue2506@gmail.com</li>
                                <li>Phone: +244 958007921</li>
                                <li>Payment Accepted</li>
                                <li>
                                    <Image width={200} height={100} src="/img/payment.png" alt="Payment" className="object-cover" /></li>
                            </ul>
                        </div>
                    </div>

                    <div ></div>

                </div>
            </div>
        </>
    )
}