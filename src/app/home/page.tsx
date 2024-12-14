'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { FaEnvelope, FaPhone, FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaUserAlt, FaCarSide, FaUserShield } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Produtos from "@/componentspage/home/produtos";

interface props {
    id: string;
    icon: any;
    title: string;
    descricao: string;
}

const minhasProps: props[] = [
    {
        id: "1",
        title: "Frete grátis",
        descricao: "Grátis para pedidos acima de $ 300",
        icon: <FaCarSide className="w-20 h-20" />,
    },
    {
        id: "2",
        title: "Pagamento de Segurança",
        descricao: "Pagamento de segurança 100%",
        icon: <FaUserShield className="w-20 h-20" />,
    },
    {
        id: "3",
        title: "Devolução em 30 dias",
        descricao: "Garantia de dinheiro de 30 dias",
        icon: <FaArrowRightArrowLeft className="w-20 h-20" />,
    },
    {
        id: "4",
        title: "Suporte 24/7",
        descricao: "Suporte sempre rápido",
        icon: <FaPhone className="w-20 h-20" />,
    },
]

interface pubprops {
    id: string;
    img: string;
    tipy: string;
    title: string;
    divpri: "border-[#FFB524]" | "border-[#81C408] " | "border-slate-600 ";
    classdiv1: "bg-[#FFB524]" | "bg-slate-600" | "bg-[#81C408]";
    classdiv2: "bg-[#FFB524]" | "bg-white" | "bg-[#81C408]";
    classtipy: string;
    classtitle: string;
}

const pubprop: pubprops[] = [
    {
        id: "1",
        img: "/img/featur-1.jpg",
        tipy: "Fresh apple ",
        title: "20%OFF ",
        divpri: "border-[#FFB524]",
        classdiv1: "bg-[#FFB524]",
        classdiv2: "bg-[#81C408]",
        classtipy: "text-white",
        classtitle: "",
    },
    {
        id: "2",
        img: "/img/featur-2.jpg",
        tipy: "frutas saborosas",
        title: "Entrega grátis",
        divpri: "border-slate-600 ",
        classdiv1: "bg-slate-600",
        classdiv2: "bg-white",
        classtipy: "text-[#81C408] ",
        classtitle: "",
    },
    {
        id: "3",
        img: "/img/featur-3.jpg",
        tipy: "Vegetal exótico",
        title: "30% de Discounto",
        divpri: "border-[#81C408] ",
        classdiv1: "bg-[#81C408]",
        classdiv2: "bg-[#FFB524]",
        classtipy: "text-white",
        classtitle: "",
    },
]

interface produto {
    id: string;
    descripition: "Vegetais" | "Frutais" | "pão" | "Carne";
}

const produtos: produto[] = [
    {
        id: "1",
        descripition: "Vegetais",
    },
    {
        id: "2",
        descripition: "Vegetais",
    },
    {
        id: "13",
        descripition: "Frutais",
    },
    {
        id: "14",
        descripition: "Frutais",
    },
    {
        id: "10",
        descripition: "pão",
    },
    {
        id: "11",
        descripition: "pão",
    },
    {
        id: "15",
        descripition: "Carne",
    },
    {
        id: "16",
        descripition: "Carne",
    },
]

