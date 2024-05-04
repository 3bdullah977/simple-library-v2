import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Nav() {
  return (
    <>
      <nav className="px-10 flex h-[10vh] items-center justify-between bg-[#f0fbfd]">
        <div>
          <Link href={"/"}>
            <h1 className="font-extrabold text-lg">Book World</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-14 font-semibold">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <li>Store</li>
            <li>
              <Dialog>
                <DialogTrigger className="bg-transparent">
                  <Search />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription className="flex items-center gap-2">
                      <Search width={20} height={20} />
                      <Input placeholder="Search..." />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
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
