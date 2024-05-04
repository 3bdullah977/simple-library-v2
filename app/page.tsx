import Welcome from "@/components/welcomeSection";
import Popular from "@/components/popular";
import "../style/app.scss";

export default function Home() {
  return (
    <>
      <main className="bg-[#f0fbfd]">
        <Welcome />
        <Popular />
      </main>
    </>
  );
}
