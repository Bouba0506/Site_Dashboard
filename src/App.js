import React from "react"; 
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Home } from "./Components/Home/Home";
import { Listing } from "./Components/Listing/Listing";
import { Seller } from "./Components/Sellers/Seller";
import { Client } from "./Components/Clients/Client";

function App() {
  return (
    <div className="flex gap-3 pb-3">
      <Dashboard/>
     <div className="flex flex-col w-full min-h-[400px] h-[100% ">
     <div className="flex w-full  gap-2">
       <Home/>
       <Listing/>
      </div>
      <Seller/>
      <Client/>
     </div>

    </div>
  );
}

export default App;
