import Welcome from "@/components/welcomeSection";
import Popular from "@/components/popular";
import Footer from "@/components/footer";
import "../style/app.scss";

export default function Home() {
  return (
    <>
      <main className="bg-[#f0fbfd] ">
        <Welcome />
        <Popular />
        <Footer />
      </main>
    </>
  );
}
