'use client'

import React from "react";
import { Button } from "@/components/ui/button";

export default function CardsTotal() {
    return (
        <div className="w-[400px] h-[400px] rounded-xl bg-slate-200 gap-6 py-6  flex flex-col">
            <h1 className=" px-4 font-bold text-4xl"> Total do carrinhol</h1>

            <div className="px-4">
                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold ">Subtotal:</span>
                    <span className=" text-slate-500">$96.00</span>
                </div>
                <div className="flex items-start justify-between">
                    <span className="text-xl font-semibold ">Envio</span>
                    <span className="flex flex-col items-end text-slate-500">
                       <span>Flat rate: $3.00</span>
                       <span>Shipping to Ukraine.</span>                         
                    </span>
                </div>
            </div>
            <div className="border-t-2 border-b-2 border-slate-500 h-20 flex items-center justify-between px-4">
                <span className="text-xl font-semibold ">Total</span><span className=" text-slate-500">$99.00</span>
            </div>

            <Button variant="outline" className="w-56 h-16 rounded-[50px] text-[#81C408] border-[#FFB524] ml-4  hover:bg-[#FFB524] hover:text-white ">Prosseguir com o checkout</Button>

        </div>
    )
}