"use client";

import { useState } from "react";
import Data from "./data";
import Card from "./card";

export default function Popular() {
  const [cards, setCards] = useState(Data());

  return (
    <>
      <section className="px-16">
        <div className="py-5 text-lg font-medium">
          <h1>MOST POPULAR</h1>
        </div>
        <div className="cards">
          {cards.map(() => (
            <Card />
          ))}
        </div>
      </section>
    </>
  );
}
