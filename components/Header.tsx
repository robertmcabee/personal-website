import dynamic from "next/dynamic";
const Grid = dynamic(() => import("./Grid"), { ssr: false }); //disabling ssr because it will randomly generate the grid

function Header() {
  return (
    <header className="bg-white py-8 md:py-16 text-secondary600">
      <h2 className="uppercase text-3xl md:text-6xl font-bold text-center">
        Nice to meet you.
      </h2>
      <h2 className="uppercase text-3xl md:text-6xl font-bold text-center">
        Let&#39;s get to work.
      </h2>
      {/* Mobile */}
      <div className="flex pt-4 md:hidden w-full justify-center gap-4 animate-fadein h-full">
        <Grid rows={5} cols={6} imbedParagraph={true} animate={true} />
      </div>
      {/* Desktop */}
      <div className="pt-4 md:pt-16 max-h-min hidden md:flex w-full justify-center gap-4 animate-fadein h-full">
        <Grid rows={18} cols={3} imbedParagraph={false} animate={true} />
      </div>
      <div className="hidden md:flex justify-center h-32 align-middle animate-fadein">
        <p className="place-self-center text-center max-w-lg text-xl italic ">
          I&#39;m Robert, a frontend developer passionate about elegant code and
          beautiful design.
        </p>
      </div>
      <div className=" max-h-min hidden md:flex w-full justify-center gap-4 animate-fadein h-full">
        <Grid rows={18} cols={2} imbedParagraph={false} animate={true} />
      </div>
    </header>
  );
}

export default Header;
