'use client'

import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


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

export default function ProdutuLista() {
  return (
    <>
      <Table>        
        <TableHeader>
          <TableRow>
            <TableHead className="">Produtos</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialItems.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium"><Image width={100} height={100} src={item.src} alt={`${item.src}+nome `} className="rounded-full" /></TableCell>
              <TableCell>{item.Nome}</TableCell>
              <TableCell>{item.Preco}Kz</TableCell>     
              <TableCell className="text-right">3</TableCell>        
              <TableCell>{item.Total}Kz</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
};