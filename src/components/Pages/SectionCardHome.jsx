import React from "react";

import items from "../../itemsCard";
import Card from "./Card";

const SectionCardHome = (props) => {
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
  return <div className="container my-4">{items.map(createCard)}</div>;
};

export default SectionCardHome;
