import Link from "next/link";
import Head from "next/head";

const FormSubmission = () => {
  return (
    <div className="text-center text-green-900 justify-center align-middle">
      <Head>
        <title>Thank you!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="mt-[30vh] mb-6">
        Thank you for reaching out. I&#39;ll be in touch.
      </p>
      <Link href="/">
        <div className="flex justify-center cursor-pointer">
          <div className="hover:shadow-lg bg-green-200 hover:bg-green-400 duration-300 h-min w-min rounded-full px-5 py-3 border-4 border-white hover:border-green-200">
            <span className=" text-lg font-bold">Back.</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FormSubmission;
