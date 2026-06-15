import React from "react";

function Header() {
  return (
    <div className="bg-slate-900 text-white flex w-full gap-2 px-3   h-[45px] mt-2">
      <span className="flex-1 text-start text-3xl font-bold text-green-200 py-2">
        F
      </span>

      <span className="flex-1 text-center text-3xl font-semibold text-orange-200 py-2">
        M
      </span>

      <span className="flex-1 text-end text-3xl font-bold text-green-200 py-2 ml-3">
        L
      </span>
    </div>
  );
}

export default Header;