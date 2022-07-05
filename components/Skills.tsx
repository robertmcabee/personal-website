function Skills() {
  return (
    <div className="py-8 md:py-16 px-8 md:px-0 w-full flex justify-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Technologies</h2>

        <p className="pt-4">
          I do my best to keep up with the best technologies - I&#39;m always
          digging into documentation and{" "}
          <span className="line-through">breaking</span> building things. These
          are what I love to use right now:
        </p>

        <ul className="pt-4 grid grid-cols-2 font-bold gap-1">
          <li className="list-disc ml-3">React</li>
          <li className="list-disc ml-3">TypeScript</li>
          <li className="list-disc ml-3">NextJS</li>
          <li className="list-disc ml-3">Git</li>
          <li className="list-disc ml-3">Tailwind</li>
          <li className="list-disc ml-3">Jest</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
