import { useState } from "react";
import { Card } from "./components/Card";
import "./style.css";
import { Results } from "./components/Results";

export const App = () => {
  const indexes = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const marks = ["♠", "♥", "♣", "♦"];
  const dates = [];
  marks.forEach((mark) => {
    indexes.forEach((index) => {
      if (mark === "♠" || mark === "♣") {
        dates.push({ index: index, mark: mark, color: "black" });
      } else {
        dates.push({ index: index, mark: mark, color: "red" });
      }
    });
  });

  const [playCards, setPlayCards] = useState(['', '', '', '']);
  const onClickStart = () => {
    const NewPlayCards = [];
    for (let i = 0; i < 4; i++) {
      NewPlayCards.push(
        dates.splice(Math.floor(Math.random() * dates.length), 1)[0]
      );
    }
    setPlayCards(NewPlayCards);
    // console.log(NewPlayCards);
  };

  return (
    <>
      <div className="container">
        <div className="cards">
          {playCards.map((playCard, index) => {
            return (
              <Card
                key={index}
                index={playCard.index}
                mark={playCard.mark}
                color={playCard.color}
              />
            );
          })}
        </div>
        <button onClick={onClickStart}>GAME START</button>
        <Results playCards={playCards} />
      </div>
    </>
  );
};
