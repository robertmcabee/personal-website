type shape = "N" | "S" | "W" | "E" | "X" | "O";

function Shape({ shape }: { shape: shape }) {
  function getStyle(shape: shape) {
    let style =
      "opacity-50 transition-all duration-300 relative p-4 md:p-8 rounded-full";

    if (shape === "N") {
      style += " w-full h-[200%] bg-";
    } else if (shape === "S") {
      style += " w-full h-[200%] bg-";
    } else if (shape === "W") {
      style += " w-[200%] h-full bg-";
    } else if (shape === "E") {
      style += " w-[200%] h-full bg-";
    } else if (shape === "X") {
      style += " w-full h-full bg-";
    } else if (shape === "O") {
      style += " border-[1rem] md:border-[2rem] w-full h-full border-";
    }
    if (Math.random() < 0.5) {
      style += "primary500";
    } else {
      style += "secondary500";
    }
    return style;
  }

  return (
    <div className="w-16 md:w-32 h-16 md:h-32">
      <div className={getStyle(shape)}></div>
    </div>
  );
}

export default Shape;
