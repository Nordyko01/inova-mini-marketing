'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

export default function Star() {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleClick = (index: number) => {
    setSelectedStars(index + 1);
  };

  return (
    <>
      <span className="flex items-center">
        {[0, 1, 2, 3, 4].map((index) => (
          <Button
            key={index}
            onClick={() => handleClick(index)}
            variant="outline"
            className={`border-none ${selectedStars > index ? "text-[#FFB524] hover:text-[#FFB524]" : ""} w-5 h-5`}
          >
            <FaStar className="w-5 h-5" />
          </Button>
        ))}
      </span>
    </>
  );
};
