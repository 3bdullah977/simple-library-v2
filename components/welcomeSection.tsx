import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Welcome() {
  return (
    <>
      <main className="welcome">
        <section className="h-[90vh] px-16 flex flex-col justify-center">
          <div className="w-2/4 flex flex-col gap-5 items-start">
            <h2 className="text-6xl font-medium">
              Where every page <br /> is a new adventure
            </h2>
            <p>
              Hello and welcome to our library shop! We're thrilled to have you
              here. Our mission is to provide you with a wide range of books and
              educational materials to enrich your learning experience. Whether
              you're looking for the latest bestsellers, classic literature, or
              educational resources, we've got you covered.
            </p>
            <Dialog>
              <DialogTrigger className="bg-transparent rounded-2xl border-black flex items-center border-[1.5px] py-1 gap-1 px-10">
                <Search width={17} height={17} />
                Search Books
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
          </div>
        </section>
      </main>
    </>
  );
}
