import "../../style/book.scss";
import Image from "next/image";
import img from "../../public/LEVEL_Photocard_Sung_Jinwoo_EN.png";
import Description from "./components/description";
import Related from "./components/related";
import ShoppingCard from "./components/shopping_card";

export default function Book() {
  return (
    <>
      <main className="px-10 py-5 bg-[#f0fbfd]">
        <section className="info">
          <div>
            <Image
              className="w-full min-w-[10rem]"
              width={200}
              height={200}
              src={img}
              alt={"dd"}
            />
          </div>
          <div className="px-4 min-w-full">
            <Description />
            <Related />
          </div>
          <div className="border-2 rounded p-4">
            <ShoppingCard />
          </div>
        </section>
      </main>
    </>
  );
}
