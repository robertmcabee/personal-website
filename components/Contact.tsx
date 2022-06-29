function Contact() {
  return (
    <div className="py-8 px-8 text-green-900 bg-green-100 flex justify-center">
      <div className="max-w-4xl ">
        <h2 className="text-xl font-bold">Contact</h2>
        <p className="pt-4">
          Let&#39;s talk! Whether you want to talk business or if you just want
          to say hi, my inbox is always open. You can also dm me on Twitter if
          that&#39;s more your style.
        </p>
        <form name="contact" method="POST" data-netlify="true">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white rounded-2xl focus:outline-4 outline-green-500 px-4 py-2 mt-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white rounded-2xl focus:outline-4 outline-green-500 px-4 py-2 mt-2"
                required
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="" htmlFor="subject">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="bg-white rounded-2xl focus:outline-4 outline-green-500 px-4 py-2 mt-2"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="" htmlFor="messsage">
                Messsage:
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white rounded-2xl focus:outline-4 outline-green-500 h-40 px-4 py-2 mt-2"
              ></textarea>
            </div>
            <input
              type="submit"
              className="bg-green-300 max-w-min px-4 py-2 mt-2 rounded-2xl focus:outline-4 outline-green-500 hover:bg-green-400 cursor-pointer transition-colors"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
