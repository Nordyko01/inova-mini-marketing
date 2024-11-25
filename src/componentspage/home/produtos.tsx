'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface produto {
    id: string;
}

const produtos: produto[] = [
    {
        id: "1"
    },
    {
        id: "2"
    },
    {
        id: "13"
    },
    {
        id: "14"
    },
    {
        id: "10"
    },
    {
        id: "11"
    },
    {
        id: "15"
    },
    {
        id: "16"
    },
]


import { BsBagFill } from "react-icons/bs";

export default function Produtos() {
    return (
        <div className=" grid grid-cols-4 gap-2">
            {produtos.map((produto) => (
                <div key={produto.id} className="rounded-3xl w-[350px] h-[500px] hover:shadow-xl hover:shadow-slate-700 ">
                    <div>
                        <span className="bg-[#FFB524] text-white  absolute py-2 px-4 rounded-xl ml-7 mt-4 ">Eletrónicos</span>
                        <Image width={100} height={100} src="/img/redfone.jpg" alt="computador" className="w-full h-[250px] object-cover  rounded-t-3xl " />
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
    )
}