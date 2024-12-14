'use client'
import React, { useState } from "react";

import Home from "./home/page";
import Navigations from "@/componentspage/navigations";
import Rodap from "@/componentspage/rodap";

export default function App() {
  return (
    <div>
      <Navigations/>
       <Home />
      <Rodap/>
     
    </div>
  );
}