export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );


    const [filtro, setFiltro] = useState<string>("Todos Produtos");

    const produtosFiltrados =
        filtro === "Todos Produtos"
            ? produtos
            : produtos.filter((produto) => produto.descripition === filtro);

    return (
        <div className="flex flex-col items-center  max-w-full ">

            <div className=" bg-cover bg-center w-full h-[450px] flex items-center justify-center" >
                <div className=" bg-cover bg-center w-full h-[450px] opacity-20 flex items-center justify-center" style={{ backgroundImage: "url('img/carrinho.jpg')" }}></div>

                <div className="absolute w-full h-80 flex items-center justify-center ">
                    <div className=" w-[900px] h-80 flex flex-col items-start justify-between">
                        <span className=" text-[#FFB524] text-3xl font-semibold " >100% Equipamentos eletrónicos</span>

                        <h1 className="text-[#81C408] text-6xl font-bold">Equipamentos eletrónicos, vegetais e frutas</h1>

                        <div className="flex w-[600px]  items-center space-x-2 border-2 bg-white rounded-[30px] border-[#FFB524]">
                            <Input type="text" placeholder="procurar" className="  h-16 border-none bg-transparent outline-none  focus-visible:border-none  " />
                            <Button type="submit" className="text-white bg-[#81C408] border-2 border-[#FFB524] hover:bg-[#FFB524] w-56 h-16 rounded-[30px] ">Subscribe</Button>
                        </div>
                    </div>

                    <div className=" ">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-[500px] h-80 rounded-2xl flex items-center justify-center"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}

                        >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1 text-white flex items-center justify-center ">
                                            <Link href="#" className="absolute w-32 h-14 rounded-xl bg-[#FFB524] text-white flex items-center justify-center text-2xl ">Frutas</Link>
                                            <Image width={500} height={320} src="/img/carrinho.jpg" alt="Logo" className="object-cover rounded-2xl" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 text-white bg-[#81C408] hover:bg-[#81C408] hover:text-white " />
                            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 text-white bg-[#81C408] hover:bg-[#81C408] hover:text-white " />
                        </Carousel>
                    </div>

                </div>

            </div>

            <div className="mt-44 grid grid-cols-4 gap-4 ">
                {minhasProps.map((props) => (
                    <div key={props.id} className="w-80 h-80 bg-slate-100 rounded-2xl  flex flex-col items-center justify-center">
                        <div className="bg-[#FFB524] w-36 h-36 rounded-full flex items-center justify-center text-white ">{props.icon}  </div>
                        <span className="py-4 text-2xl">{props.title}</span>
                        <span className="text-lg text-slate-400">{props.descricao}</span>
                    </div>
                ))}
            </div>

            <div className="mt-44">
                <div className="flex items-center justify-between w-[1500px] ">
                    <h2 className="text-4xl font-medium text-slate-600">Nossos Produtos Eletrónicos</h2>
                    <div className=" flex items-center justify-between w-[800px] ">
                        <Button onClick={() => setFiltro("Todos Produtos")} variant="outline" className={`${filtro ? "bg-[#FFB524] text-white" : "bg-slate-100 text-slate-600"}  border-none rounded-[20px] w-36 h-12   font-semibold`}>Todos Produtos</Button>
                        <Button onClick={() => setFiltro("Vegetais")} variant="outline" className="bg-slate-100 border-none rounded-[20px] w-36 h-12 text-slate-600 font-semibold">Vgetais</Button>
                        <Button onClick={() => setFiltro("Frutais")} variant="outline" className="bg-slate-100 border-none rounded-[20px] w-36 h-12 text-slate-600 font-semibold">Frutais</Button>
                        <Button onClick={() => setFiltro("pão")} variant="outline" className="bg-slate-100 border-none rounded-[20px] w-36 h-12 text-slate-600 font-semibold">Pão</Button>
                        <Button onClick={() => setFiltro("Carne")} variant="outline" className="bg-slate-100 border-none rounded-[20px] w-36 h-12 text-slate-600 font-semibold">Carne</Button>
                    </div>
                </div>

                <div className="mt-10">
                    <div className=" grid grid-cols-4 gap-2">
                        {produtosFiltrados.map((produto) => (
                            <div key={produto.id} className="rounded-3xl w-[350px] h-[500px] hover:shadow-3xl hover:shadow-slate-700 ">
                                <div>
                                    <p className="bg-[#FFB524] text-white  absolute py-2 px-4 rounded-xl ml-7 mt-4 ">{produto.descripition}</p>
                                    <Image width={100} height={100} src="/img/redfone.jpg" alt="computador" className="w-full h-[250px] object-cover  rounded-t-3xl  transform transition-transform duration-300 hover:scale-105" />
                                </div>

                                <div className="border-2 rounded-b-3xl border-[#FFB524] h-[250px] flex flex-col items-center justify-around ">
                                    <h2 className="text-2xl font-bold mt-4 text-slate-600">nome</h2>
                                    <span className="text-center text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum nisi voluptate! Magnam maiores.</span>
                                    <div className="flex items-center justify-between w-[90%] ">
                                        <span className="text-slate-600  text-xl">$4.99 / kg</span>
                                        <Link href="#" className="border-[1px] border-[#FFB524] text-[#87ab45] hover:bg-[#FFB524] hover:text-white  flex items-center py-4 px-4 rounded-3xl text-lg duration-300 "><BsBagFill className="  hover:text-[#87ab45] mr-3 " />adicionar ao cartão</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="mt-44 grid grid-cols-3 gap-3">
                {pubprop.map((pubprops) => (
                    <Link href="#" key={pubprops.id} className={`${pubprops.divpri} w-[480px] h-[500px] border-[1px]  rounded-3xl flex flex-col items-center `}>
                        <Image width={400} height={400} src={pubprops.img} alt="bnvgh" className="object-cover  " />
                        <div className=" w-full flex flex-col items-center relative ">
                            <div className={`${pubprops.classdiv1}  w-full h-[200px] rounded-b-3xl`}></div>
                            <div className={` ${pubprops.classdiv2} w-72 h-32  -mt-14 absolute  rounded-3xl flex flex-col items-center justify-center`}>
                                <span className={`${pubprops.classtipy}  text-2xl`}>{pubprops.tipy} </span>
                                <span className={`${pubprops.classtitle} text-slate-600 text-3xl font-bold`}>{pubprops.title} </span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

            <div className="mt-44 w-full flex flex-col items-start">
                <h4 className="font-bold text-6xl ml-40">Vegetais orgânicos frescos</h4>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="w-full max-w-[1560px] h-[510px] flex flex-col mt-10"
                >

                    {Array.from({ length: 8 }).map((_, index) => (
                        <SwiperSlide key={index} className="flex h-44">
                            <div
                                className="rounded-3xl w-[350px] h-[500px] hover:shadow-xl hover:shadow-slate-700"
                            >
                                <div>
                                    <span className="bg-[#87ab45] text-white absolute py-2 px-4 rounded-xl ml-52 mt-4">
                                        Eletrónicos
                                    </span>
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/img/redfone.jpg"
                                        alt="computador"
                                        className="w-full h-[250px] object-cover rounded-t-3xl"
                                    />
                                </div>
                                <div className="border-2 rounded-b-3xl border-[#FFB524] px-4 h-[250px] flex flex-col items-start justify-around">
                                    <h2 className="text-2xl font-bold mt-4 text-slate-600">nome</h2>
                                    <span className="text-start text-slate-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum nisi voluptate! Magnam maiores.
                                    </span>
                                    <div className="flex items-center justify-between w-[90%]">
                                        <span className="text-slate-600 text-xl">$4.99 / kg</span>
                                        <Link
                                            href="#"
                                            className="border-[1px] border-[#FFB524] text-[#87ab45] hover:bg-[#FFB524] hover:text-white flex items-center py-2 px-3 rounded-3xl text-lg duration-300"
                                        >
                                            <BsBagFill className="hover:text-[#87ab45] mr-3" />adicionar ao cartão
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <div className="bg-[#FFB524] w-full max-w-full h-[700px] mt-44 flex items-center justify-center">
                <div className="flex flex-col justify-between  w-[700px] h-[300px]  ">
                    <h1 className="text-6xl font-semibold text-white">Frutas exóticas frescas</h1>
                    <h2 className="text-6xl font-mono">Em nossa loja</h2>
                    <span className="flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptatem provident officia atque.O Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                    <Button variant="outline" className="w-36 h-16 border-2 border-white rounded-[30px] bg-transparent font-bold text-xl hover:bg-[#81C408] ">Comprar</Button>

                </div>

                <div>
                    <div className="w-36 h-36 bg-white rounded-full absolute z-30"></div>
                <Image width={600} height={800} src="/img/baner-1.png" alt="" className="object-cover relative"/> 
                </div>
            </div>

            <div className="mt-44">
                <h1>Produtos mais vendidos</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, Optio laudantium itaque harum adipisci quae.</span>
                <div ><Produtos/> </div>
                <div ></div>
            </div>


        </div>
    );
}