import Welcome from "@/components/welcomeSection";
import Popular from "@/components/popular";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "../style/app.scss";

export default function Home() {
  return (
    <>
      <main className="bg-[#f0fbfd]">
        <Nav />
        <Welcome />
        <Popular />
        <Footer />
      </main>
    </>
  );
}
