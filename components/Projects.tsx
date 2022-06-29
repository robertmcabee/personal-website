import Image from "next/image";
import easybankImage from "../images/easybank-screenshot.webp";
import findipImage from "../images/find-ip-screenshot.webp";
import easyhabitImage from "../images/easyhabit.webp";
import frontendresourcesImage from "../images/frontendresources-screenshot.webp";

function Projects() {
  return (
    <section className="bg-gradient-to-t from-green-100 to-cyan-100 md:px-16 px-8">
      <div className="py-8 text-green-800 flex justify-center">
        <div className="max-w-4xl">
          <h2 className="text-xl font-bold">Projects</h2>
          <p className="pt-4">
            These are a few of my past projects. More projects and additional
            information can be found at my Github profile, if you&#39;re
            curious.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-fit grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-8 justify-around">
          <article className="max-w-md bg-white rounded-3xl shadow-2xl flex flex-col">
            <div className="relative rounded-t-3xl h-48 bg-black">
              <Image
                src={frontendresourcesImage}
                alt="findip Screenshot"
                className="rounded-t-3xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="py-4 px-6 text-lg font-bold">Find IP</h3>
            <p className=" px-6">
              Enter an ip address and see where it is on the map. Built using
              two different APIs in conjuction with React and Tailwind CSS.
            </p>
            <a
              href="####"
              className="text-cyan-500 self px-6 pt-8 font-bold transition-all hover:text-cyan-300"
            >
              Github Repository
            </a>
            <a
              href="#####"
              className="text-cyan-500 self px-6 pt-2 pb-6 font-bold transition-all hover:text-cyan-300"
            >
              See it Live
            </a>
          </article>

          <article className="max-w-md bg-white rounded-3xl shadow-2xl flex flex-col">
            <div className="relative rounded-t-3xl h-48 bg-black">
              <Image
                src={findipImage}
                alt="findip Screenshot"
                className="rounded-t-3xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="py-4 px-6 text-lg font-bold">Find IP</h3>
            <p className=" px-6">
              Enter an ip address and see where it is on the map. Built using
              two different APIs in conjuction with React and Tailwind CSS.
            </p>
            <a
              href="####"
              className="text-cyan-500 self px-6 pt-8 font-bold transition-all hover:text-cyan-300"
            >
              Github Repository
            </a>
            <a
              href="#####"
              className="text-cyan-500 self px-6 pt-2 pb-6 font-bold transition-all hover:text-cyan-300"
            >
              See it Live
            </a>
          </article>

          <article className="max-w-md bg-white rounded-3xl shadow-2xl flex flex-col">
            <div className="relative rounded-t-3xl h-48 bg-black">
              <Image
                src={easybankImage}
                alt="findip Screenshot"
                className="rounded-t-3xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="py-4 px-6 text-lg font-bold">Find IP</h3>
            <p className=" px-6">
              Enter an ip address and see where it is on the map. Built using
              two different APIs in conjuction with React and Tailwind CSS.
            </p>
            <a
              href="####"
              className="text-cyan-500 self px-6 pt-8 font-bold transition-all hover:text-cyan-300"
            >
              Github Repository
            </a>
            <a
              href="#####"
              className="text-cyan-500 self px-6 pt-2 pb-6 font-bold transition-all hover:text-cyan-300"
            >
              See it Live
            </a>
          </article>

          <article className="max-w-md bg-white rounded-3xl shadow-2xl flex flex-col">
            <div className="relative rounded-t-3xl h-48 bg-black">
              <Image
                src={easyhabitImage}
                alt="findip Screenshot"
                className="rounded-t-3xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="py-4 px-6 text-lg font-bold">Find IP</h3>
            <p className=" px-6">
              Enter an ip address and see where it is on the map. Built using
              two different APIs in conjuction with React and Tailwind CSS.
            </p>
            <a
              href="####"
              className="text-cyan-500 self px-6 pt-8 font-bold transition-all hover:text-cyan-300"
            >
              Github Repository
            </a>
            <a
              href="#####"
              className="text-cyan-500 self px-6 pt-2 pb-6 font-bold transition-all hover:text-cyan-300"
            >
              See it Live
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
