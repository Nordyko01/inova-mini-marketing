'use client'
import CardsTotal from "@/components/cardes/cardtotal";
import ProdutList from "@/components/cardes/produtList";
import Footer from "@/components/footer";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";

const FormSchema = z.object({
  username: z.string().min(2, {}),
})




export default function Cards() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Você enviou os seguintes valores:", data)
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Footer title="Cartões" />

        <div className="mt-36 flex justify-center">

          <div className="w-4/5">
            <ProdutList />
            <div className="flex items-center gap-6 mt-16">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="código de cupom" {...field} className="w-52 h-16 border-none shadow-sm shadow-black" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="outline" type="submit" className="w-48 h-16 rounded-[50px] text-[#81C408] border-[#FFB524] ">Aplicar cupom</Button>
            </div>

          </div>

        </div>

        <div className="flex justify-end w-full pr-[190px] ">
          <CardsTotal />
        </div>
      </form>
    </Form>
  )
}