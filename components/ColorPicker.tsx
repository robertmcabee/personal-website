import { useState } from "react";

function ColorPicker({
  primaryColor,
  secondaryColor,
  setPrimaryColor,
  setSecondaryColor,
}: {
  primaryColor: string;
  secondaryColor: string;
  setPrimaryColor: React.Dispatch<React.SetStateAction<string>>;
  setSecondaryColor: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const colorClass =
    " h-12 w-12 rounded-full hover:opacity-100 transition-300 border-neutral-300 transition-all opacity-50 duration-300";

  return (
    <div
      className="fixed bg-white rounded-r-full shadow-xl my-4 grid grid-cols-6 gap-2 max-w-fit z-50 py-4 duration-500 text-primary800"
      style={
        visible
          ? { transform: "translate(0%)" }
          : { transform: "translate(-83%)" }
      }
    >
      <button
        aria-label="green"
        className={
          "bg-green-500" +
          colorClass +
          (primaryColor === "green" ? "" : " border-8")
        }
        onClick={() => {
          setPrimaryColor("green");
        }}
      ></button>

      <button
        aria-label="cyan"
        className={
          "bg-cyan-500" +
          colorClass +
          (primaryColor === "cyan" ? "" : " border-8")
        }
        onClick={() => {
          setPrimaryColor("cyan");
        }}
      ></button>
      <button
        aria-label="purple"
        className={
          "bg-purple-500" +
          colorClass +
          (primaryColor === "purple" ? "" : " border-8")
        }
        onClick={() => {
          setPrimaryColor("purple");
        }}
      ></button>
      <button
        aria-label="red"
        className={
          "bg-rose-500" +
          colorClass +
          (primaryColor === "rose" ? "" : " border-8")
        }
        onClick={() => {
          setPrimaryColor("rose");
        }}
      ></button>
      <button
        aria-label="orange"
        className={
          "bg-orange-500" +
          colorClass +
          (primaryColor === "orange" ? "" : " border-8")
        }
        onClick={() => {
          setPrimaryColor("orange");
        }}
      ></button>
      <button
        className="hover:text-primary600 transition-colors row-span-2 w-12 h-full"
        onClick={handleToggle}
        aria-label="show color picker"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full duration-500"
          style={{ transform: visible ? "scaleX(-1)" : "scaleX(1)" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        aria-label="green"
        className={
          "bg-green-500" +
          colorClass +
          (secondaryColor === "green" ? "" : " border-8")
        }
        onClick={() => {
          setSecondaryColor("green");
        }}
      ></button>
      <button
        aria-label="cyan"
        className={
          "bg-cyan-500" +
          colorClass +
          (secondaryColor === "cyan" ? "" : " border-8")
        }
        onClick={() => {
          setSecondaryColor("cyan");
        }}
      ></button>
      <button
        aria-label="purple"
        className={
          "bg-purple-500" +
          colorClass +
          (secondaryColor === "purple" ? "" : " border-8")
        }
        onClick={() => {
          setSecondaryColor("purple");
        }}
      ></button>
      <button
        aria-label="red"
        className={
          "bg-rose-500" +
          colorClass +
          (secondaryColor === "rose" ? "" : " border-8")
        }
        onClick={() => {
          setSecondaryColor("rose");
        }}
      ></button>
      <button
        aria-label="orange"
        className={
          "bg-orange-500" +
          colorClass +
          (secondaryColor === "orange" ? "" : " border-8")
        }
        onClick={() => {
          setSecondaryColor("orange");
        }}
      ></button>
    </div>
  );
}

export default ColorPicker;
