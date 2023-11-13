"use client";

import Navbar from "@/components/Navbar";
import { useGlobal } from "@/context/GlobalContext";

export default function ProductDetail({ params }: any) {
  // eğer queryden merchant fieldı geliyorsa merchantın selectedini true yapacaz dispatch ile

  const query = params.merchant;

  const { selectedMerchantisExist } = useGlobal();

  return (
    <>
      <Navbar />
      <main className={`flex flex-col min-h-screen w-full`}>
        {selectedMerchantisExist ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-4xl font-bold">Ürün Detayı</h1>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-4xl font-bold">Lütfen bir pazar yeri seçiniz.</h1>
          </div>
        )}
      </main>
    </>
  );
}
