'use client'
import React, { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";
import CategoryProdutos from "@/components/home/categoryProdutos";
import Image from "next/image";
import { BsBagFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import Counter from "@/components/cardes/counter";
import { FaStar } from "react-icons/fa";
import Tabledescription from "@/components/shop-detail/tabledescription";
import Review from "../../../components/shop-detail/review";
import Star from "@/components/shop-detail/star";
import { FaAppleAlt } from "react-icons/fa";
import { GiOrange, GiBananaBunch, GiStrawberry } from "react-icons/gi";

const FormSchema = z.object({
  username: z.string().min(2, {}),
  email: z.string().min(2, {}),
  palavras_chave: z.string().min(2, {}),
  bio: z
    .string().max(160, {}),
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

const Produtosdestaque =[
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
  {
    nome: "Abóbora",
  },
  {
    nome: "morango",
  },
  {
    nome: "Maçã",
  },
];


export default function Shop_Detail() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      palavras_chave: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Você enviou os seguintes valores", data)
  };

  const [description, setDescription] = useState(true);
  const [reviews, setReviews] = useState(false);

  function Description() {
    setDescription(true);
    setReviews(false);
  };
  function Reviews() {
    setReviews(true);
    setDescription(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-auto">
        <Footer title="Detalhes da loja" />

        <div className="mt-44 w-full flex justify-center gap-8  ">

          <div className=" w-[1000px] ">

            <div className="flex gap-8">
              <div className="border-2 w-[500px] rounded-xl">
                <Image width={500} height={700} src="/img/single-item.jpg" alt="imagem" className="object-cover" />
              </div>

              <div className="flex flex-col justify-between items-start">
                <h1 className="text-2xl font-bold text-slate-600">Brócolis</h1>
                <div className="text-slate-400 flex gap-3">
                  <span>Categoria:</span>
                  <span>Vegetais</span>
                </div>
                <div className="text-slate-400 text-2xl font-bold">3035 Kz</div>
                <span className="flex text-[#FFB524]">
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5 text-slate-500" />
                </span>
                <p className="w-[450px] grid gap-4 text-slate-400">
                  <span>O Lorem Ipsum gerado é, portanto, sempre livre de repetições, humor injetado, palavras não características, etc.</span>
                  <span>Susp endisse ultricies nisi vel quam suscipit. Linguado pavão dente-de-sabre; peixe-machado de lúcio-de-corrente, peixe-lápis, peixe-caracol</span>
                </p>
                <Counter />
                <Link
                  href="#"
                  className="border-[1px] border-[#FFB524] text-[#87ab45] hover:bg-[#FFB524] hover:text-white flex items-center py-2 px-3 rounded-3xl text-lg duration-300"
                >
                  <BsBagFill className="hover:text-[#87ab45] mr-3" />Add ao cartão
                </Link>
              </div>
            </div>

            <div className="mt-16">

              <div className="border-b-2">
                <div className="flex">
                  <Button onClick={Description} variant="outline" className={` border-none hover:bg-white  ${description ? "" : "text-[#87ab45]"}  `}>Descrição</Button>
                  <Button onClick={Reviews} variant="outline" className={` border-none hover:bg-white ${reviews ? "" : "text-[#87ab45]"}`}>Avaliações</Button>
                </div>
                <div className="flex ">
                  <div className={`z-32 w-[87px] ${description ? "border-b-[2px] border-[#FFB524]" : ""}`}></div>
                  <div className={`z-32  w-[87px] ${reviews ? "border-b-[2px] border-[#FFB524]" : ""}`}></div>
                </div>
              </div>


              <div className="">
                {description && <div className="w-full grid gap-9  mt-5 ">
                  <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ratione commodi corporis inventore ducimus facere unde excepturi voluptatibus soluta facilis harum deserunt reprehenderit quaerat et, quia iste repellendus aspernatur! Aliquam.</p>
                  <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis distinctio repellendus unde? Eius praesentium fugiat unde tempore, quia a aspernatur iusto ad quo quae quibusdam. Suscipit voluptate doloremque fuga dolorum?</p>
                  <Tabledescription />
                </div>}

                {reviews && <div className="w-full  mt-5 grid gap-5">
                  <Review />
                </div>}
              </div>

            </div>

            <div className="w-full mt-16 gap-4 grid">

              <h1 className="font-semibold text-3xl py-8">Deixe uma resposta</h1>

              <div className="flex items-center justify-between ">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu Nome" {...field} className="border-none shadow-sm shadow-black w-[470px]  " />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu e-mail" {...field} className="border-none shadow-sm shadow-black w-[470px] " />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Suas avaliações"
                        className="resize-none border-none shadow-sm shadow-black h-[200px] "
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between mt-20">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 text-xl">Please rate:</span>
                  <Star />
                </div>
                <Button type="submit" variant="outline" className="w-56 h-16 rounded-3xl text-xl text-[#87ab45] border-[#FFB524] hover:text-white hover:bg-[#FFB524] ">Postar comentário</Button>
              </div>

            </div>

          </div>

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
              <h5 className="text-2xl font-semibold py-7">Categorias</h5>
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

            <div className="mt-3">
              <h6 className="text-2xl font-semibold py-7">Produtos em destaque</h6>
              <div className="grid gap-4">
               {Produtosdestaque.map((item) =>(
                 <div key={item.nome} className="flex items-center">
                  <Image width={100} height={100} src="/img/featur-1.jpg" alt="imagem" className="object-cover"/>
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
                <Image width={400} height={400} src="/img/banner-fruits.jpg" alt="image" className="rounded-2xl"/>
               </div>

          </div>

        </div>

        <div className="flex justify-center w-full mt-20">
          <CategoryProdutos />
        </div>

      </form>
    </Form>
  );
};