function Contact() {
  return (
    <div className="py-8 md:py-16 md:px-8 flex justify-center">
      <div className="max-w-4xl bg-gradient-to-tl from-green-200 to-green-200 text-green-900 p-8 md:p-16 rounded-2xl shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        <p className="pt-4">
          Let&#39;s talk! Whether you want to talk business or if you just want
          to say hi, my inbox is always open. You can also dm me on{" "}
          <a
            className="underline hover:text-green-600 transition-colors"
            href="https://twitter.com/RobertTheMcAbee"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          if that&#39;s more your style.
        </p>

        <form name="contact" method="POST" data-netlify="true">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-green-500 px-4 py-2 mt-2"
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
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-green-500 px-4 py-2 mt-2"
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
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-green-500 px-4 py-2 mt-2"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="font-bold" htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white shadow-inner rounded-2xl focus:outline-4 outline-green-500 h-40 px-4 py-2 mt-2"
              ></textarea>
            </div>
            <input
              type="submit"
              className="bg-green-400 max-w-min px-4 shadow-md shadow-green-500 hover:shadow-none py-2 mt-2 rounded-2xl focus:outline-4 font-bold outline-green-600 hover:bg-green-500 cursor-pointer transition-all duration-300"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
