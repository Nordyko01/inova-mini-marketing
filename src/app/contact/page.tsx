'use client'
import Link from "next/link";
import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import Navigations from "@/componentspage/navigations";
import Rodap from "@/componentspage/rodap";
import Footer from "@/componentspage/footer";


interface Props {
    id: string;
    icon: any;
    title: string;
    desc: string;
};

const Prop: Props[] = [
    {
        id: "01",
        title: "Endereço",
        desc: "Km 14B Viana-Vila",
        icon: <FaLocationDot className="w-8 h-8" />,
    },

    {
        id: "02",
        title: "Envie-nos um e-mail",
        desc: "cossengue2506@gmail.com",
        icon: <IoMdMail className="w-8 h-8" />,
    },

    {
        id: "03",
        title: "Telefone",
        desc: "(+244) 958007921",
        icon: <FaPhone className="w-8 h-8" />,
    }
]


export default function Contactos() {
    return (
        <>
            <div className="flex flex-col items-center">
                <Navigations />
                <Footer title="Cotactos"/>
                <div className="w-[1400px] bg-slate-200 h-[1300px] flex flex-col items-center justify-around mt-36">
                    <div className="flex flex-col text-center">
                        <h2 className="text-[#81C408] text-4xl">Entre em contato</h2>
                        <p className="w-[700px] py-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                        <Link href="#" className="text-[#81C408] text-2xl ">Baixe agora.</Link>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9684572064775!2d13.355972875764902!3d-8.88252459108315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f7d91c965d11%3A0xc5ddaaf4aa119027!2sCol%C3%A9gio%20Luvau&#39;s!5e0!3m2!1spt-PT!2sao!4v1733920852294!5m2!1spt-PT!2sao" width="1300" height="450" loading="lazy" className="rounded-xl"></iframe>

                    <div className="w-[1300px] h-[500px]  flex items-center justify-around">

                        <div className="w-[700px] h-full flex flex-col justify-around border-2  ">
                            <Input type="text" placeholder="Seu some" className="w-[700px] h-16 " />
                            <Input type="email" placeholder="Digite seu Email" className="w-[700px] h-16 " />
                            <Textarea placeholder="Sua mensagem" className="w-[700px] h-52" />
                            <Button variant="outline" className="w-[700px] h-16 ">Button</Button>

                        </div>

                        <div className="flex flex-col justify-around h-full ">
                            {Prop.map((Props) => (
                                <div key={Props.id} className="w-[500px] h-32 bg-white rounded-2xl px-4">
                                    <div className="flex items-start  mt-8">
                                        <div className="text-[#81C408] "> {Props.icon}</div>
                                        <div className="ml-6">

                                            <h3 className="text-3xl" >{Props.title}</h3>
                                            <span className="text-slate-400">{Props.desc} </span>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <Rodap />
            </div>
        </>
    )
}