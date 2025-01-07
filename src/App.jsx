import Panel from "./components/BoxIzq";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

export default function App() {

  return(
    <div>
      <div className="flex">
        <Panel/>
        <Navbar/>
      </div>
    </div>
  );
}