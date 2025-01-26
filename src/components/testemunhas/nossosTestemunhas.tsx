'use client' 
import React from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaStar, FaQuoteRight } from "react-icons/fa";

export default function NossosTestemunhas(){
    return (
        <div className="mt-44">
        <div className="flex flex-col items-center">
          <h1 className="text-[#81C408] font-semibold text-2xl">Nosso Testemunho</h1>
          <h2 className="text-slate-400 text-4xl font-extrabold">O que diz o nosso cliente!</h2>
        </div>
        <div className="w-full flex justify-center mt-20">
          <Carousel opts={{
            align: "start",
            loop: true,
          }}
            className="w-full max-w-[1500px] flex flex-col">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2 w-[1000px] flex items-center justify-center">
                  <div className="p-3">
                    <Card className="border-none w-[700px] h-[300px] ">
                      <CardContent className="flex  w-[700px] h-[300px] items-center justify-center ">
                        <div className=" w-full h-full rounded-2xl bg-slate-100 py-4 px-4">
                          <div className="border-b-2 border-[#FFB524] py-4 px-3 ">
                            <p className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ex, maxime labore facilis doloribus eum.</p>
                          </div>

                          <div className="flex items-center justify-between py-8">
                            <div className="flex items-center">
                              <Avatar className="w-[100px] h-[100px] object-cover rounded-3xl">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col px-4 gap-2">
                                <span className="font-semibold text-2xl">Nome do Cliente</span>
                                <span className="text-2xl">Profissão</span>
                                <span className="flex text-[#81C408]">
                                  <FaStar className="w-5 h-5" />
                                  <FaStar className="w-5 h-5" />
                                  <FaStar className="w-5 h-5" />
                                  <FaStar className="w-5 h-5" />
                                  <FaStar className="w-5 h-5" />
                                </span>
                              </div>
                            </div>
                            <span><FaQuoteRight className="text-[#FFB524] w-12 h-12" /></span>
                          </div>

                        </div>

                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[1270px] -top-8  -translate-y-1/2 w-20 h-12 border-[#FFB524] text-[#81C408] hover:bg-[#FFB524] hover:text-white duration-300 "/>
            <CarouselNext className="absolute right-14 -top-8  -translate-y-1/2 w-20 h-12 border-[#FFB524] text-[#81C408] hover:bg-[#FFB524] hover:text-white duration-300 "/>
          </Carousel>
        </div>
      </div>
    )
}