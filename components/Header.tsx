import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Grid = dynamic(() => import("./Grid"), { ssr: false });

function Header() {
  return (
    <header
      data-theme="default"
      className="bg-base py-8 px-4 text-secondary500"
    >
      <h1 className="uppercase text-3xl font-bold text-center">
        Nice to meet you. <br /> Let&#39;s get to work.
      </h1>
      <div className="flex pt-4 w-full justify-center gap-4 animate-fadein h-96">
        <Grid rows={5} cols={6} imbedParagraph={true} />
      </div>
      <div className="bg-primary500 border-primary500 w-0 h-0"></div>
      <div className="bg-secondary500 border-secondary500 w-0 h-0"></div>
    </header>
  );
}

export default Header;
