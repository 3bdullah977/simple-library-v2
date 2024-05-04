"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, MapPin, Earth, BookOpenText, Smile } from "lucide-react";
import { useState } from "react";

export default function ShoppingCard() {
  let [amount, setAmount] = useState(0);

  return (
    <>
      <div>
        <div className="flex justify-between pb-2">
          <Button variant="outline" className="px-12">
            235.66$
          </Button>
          <Button variant="outline" className="px-12">
            465.33$
          </Button>
        </div>
        <hr />
        <div className="py-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">200$</h2>
          <p className="font-medium">Free shipping on monday 6th may</p>
          <p className="font-medium flex items-center">
            <MapPin width={17} height={17} />
            <span className="text-[#007185]">deliver to egypt</span>
          </p>
          <span className="font-medium text-red-700">
            only 3 left order now
          </span>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2">
              {amount ? (
                <Button variant="outline" onClick={() => setAmount(amount--)}>
                  <Minus />
                </Button>
              ) : (
                ""
              )}
              <span>{amount}</span>
              <Button variant="outline" onClick={() => setAmount(amount++)}>
                <Plus />
              </Button>
            </div>
            <Input placeholder="City" />
            <Input placeholder="Street" />
            <Button
              variant="outline"
              className="w-full bg-[#427d9d] text-white">
              Add to cart
            </Button>
            <Button
              variant="outline"
              className="w-full bg-[#164863] text-white">
              Order now!
            </Button>
          </div>
        </div>
        <hr />
        <div className="pt-4 flex justify-center gap-4">
          <p className="flex flex-col items-center gap-2">
            Language
            <Earth />
            ENG
          </p>
          <p className="flex flex-col items-center gap-2">
            N-Pages
            <BookOpenText />
            346
          </p>
          <p className="flex flex-col items-center gap-2">
            Age
            <Smile />
            15-19
          </p>
        </div>
      </div>
    </>
  );
}
