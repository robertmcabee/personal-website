import Image from "next/image";
import ProjectCard from "./ProjectCard";
import easybankImage from "../images/easybank-screenshot.webp";
import findipImage from "../images/find-ip-screenshot.webp";
import easyhabitImage from "../images/easyhabit.webp";
import frontendresourcesImage from "../images/frontendresources-screenshot.webp";

function Projects() {
  return (
    <section className="md:px-16 px-8 md:pt-8 text-secondary900">
      <div className="py-8 flex justify-center">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          <p className="pt-4">
            These are a few of my past projects. More projects and additional
            information can be found on my{" "}
            <a
              className="underline hover:text-secondary600 transition-colors"
              href="https://github.com/robertmcabee"
              target="_blank"
              rel="noreferrer"
            >
              Github profile,
            </a>{" "}
            if you&#39;re curious.
          </p>
        </div>
      </div>

      <div className="flex justify-center md:pt-4">
        <div className="max-w-fit grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-8 justify-around">
          <ProjectCard
            title={"EasyHabit"}
            description={
              "An intuitive full-stack habit tracker built with Typescript and React, with a Supabase backend for user storage and authentication."
            }
            githubURL={"https://github.com/robertmcabee/EasyHabit"}
            liveURL={"https://easyhabit.vercel.app/"}
          >
            <Image
              src={easyhabitImage}
              alt="findip Screenshot"
              className="rounded-t-3xl"
              layout="fill"
              objectFit="cover"
            />
          </ProjectCard>

          <ProjectCard
            title={"Front-End Resources"}
            description={
              "A collection of free modern web development resources. Built with Typescript, React, Next.js & DaisyUI."
            }
            githubURL={"https://github.com/robertmcabee/Front-End-Resources"}
            liveURL={"https://webdevhelp.netlify.app/"}
          >
            <Image
              src={frontendresourcesImage}
              alt="findip Screenshot"
              className="rounded-t-3xl"
              layout="fill"
              objectFit="cover"
            />
          </ProjectCard>

          <ProjectCard
            title={"Digital Banking Landing Page"}
            description={"A Responsive Landing Page built with Tailwind CSS."}
            githubURL={"https://github.com/robertmcabee/easybank"}
            liveURL={"https://easybankrm.netlify.app/"}
          >
            <Image
              src={easybankImage}
              alt="findip Screenshot"
              className="rounded-t-3xl"
              layout="fill"
              objectFit="cover"
            />
          </ProjectCard>

          <ProjectCard
            title={"Find IP"}
            description={
              "Enter an ip address and see where it is on the map. Built using two different APIs in conjuction with React and Tailwind CSS."
            }
            githubURL={"https://github.com/robertmcabee/find-ip"}
            liveURL={"https://findip.netlify.app/"}
          >
            <Image
              src={findipImage}
              alt="findip Screenshot"
              className="rounded-t-3xl"
              layout="fill"
              objectFit="cover"
            />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;
