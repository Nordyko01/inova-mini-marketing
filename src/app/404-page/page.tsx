'use client'
import Footer from "@/components/footer";
import Navigations from "@/components/navigations";
import Rodap from "@/components/rodap";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function page_404() {
    return (
        <>
            <Navigations />
            <Footer title="404 Error"/>
            <div className="flex items-center mt-[76px]">
                <Image width={1000} height={1000} src="/img/not_fond.png" alt="not-fond" className="object-cover " />

                <Link href="." className="flex items-center justify-center py-3 px-12 border-2 border-[#FFB524] text-slate-400 rounded-3xl font-bold hover:bg-[#FFB524] hover:text-white ">
                    Voltar para casa
                </Link>
            </div>
            <Rodap />
        </>

    )
}