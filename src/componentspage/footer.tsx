'use client'
import React from "react"
import Link from "next/link";
import Image from "next/image";

interface prop{
    title: string;
}

export default function Footer({title}:prop){
    return(
        <div className=" h-[140] w-full flex justify-center">
        <Image width={2000} height={100} src="/img/cart-page-header-img.jpg" alt="img" className="absolute opacity-80 h-[140px] object-cover" />
        <div className="z-30 relative flex flex-col items-center">
            <h1 className="text-white text-4xl ">{title}</h1>
            <div className="flex items-center">
                <Link href="." className="text-[#81C408] px-3">Casa  /</Link>
                <Link href="#" className="text-[#81C408] px-3">Páginas  /</Link>
                <p className="text-white">{title}</p>
            </div>
        </div>
    </div>
    )
}