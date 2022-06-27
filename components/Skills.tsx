function Skills() {
  return (
    <div className="py-8 px-4 bg-cyan-100 text-cyan-900 flex justify-center">
      <div className="px-4 sm:max-w-lg text-cyan-900">
        <h2 className="text-xl font-bold">Technologies</h2>

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
          <li className="list-disc ml-3">Semantic HTML</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
