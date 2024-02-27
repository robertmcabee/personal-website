import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
  });

  return (
    <div
      ref={ref}
      style={inView ? { opacity: "100%" } : { opacity: "10%" }}
      className="py-8 md:py-16 px-8 md:px-0 w-full flex justify-center duration-1000"
    >
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
        <p className="pt-4">
          I&#39;m a self-taught developer turned computer science student.
          I&#39;m passionate about clean, maintainable code and clean design.
        </p>
        <p className="pt-4">
          I&#39;m from Bozeman, MT. When I&#39;m not coding you can find me
          exploring new hiking trails, digging for vinyl downtown, or walking my
          dog, Juniper.
        </p>
      </div>
    </div>
  );
}

export default About;
