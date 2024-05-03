import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="px-10 flex h-[10vh] items-center justify-between">
        <div>
          <h1 className="font-extrabold text-lg">Book World</h1>
        </div>
        <div>
          <ul className="flex gap-14 font-semibold">
            <li>Home</li>
            <li>Store</li>
            <li>Community</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <Link href={"/register"}>
            <Button
              variant="outline"
              className="border-none shadow-none bg-transparent">
              Sign in
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-none shadow-none bg-black text-white">
            Get Started
          </Button>
        </div>
      </nav>
    </>
  );
}
