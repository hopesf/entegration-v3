import { Inter } from "next/font/google";
import { ModeToggle } from "./ModeToggle";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={`flex flex-col min-h-screen w-full ${inter.className}`}>
        <div className="p-6">{children}</div>
      </main>
    </>
  );
}
