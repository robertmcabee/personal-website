import { useState } from "react";
import Shape from "./Shape";

interface Props {
  rows: number;
  cols: number;
  imbedParagraph: boolean;
  animate: boolean;
}

function Grid({ rows, cols, imbedParagraph, animate }: Props) {
  const [tick, setTick] = useState(0);

  function refresh() {
    //triggers 3 re-renders at set interval
    if (tick > 1) return;
    setTimeout(() => {
      setTick(tick + 1);
    }, 1200);
  }

  //generate a grid where each square can extend it shape into adjacent spaces
  function generateGrid(x: number, y: number, imbedParagraph: boolean) {
    if (animate) refresh();
    let reservedSquares: any[] = [];
    if (imbedParagraph) {
      //for mobile header
      reservedSquares = [
        "3,0",
        "3,1",
        "3,2",
        "3,3",
        "4,0",
        "4,1",
        "4,2",
        "4,3",
      ];
    }

    let rows = [];
    for (let i = 0; i < x; i++) {
      rows.push(Array(y).fill(""));
    }
    for (let i = 0; i < rows.length; i++) {
      //iterate through rows
      for (let j = 0; j < rows[i].length; j++) {
        if (rows[i][j] !== "") continue; // skip if already filled
        if (Math.random() < 0.2) {
          // 20% chance of filling with single circle
          rows[i][j] = "X";
          continue;
        }
        if (reservedSquares.includes(`${i},${j}`)) {
          // fill with single circle if paragrapgh will be placed over this sqaure
          rows[i][j] = "X";
          continue;
        }
        // each square evaluates the surrounding squares to see which direction it can expand in.
        let possibleDirections = [];
        if (i > 0 && rows[i - 1][j] === "") {
          possibleDirections.push("N");
        }
        if (
          i < rows.length - 1 &&
          rows[i + 1][j] === "" &&
          reservedSquares.includes(`${i + 1},${j}`) === false
        ) {
          possibleDirections.push("S");
        }
        if (j > 0 && rows[i][j - 1] === "") {
          possibleDirections.push("W");
        }
        if (j < rows[i].length - 1 && rows[i][j + 1] === "") {
          possibleDirections.push("E");
        }
        if (possibleDirections.length > 0) {
          rows[i][j] =
            possibleDirections[
              Math.floor(Math.random() * possibleDirections.length)
            ];
        } else {
          rows[i][j] = "X";
        }
        if (rows[i][j] === "S") {
          rows[i + 1][j] = "O";
        }
      }
    }

    return rows;
  }

  return (
    <>
      <div
        className="grid max-w-fit justify-center max-h-fit overflow-hidden"
        style={{ gridTemplateColumns: `repeat(${rows}, 1fr)` }}
      >
        {generateGrid(cols, rows, imbedParagraph).map((row, indexX) => {
          return row.map((shape, indexY) => {
            return <Shape shape={shape} key={indexX + "-" + indexY} />;
          });
        })}
        {imbedParagraph ? (
          <div className="absolute opacity-100 translate-y-[150%] bg-base w-64 sm:w-72 h-32 sm:h-48">
            <p className="px-8 py-4 sm:py-10 sm:text-lg text-center">
              I&#39;m Robert, a frontend developer passionate about elegant code
              and beautiful design.
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Grid;
