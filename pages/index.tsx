import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <About />
        <Skills />
      </main>
    </div>
  );
};

export default Home;
