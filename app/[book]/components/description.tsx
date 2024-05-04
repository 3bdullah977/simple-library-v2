import { Star } from "lucide-react";

export default function Description() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Book Name</h1>
        <span className="flex items-center font-semibold gap-1 py-2">
          <Star />
          <span>0/10</span>
        </span>
        <hr />
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          accusamus quos natus voluptatum! Ipsa cupiditate corporis odit
          voluptate excepturi facilis dignissimos explicabo illo. Cupiditate
          ducimus aspernatur voluptatum quae inventore voluptatem ipsa deserunt
          facilis nulla nisi consequatur repellat ullam sit, nihil eos quia
          magnam numquam similique officiis atque! Esse, nesciunt ipsum!
        </p>
      </div>
    </>
  );
}
