'use client'

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { AiOutlineClose } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Counter from "./counter";


const initialItems = [
  {
    id: "1",
    src: "/img/vegetable-item-3.png",
    Preco: 600,
    Total: 1200,
    Nome: "Banana Grande",
    Quantity: 2,

  },
  {
    id: "2",
    src: "/img/vegetable-item-5.jpg",
    Preco: 600,
    Total: 1200,
    Nome: "Batatas",
    Quantity: 2,

  },
  {
    id: "3",
    src: "/img/vegetable-item-2.jpg",
    Preco: 600,
    Total: 1200,
    Nome: "Brocoli Incrível",
    Quantity: 2,

  },
];

export default function ProdutList() {
  const [items, setItems] = useState(initialItems);

  // Função para excluir item da lista
  const handleDelete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Produtos</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium"><Image width={100} height={100} src={item.src} alt={`${item.src}+nome `} className="rounded-full" /></TableCell>
              <TableCell>{item.Nome}</TableCell>
              <TableCell>{item.Preco}Kz</TableCell>
              <TableCell>
                <Counter/>
                </TableCell>
              <TableCell>{item.Total}Kz</TableCell>
              <TableCell className="text-right"><Button onClick={() => handleDelete(index)} variant="outline" className="rounded-full text-red-400  bg-slate-100 w-[50px] h-[50px] "><AiOutlineClose /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
};