'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBagFill } from "react-icons/bs";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CategoryProdutos() {
  return (
    <>
      <Carousel opts={{
        align: "start",
        loop: true,
      }}
        className="w-full max-w-[90%] flex justify-center h-[510px]  ">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4 w-[1500px] flex items-center justify-center">
              <div className="p-3">
                <Card className=" w-[450px] h-[550px] border-none shadow-none">
                  <CardContent className="rounded-3xl w-[400px] h-[500px] hover:shadow-xl hover:shadow-slate-700">
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
                          <BsBagFill className="hover:text-[#87ab45] mr-3" />Add ao cartão
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[1450px] -top-8  -translate-y-1/2 w-20 h-12 border-[#FFB524] text-[#81C408] hover:bg-[#FFB524] hover:text-white duration-300 " />
        <CarouselNext className="absolute right-14 -top-8  -translate-y-1/2 w-20 h-12 border-[#FFB524] text-[#81C408] hover:bg-[#FFB524] hover:text-white duration-300 " />
      </Carousel>

    </>
  )
}