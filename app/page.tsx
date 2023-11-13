import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-col min-h-screen w-full`}>
        <div className="p-6">Henüz Hiçbir Pazaryeri seçilmemiş</div>
      </main>
    </>
  );
}
