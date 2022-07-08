import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      style={
        inView
          ? { opacity: "100%", transform: "translate(0%, 0%)" }
          : { opacity: "10%", transform: "translate(0%, 10%)" }
      }
      className="py-8 md:py-16 md:px-8 flex justify-center duration-1000"
    >
      <div className="max-w-4xl bg-primary200 text-primary900 p-8 md:p-16 rounded-2xl shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        <p className="pt-4">
          Let&#39;s talk! Whether you want to talk business or if you just want
          to say hi, my inbox is always open. You can also dm me on{" "}
          <a
            className="underline hover:text-primary600 transition-colors"
            href="https://twitter.com/RobertTheMcAbee"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          if that&#39;s more your style.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/form-submission"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-primary500 px-4 py-2 mt-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-primary500 px-4 py-2 mt-2"
                required
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="font-bold" htmlFor="subject">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-primary500 px-4 py-2 mt-2"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="font-bold" htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-primary500 h-40 px-4 py-2 mt-2"
              ></textarea>
            </div>
            <input
              type="submit"
              className="bg-primary400 max-w-min px-4 shadow-md shadow-primary500 hover:shadow-none py-2 mt-2 rounded-2xl focus:outline-4 font-bold outline-primary600 hover:bg-primary500 cursor-pointer transition-all duration-300"
              value="Send Message"
            />
            <input className="hidden" name="bot-field" />
            <input
              className="hidden"
              type="hidden"
              name="form-name"
              value="contact"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
