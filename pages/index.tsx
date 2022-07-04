import dynamic from "next/dynamic";
const Grid = dynamic(() => import("../components/Grid"), { ssr: false }); //disabling ssr because it will randomly generate the grid

import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div data-theme="default">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex justify-center bg-cyan-200 text-cyan-900">
          <div className=" max-w-4xl md:flex md:mx-16 gap-8">
            <About />
            <Skills />
          </div>
        </div>
        <Projects />
        <div className="w-full flex justify-center mt-16">
          <Grid rows={12} cols={2} imbedParagraph={false} animate={false} />
        </div>
        <Contact />
      </main>
      <div className="bg-primary500 border-primary500 w-0 h-0"></div>
      <div className="bg-secondary500 border-secondary500 w-0 h-0"></div>
    </div>
  );
};

export default Home;
