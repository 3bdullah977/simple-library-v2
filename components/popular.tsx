"use client";

import { useState } from "react";
import Data from "./data";
import Card from "./card";
import Link from "next/link";

export default function Popular() {
  const [cards, setCards] = useState(Data());

  return (
    <>
      <section className="px-16">
        <div className="py-5 text-lg font-medium">
          <h1 className="font-semibold">MOST POPULAR</h1>
        </div>
        <div className="cards">
          {cards.map(() => (
            <Link href={"/book"}>
              <Card />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
