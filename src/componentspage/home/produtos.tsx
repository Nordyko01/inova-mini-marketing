'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


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
]


import { BsBagFill } from "react-icons/bs";

export default function Produtos() {
    return (
        <div className=" grid grid-cols-3 gap-2">
            {produtos.map((produto) => (
                <div key={produto.id} className="flex items-center justify-around rounded-3xl w-[500px] h-[380px] bg-black border-2">
                        <Image width={100} height={100} src="/img/redfone.jpg" alt="computador" className="w-[200px] h-[200px] rounded-full object-cover flex" />

                    <div className=" flex flex-col items-start justify-between -ml-8 h-48 border-2 ">
                        <h2 className="text-2xl font-bold mt-4 text-slate-600">nome</h2>
                        <div className="flex text-center text-[#81C408]"><FaStar /><FaStar /><FaStar /><FaStar /> <FaRegStar /></div>
                            <span className="text-slate-600  text-xl">$4.99 / kg</span>
                            <Link href="#" className="border-[1px] border-[#FFB524] text-[#87ab45] hover:bg-[#FFB524] hover:text-white  flex items-center py-2 px-3 rounded-3xl text-lg duration-300 "><BsBagFill className="  hover:text-[#87ab45] mr-3 " />adicionar ao carrinho</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}