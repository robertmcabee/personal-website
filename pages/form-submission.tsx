import Link from "next/link";
import Head from "next/head";

const FormSubmission = () => {
  return (
    <div className="text-center">
      <Head>
        <title>Thank you!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="mt-[30vh] mb-6">
        Thank you for reaching out. I&#39;ll be in touch.
      </p>
      <Link href="/">
        <span className=" text-lg underline  text-green-700 hover:text-green-500 cursor-pointer font-bold">
          Back.
        </span>
      </Link>
    </div>
  );
};

export default FormSubmission;
