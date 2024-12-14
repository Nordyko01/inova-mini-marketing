'use client'
import React, { useState } from "react";

import Home from "./home/page";
import Navigations from "@/components/navigations";
import Rodap from "@/components/rodap";

export default function App() {
  return (
    <div>
      <Navigations/>
       <Home />
      <Rodap/>
     
    </div>
  );
}
