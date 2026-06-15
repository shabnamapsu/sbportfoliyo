import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-baseline px-10 justify-start z-5 top-10 ">
      <div className=" border-green-300 text-white flex w-full gap-3 animate-pulse opacity-0 py-2 top-10">
        
        <span className="flex-1 text-start text-3xl font-bold text-green-200 py-2">
          F
        </span>

        <span className="flex-1 text-center text-3xl font-semibold text-orange-200 py-2 ">
          M
        </span>

        <span className="flex-1 text-end text-3xl font-bold text-green-200 py-2 ">
          L
        </span>

      </div>
    </div>
  );
}

export default Loader;