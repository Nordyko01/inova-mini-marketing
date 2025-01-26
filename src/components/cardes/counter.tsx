'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

import { BsPlus } from "react-icons/bs";
import { VscDash } from "react-icons/vsc";

const Counter = () => {
    const [count, setCount] = useState<number>(1);

    const handleAdd = () => setCount(count + 1);

    const handleReduce = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
            <div className="flex items-center gap-2">
                <Button onClick={handleReduce} variant="outline" className='rounded-full bg-slate-100 w-[50px] h-[50px] '><VscDash /></Button>
                <span className="text-xl font-semibold">{count}</span>
                <Button onClick={handleAdd} variant="outline" className='rounded-full bg-slate-100 w-[50px] h-[50px] '><BsPlus /></Button>
            </div>
    );
};

export default Counter;
