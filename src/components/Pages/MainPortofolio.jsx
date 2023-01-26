import React from "react";

import items from "../../itemsCard";
import Card from "./Card";

const MainPortofolio = (props) => {
  const createCard = (card) => {
    return (
      <Card
        id={card.id}
        key={card.id}
        title={card.title}
        text={card.text}
        image={card.image}
      />
    );
  };

  return <section className="mx-auto my-4">{items.map(createCard)}</section>;
};

export default MainPortofolio;
