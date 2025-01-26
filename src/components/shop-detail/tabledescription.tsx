'use client'

import React from "react";

export default function Tabledescription() {
  return (
    <div className="text-slate-400">
      <div className="bg-slate-200 h-10 w-96 flex items-center justify-between px-8">
        <span>Peso</span>
        <span>1Kg</span>
      </div>
      <div className="h-10 w-96 bg-white flex items-center justify-between px-8">
        <span>País de origem</span>
        <span>Fazenda Agropecuária</span>
      </div>
      <div className="bg-slate-200 h-10 w-96 flex items-center justify-between px-8">
        <span>Qualidade</span>
        <span>Orgânica</span>
      </div>
      <div className="h-10 w-96 bg-white flex items-center justify-between px-8">
        <span>Cheque</span>
        <span>Saudável</span>
      </div>
      <div className="bg-slate-200 h-10 w-96 flex items-center justify-between px-8">
        <span>Peso mínimo</span>
        <span>25Kg</span>
      </div>
    </div>
  )
}