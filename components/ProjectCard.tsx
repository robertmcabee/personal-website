interface ProjectCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  githubURL: string;
  liveURL: string;
}

function ProjectCard({
  children,
  title,
  description,
  githubURL,
  liveURL,
}: ProjectCardProps) {
  return (
    <article className="max-w-md bg-white rounded-3xl shadow-2xl hover:shadow-secondary500 duration-300 flex flex-col">
      <div className="relative rounded-t-3xl h-48 bg-black">{children}</div>
      <h3 className="py-4 px-6 text-lg font-bold">{title}</h3>
      <p className="mb-auto px-6">{description}</p>
      <a
        href={githubURL}
        className="text-secondary500 px-6 pt-8 mt-auto font-bold transition-all hover:text-secondary300"
      >
        Github Repository
      </a>
      <a
        href={liveURL}
        className="text-secondary500 px-6 pt-2 pb-6 font-bold transition-all hover:text-secondary300"
      >
        See it Live
      </a>
    </article>
  );
}

export default ProjectCard;
