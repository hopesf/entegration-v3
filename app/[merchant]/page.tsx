"use client";

import { useGlobal } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// components
import FilterSide from "@/components/FilterSide";
import Navbar from "@/components/Navbar";
import ProductSide from "@/components/ProductSide";

export default function MerchantPage({ params }: { params: { merchant: string } }) {
  const { dispatch, state } = useGlobal();
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: "setPageLoader", payload: true });
    const { merchant } = params;
    console.log("Merchant:", merchant);

    const checkMerchant = state.merchants.find((el) => el.merchant === merchant);
    const checkDisabled = state.merchants.find((el) => el.merchant === merchant)?.disabled;
    if (checkDisabled || !checkMerchant) {
      router.push("/");
      return;
    }

    dispatch({ type: "selectMerchant", payload: merchant });
    dispatch({ type: "setPageLoader", payload: false });
  }, [dispatch, params]);

  if (state.pageLoader)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );

  return (
    <>
      <Navbar />
      <main className={`flex flex-col min-h-screen w-full`}>
        <div className="p-6 w-full grid grid-cols-10 gap-5">
          <div className="col-span-2 max-h-screen overflow-y-auto sticky top-12">
            <FilterSide />
          </div>

          <div className="col-span-8">
            <ProductSide />
          </div>
        </div>
      </main>
    </>
  );
}
