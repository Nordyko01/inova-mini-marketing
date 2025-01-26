'use client';
import Footer from "@/components/footer";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox"
import ProdutuLista from "@/components/checkout/produtuLista";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
const items = [
  {
    id: "Fretegratis",
    label: "Frete grátis",
  },
  {
    id: "Taxafixa",
    label: "Taxa fixa: 15000Kz",
  },
  {
    id: "Retiradalocal",
    label: "Retirada local: 8000Kz",
  },
] as const

const FormSchema = z.object({
  FirstName: z.string().min(5, {}),
  LastName: z.string().min(5, {}),
  CompanyName: z.string().min(5, {}),
  Endereco: z.string().min(5, {}),
  Cidade: z.string().min(4, {}),
  Country: z.string().min(2, {}),
  CEP: z.string().min(6, {}),
  Mobile: z.string().min(9, {}),
  email: z.string().min(10, {}),
  Createanaccount: z.boolean().default(false).optional(),
  Shiptoadifferentaddress: z.boolean().default(false).optional(),
  bio: z.string().max(160, {}),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {}),
  TransferenciaBancariaDireta: z.boolean().default(false).optional(),
  Verificarpagamentos: z.boolean().default(false).optional(),
  Pagamentonaentrega: z.boolean().default(false).optional(),
  Paypal: z.boolean().default(false).optional(),
});

export default function Confira() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      CompanyName: "",
      Endereco: "",
      Cidade: "",
      Country: "",
      CEP: "",
      Mobile: "",
      email: "",
      Createanaccount: true,
      Shiptoadifferentaddress: true,
      bio: "",
      items: ["Fretegratis", "Taxafixa",],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Você enviou os seguintes valores:", data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Footer title="Confira" />
        <div className="flex mt-32 w-full items-center justify-center">
          <div className="w-[75%] flex  justify-between gap-24">

            <div className="w-[800px] h-auto grid gap-4 text-slate-400">

              <div className="flex items-center justify-between ">

                <FormField
                  control={form.control}
                  name="FirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primeiro nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Primeiro nome" {...field} className="w-[380px] " />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="LastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input placeholder="Sobrenome" {...field} className="w-[380px] " />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="CompanyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>nome da empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="nome da empresa" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Endereco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
                    <FormControl>
                      <Input placeholder="Número da casa Nome da rua" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Cidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade/Cidade</FormLabel>
                    <FormControl>
                      <Input placeholder="Cidade/Cidade" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>País</FormLabel>
                    <FormControl>
                      <Input placeholder="País" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="CEP"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Código postal/CEP</FormLabel>
                    <FormControl>
                      <Input placeholder="Código postal/CEP" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="Número de Telefone" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço de email</FormLabel>
                    <FormControl>
                      <Input placeholder="Endereço de email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div>
                <FormField
                  control={form.control}
                  name="Createanaccount"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="!text-white !bg-[#81C408] "
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Criar uma conta?
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <div className="border-[1px] "></div>
                <FormField
                  control={form.control}
                  name="Shiptoadifferentaddress"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="!text-white !bg-[#81C408] "
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Enviar para um endereço diferente?
                        </FormLabel>
                      </div>
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
                        placeholder="Notas do pedido (opcional)"
                        className="resize-none h-[300px] "
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />


            </div>

            <div className="w-[600px] h-auto ">
              <ProdutuLista />

              <div className="border-b-[1px] border-t-[1px] w-full h-44 flex items-center justify-end  gap-7 text-slate-400">
                <span className="font-semibold text-xl">Subtotal</span><span className="border-t-[1px] border-b-[1px] py-5 text-xl">414.00Kz</span>
              </div>

              <div className="border-b-[1px] w-full h-44 flex items-center justify-center  gap-16 text-slate-400">
                <span className="font-semibold text-xl">Envio</span>
                <div className="">
                  <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                      <FormItem>
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-center space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      className="!text-white !bg-[#81C408] "
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item.id])
                                          : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-lg font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="border-b-[1px] border-t-[1px] w-full h-44 flex items-center justify-end  gap-80 text-slate-400">
                <span className="font-semibold text-xl">TOTAL</span><span className="border-t-[1px] border-b-[1px] py-5 text-xl">135000Kz</span>
              </div>

              <div className="border-b-[1px]  w-full h-44 flex flex-col items-start justify-center  gap-7  text-slate-400">
                <FormField
                  control={form.control}
                  name="TransferenciaBancariaDireta"
                  render={({ field }) => (
                    <FormItem className="flex  items-start space-x-3 space-y-0 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="!text-white !bg-[#81C408] "
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Transferência Bancária Direta
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <span className="">Faça seu pagamento diretamente em nossa conta bancária. Use seu Order ID como referência de pagamento. Seu pedido não será enviado até que os fundos sejam compensados ​​em nossa conta. </span>
              </div>

              <div className="border-b-[1px]  w-full h-24 flex flex-col items-start justify-center  gap-7  text-slate-400">
                <FormField
                  control={form.control}
                  name="Verificarpagamentos"
                  render={({ field }) => (
                    <FormItem className="flex  items-start space-x-3 space-y-0 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="!text-white !bg-[#81C408] "
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                        Verificar pagamentos
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="border-b-[1px]  w-full h-24 flex flex-col items-start justify-center  gap-7  text-slate-400">
                <FormField
                  control={form.control}
                  name="Pagamentonaentrega"
                  render={({ field }) => (
                    <FormItem className="flex  items-start space-x-3 space-y-0 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="!text-white !bg-[#81C408] "
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                        Pagamento na entrega
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="border-b-[1px]  w-full h-24 flex flex-col items-start justify-center  gap-7  text-slate-400">
                <FormField
                  control={form.control}
                  name="Paypal"
                  render={({ field }) => (
                    <FormItem className="flex  items-start space-x-3 space-y-0 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="!text-white !bg-[#81C408] "
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                        Paypal
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" variant="outline" className="w-full h-14 mt-8 text-xl text-[#81C408] border-[#FFB524] hover:text-white hover:bg-[#FFB524] ">fazer pedido</Button>
            </div>

          </div>
        </div>
      </form>
    </Form>
  )
};