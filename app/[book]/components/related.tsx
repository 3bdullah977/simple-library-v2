"use client";

import Data from "@/components/data";
import Card from "@/components/card";
import { useState } from "react";

export default function Related() {
  const [data, setData] = useState(Data());

  return (
    <>
      <div className="pt-4">
        <h1 className="pb-2 font-semibold text-lg">Related</h1>
        <div className="flex overflow-x-scroll gap-5">
          {data.map(() => (
            <div>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
