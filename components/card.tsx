import Image from "next/image";
import img from "../public/LEVEL_Photocard_Sung_Jinwoo_EN.png";

export default function Card() {
  return (
    <>
      <div className="">
        <div className="w-40">
          <Image
            alt={"gg"}
            className="rounded-xl"
            src={img}
            width={400}
            height={600}
          />
        </div>
        <h1 className="font-bold">The Road</h1>
        <p className="font-serif">Arthur conan</p>
      </div>
    </>
  );
}
