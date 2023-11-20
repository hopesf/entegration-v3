import Image from "next/image";
import { Label } from "./ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useGlobal } from "@/context/GlobalContext";
import { firstCharToUpperCase } from "@/functions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function ProductSide() {
  const { selectedMerchant } = useGlobal();

  const renderProductCard = () => {
    return (
      <div className="min-w-fit flex space-y-2 flex-col pb-5 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] shadow-blue-500/20  rounded-bl-2xl rounded-br-2xl">
        <Image
          src="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/03024542/12888.jpg"
          width={800}
          height={800}
          priority={true}
          className="rounded-tl-2xl rounded-br-2xl"
          placeholder="blur"
          blurDataURL="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/03024542/12888.jpg"
          alt="test"
        />
        <div className="flex w-full justify-between items-center px-5 pt-5">
          <div className="space-y-2">
            <Label className="text-md font-bold">9.077</Label>
          </div>
          <div className="flex -space-x-2 group hover:space-x-2 ease-in duration-500 transform cursor-pointer">
            <div className="w-4 h-4 bg-red-500 shadow rounded-full border group-hover:rotate-in-diag-2 hover:p-2 hover:border-primary duration-300" />
            <div className="w-4 h-4 bg-green-500 shadow rounded-full border group-hover:rotate-in-diag-2 hover:p-2 hover:border-primary duration-300" />
            <div className="w-4 h-4 bg-blue-500 shadow rounded-full border group-hover:rotate-in-diag-2 hover:p-2 hover:border-primary duration-300" />
            <div className="w-4 h-4 bg-purple-500 shadow rounded-full border group-hover:rotate-in-diag-2 hover:p-2 hover:border-primary duration-300" />
            <div className="w-4 h-4 bg-yellow-500 shadow rounded-full border group-hover:rotate-in-diag-2 hover:p-2 hover:border-primary duration-300" />
          </div>
        </div>

        <div className="flex w-full justify-between items-center px-5">
          <Label className="text-md font-light">{selectedMerchant ? firstCharToUpperCase(selectedMerchant) : ""} Fiyat</Label>
          <Label className="text-md font-light">₺ 1.000</Label>
        </div>

        <div className="flex items-center justify-center w-full pt-5">
          <Link
            href={`/product/1?merchant=${selectedMerchant}`}
            target="_blank"
            className="w-fit dark:bg-black flex items-center dark:text-white hover:border-b hover:border-red-500"
          >
            <ArrowRight className="mr-2 h-4 w-4" /> Ürüne Git
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="border p-5 rounded w-full flex items-center justify-between">
        <div>
          <span className="text-lg font-bold">Ürünler</span>
          <p className="font-light">Filtrenize göre veya Filtresiz sıralı bir şekilde ürünlerimiz</p>
        </div>
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ürünleri Sırala" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minModelCode">En Düşük Model Kodu</SelectItem>
              <SelectItem value="maxModelCode">En Yüksek Model Kodu</SelectItem>
              <SelectItem value="minPrice">En Düşük Fiyat</SelectItem>
              <SelectItem value="maxPrice">En Yüksek Fiyat</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full grid gap-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-5">
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
        {renderProductCard()}
      </div>
    </div>
  );
}
