'use client'
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Footer from "@/components/footer";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


import { IoSearchSharp } from "react-icons/io5";
import { FaAppleAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GiOrange, GiBananaBunch, GiStrawberry } from "react-icons/gi";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const FormSchema = z.object({
  palavras_chave: z.string().min(2, {}),
  type: z.enum(["Organica", "Fresca", "Vendas", "Desconto", "Expirada"], {
    required_error: "You need to select a notification type.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});


export default function Loja() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      palavras_chave: "",
    },
  });

  const Categorias = [
    {
      title: "Maçã",
      Icon: <FaAppleAlt />,
      number: "12",
    },
    {
      title: "Laranja",
      Icon: <GiOrange />,
      number: "34",
    },
    {
      title: "morango",
      Icon: <GiStrawberry />,
      number: "45",
    },
    {
      title: "Banana",
      Icon: <GiBananaBunch />,
      number: "66",
    },
    {
      title: "Abóbora",
      Icon: <IoSearchSharp />,
      number: "96",
    },
  ];

  const Produtosdestaque = [
    {
      nome: "Banana",
    },
    {
      nome: "Laranja",
    },
    {
      nome: "Abóbora",
    },
  ];

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Você enviou os seguintes valores", data)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-auto">
        <Footer title="Loja" />

        <div className="mt-44 w-full flex justify-center gap-8  ">
          <div className="w-[400px] ">
            <FormField
              control={form.control}
              name="palavras_chave"
              render={({ field }) => (
                <FormItem>

                  <FormControl>
                    <div className="flex items-center border-2 h-16 rounded-2xl">
                      <Input placeholder="palavras-chave" {...field} className="border-none !outline-none focus:!border-none h-[90%]" />
                      <div className="w-16 h-full flex items-center justify-center bg-slate-200 rounded-r-2xl">
                        <IoSearchSharp className="text-4xl text-slate-400" />
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="mt-3">
              <h5 className="text-2xl font-semibold py-7 text-slate-700">Categorias</h5>
              <div className="grid gap-4">
                {Categorias.map((item) => (
                  <div key={item.title} className="flex items-center justify-between ">
                    <Link href="#" className="flex items-center text-[#87ab45] hover:text-[#FFB524] text-xl gap-2">
                      {item.Icon}
                      {item.title}
                    </Link>
                    <span>({item.number})</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="h-44 ">
              <h1 className="text-2xl font-semibold py-7 text-slate-700 ">Preço</h1>
              <Slider defaultValue={[33]} max={500} step={1} className="text-[#87ab45] border-[#87ab45]" />
            </div>

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-2xl font-semibold py-7 text-slate-700 ">Produtos em destaque</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Organica" className="!text-[#87ab45] !border-[#FFB524] w-5 h-5" />
                        </FormControl>
                        <FormLabel className="font-normal text-xl text-slate-400">
                          Orgânica
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Fresca" className="!text-[#87ab45] !border-[#FFB524] w-5 h-5" />
                        </FormControl>
                        <FormLabel className="font-normal text-xl text-slate-400">
                          Fresca
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Vendas" className="!text-[#87ab45] !border-[#FFB524] w-5 h-5" />
                        </FormControl>
                        <FormLabel className="font-normal text-xl text-slate-400">Vendas</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Desconto" className="!text-[#87ab45] !border-[#FFB524] w-5 h-5" />
                        </FormControl>
                        <FormLabel className="font-normal text-xl text-slate-400">
                          Desconto
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Expirada" className="!text-[#87ab45] !border-[#FFB524] w-5 h-5" />
                        </FormControl>
                        <FormLabel className="font-normal text-xl text-slate-400">
                          Expirada
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <div className="mt-3">
              <h6 className="text-2xl font-semibold py-7 text-slate-700 ">Produtos em destaque</h6>
              <div className="grid gap-4">
                {Produtosdestaque.map((item) => (
                  <div key={item.nome} className="flex items-center">
                    <Image width={100} height={100} src="/img/featur-1.jpg" alt="imagem" className="object-cover" />
                    <div className="grid gap-2">
                      <span className="text-2xl ">{item.nome}</span>
                      <span className="flex text-[#FFB524]">
                        <FaStar className="w-5 h-5" />
                        <FaStar className="w-5 h-5" />
                        <FaStar className="w-5 h-5" />
                        <FaStar className="w-5 h-5" />
                        <FaStar className="w-5 h-5 text-slate-400" />
                      </span>
                      <div className="text-xl flex gap-2 ">
                        <span className="italic ">2.99 Kz</span>
                        <span className="text-red-400 decoration-inherit text-danger line-through italic">4.11 Kz</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="#" className="mt-10 border-2 border-[#FFB524] text-[#87ab45] hover:bg-[#FFB524] hover:text-white flex items-center justify-center gap-2 py-3 px-2 rounded-[50px] text-2xl">Ver Mais</Link>

            <div className="w-full h-auto rounded-2xl mt-10">
              <p className="text-[#FFB524] text-4xl font-bold absolute w-12 ml-[250px] mt-56">Frutas Frescas Banner</p>
              <Image width={400} height={400} src="/img/banner-fruits.jpg" alt="image" className="rounded-2xl" />
            </div>

          </div>

          <div className=" w-[1000px] border-2 ">

            <div className="flex items-center">
              <h6>Classificação padrão:</h6>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

        </div>

      </form>
    </Form>
  )
}