"use client";

import FilterSide from "@/components/FilterSide";
import Navbar from "@/components/Navbar";
import ProductSide from "@/components/ProductSide";
import { useGlobal } from "@/context/GlobalContext";

export default function Home() {
  const { selectedMerchantisExist } = useGlobal();

  console.log(selectedMerchantisExist);
  return (
    <>
      <Navbar />
      <main className={`flex flex-col min-h-screen w-full`}>
        {selectedMerchantisExist ? (
          <div className="p-6 w-full grid grid-cols-10 gap-5">
            <div className="col-span-2 max-h-screen overflow-y-auto sticky top-0">
              <FilterSide />
            </div>

            <div className="col-span-8">
              <ProductSide />
            </div>
          </div>
        ) : (
          <div className="p-6">Henüz Hiçbir Pazaryeri seçilmemiş</div>
        )}
      </main>
    </>
  );
}
