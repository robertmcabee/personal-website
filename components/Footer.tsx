function Footer() {
  return (
    <footer className="pt-8 pb-4 px-8 text-primary900 flex flex-col sm:flex-row align-middle justify-between h-min">
      <div className="pb-3 flex justify-center gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/robertmcabee/"
          aria-label="LinkedIn"
          rel="noreferrer"
        >
          <div className="hover:shadow-lg bg-primary200 hover:bg-primary400 duration-300 h-min w-min rounded-full p-3 border-4 border-white hover:border-primary200">
            <svg
              width="24"
              height="24"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11l0 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8l0 .01"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16l0 -5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 16v-3a2 2 0 0 0 -4 0"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
        <a
          target="_blank"
          href="https://github.com/robertmcabee"
          aria-label="Github"
          rel="noreferrer"
        >
          <div className="hover:shadow-lg bg-primary200 hover:bg-primary400 duration-300 h-min w-min rounded-full p-3 border-4 border-white hover:border-primary200">
            <svg
              width="24"
              height="24"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
      <p className="pt-3 text-center sm:text-lg font-bold">
        Let&#39;s build something together.
      </p>
      <p className="pt-3 text-center opacity-50">
        © {new Date().getFullYear()} Robert McAbee
      </p>
    </footer>
  );
}

export default Footer;

<svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon icon-tabler icon-tabler-brand-linkedin"
  width="44"
  height="44"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="#2c3e50"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />

  <path d="M8 8l0 .01" />
  <path d="M12 16l0 -5" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>;
