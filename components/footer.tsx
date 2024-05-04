import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="h-[10vh] flex justify-between px-10 items-center bg-[#f0fbfd]">
        <div>
          <span>Book World &copy; 2024 | privacy policy</span>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <Facebook />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Instagram />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
