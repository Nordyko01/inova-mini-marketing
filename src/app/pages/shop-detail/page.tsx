'use client'
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Produtos} from "@/components/home/produtos";
import CategoryProdutos from "@/components/home/categoryProdutos";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


export default function Shop_Detail() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Você enviou os seguintes valores", data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-auto">
                <Footer title="Detalhes da loja" />

                <div className="mt-44 w-full ">
                    <Produtos/>
                    <div ></div>
                    <div ></div>
                </div>
               <div className="flex justify-center w-full mt-20">
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
                                      <CategoryProdutos/>
                                    </CardContent>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="absolute left-[1450px] -top-8  -translate-y-1/2 w-20 h-12 border-[#FFB524] text-[#81C408] hover:bg-[#FFB524] hover:text-white duration-300 " />
                          <CarouselNext className="absolute right-14 -top-8  -translate-y-1/2 w-20 h-12 border-[#FFB524] text-[#81C408] hover:bg-[#FFB524] hover:text-white duration-300 " />
                        </Carousel>
                      </div>

            </form>
        </Form>
    );
};