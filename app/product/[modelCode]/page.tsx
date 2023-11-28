"use client";

import Navbar from "@/components/Navbar";
import { useGlobal } from "@/context/GlobalContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import LeftSide from "@/components/product/LeftSide";
import RightSide from "@/components/product/RightSide";
import ParameterSide from "@/components/product/ParameterSide";
import ChatBot from "@/components/ChatBot";

export default function ProductDetail() {
  // eğer queryden merchant fieldı geliyorsa merchantın selectedini true yapacaz dispatch ile
  const { selectedMerchantisExist, dispatch, state } = useGlobal();
  const searchParams = useSearchParams();

  const merchant = searchParams.get("merchant");

  useEffect(() => {
    if (merchant) {
      dispatch({ type: "selectMerchant", payload: merchant });
    }
    return () => dispatch({ type: "setPageLoader", payload: false });
  }, [dispatch, merchant]);

  if (state.pageLoader)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );

  return (
    <>
      <Navbar />
      <main className={`flex flex-col h-full max-h-screen w-full p-5`}>
        {selectedMerchantisExist ? (
          <div className="w-full grid grid-cols-12 h-full gap-5">
            <LeftSide />
            <ParameterSide />
            <RightSide />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-4xl font-bold">Lütfen bir pazar yeri seçiniz.</h1>
          </div>
        )}
      </main>
      {/* <ChatBot /> */}
    </>
  );
}
