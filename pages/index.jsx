import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-sky-100 h-full">
      <SearchBar />
      <h3>Main</h3>
    </main>
  );
}
