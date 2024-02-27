import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
  });
  return (
    <div
      ref={ref}
      style={inView ? { opacity: "100%" } : { opacity: "10%" }}
      className="py-8 md:py-16 px-8 md:px-0 w-full flex justify-center duration-1000"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Technologies</h2>

        <p className="pt-4">
          I&#39;m always digging into documentation and{" "}
          <span className="line-through">breaking</span> building things. These
          are what I love to use right now:
        </p>

        <ul className="pt-4 grid grid-cols-2 font-bold gap-1">
          <li className="list-disc ml-3">React</li>
          <li className="list-disc ml-3">TypeScript</li>
          <li className="list-disc ml-3">NextJS</li>
          <li className="list-disc ml-3">Git</li>
          <li className="list-disc ml-3">Tailwind</li>
          <li className="list-disc ml-3">Python</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
