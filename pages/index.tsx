import dynamic from "next/dynamic";
const Grid = dynamic(() => import("../components/Grid"), { ssr: false }); //disabling ssr because it will randomly generate the grid

import Head from "next/head";
import ColorPicker from "../components/ColorPicker";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { useState } from "react";

const Home = () => {
  const [primaryColor, setPrimaryColor] = useState("green");
  const [secondaryColor, setSecondaryColor] = useState("cyan");

  return (
    <div
      data-primary={primaryColor}
      data-secondary={secondaryColor}
      className="transition-colors"
    >
      <Head>
        <title>Robert McAbee</title>
        <meta
          name="description"
          content="Robert McAbee is a Montana-based frontend developer skilled at creating beautiful modern websites"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorPicker
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        setPrimaryColor={setPrimaryColor}
        setSecondaryColor={setSecondaryColor}
      />
      <Header />
      <main className="bg-base animate-fadein">
        <div className="flex justify-center bg-secondary200 text-secondary900 shadow-inner">
          <div className=" max-w-4xl md:flex md:mx-16 gap-8">
            <About />
            <Skills />
          </div>
        </div>
        <Projects />
        <div className="w-full flex justify-center mt-16">
          <Grid rows={18} cols={2} imbedParagraph={false} animate={false} />
        </div>
        <Contact />
      </main>
      <Footer />
      <div className="bg-primary500 border-primary500 w-0 h-0"></div>
      <div className="bg-secondary500 border-secondary500 w-0 h-0"></div>
    </div>
  );
};

export default Home;
