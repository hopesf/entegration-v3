"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterSideFnc from "@/functions/FilterSideFnc";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { FilterItem } from "../types";

interface RenderFilterProps {
  data: FilterItem[];
  sideTitle: string;
  queryName: string;
}

export default function RenderFilter({ data, sideTitle, queryName }: RenderFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSelectFilter = (queryName: string, queryValue: string) => {
    const queryString = FilterSideFnc.createQueryString(queryName, queryValue, searchParams);
    console.log(queryString);
    router.push(pathname + (queryString === "" ? "" : `?${queryString}`));
  };

  const sorted = data?.sort((a, b) => a.title?.localeCompare(b.title));

  return (
    <div className="w-full">
      <Label>{sideTitle}</Label>
      <div className="max-h-[200px] overflow-y-auto gap-1.5 grid max-w-sm pt-4 space-y-4 items-center">
        {sorted?.map((item, i) => (
          <div className="flex items-center space-x-2 px-2 font-medium" key={i}>
            <Checkbox
              id={item.title}
              name={item.title}
              onCheckedChange={(isChecked) => handleSelectFilter(queryName, isChecked ? item.value : "")}
              checked={item.checked}
              defaultChecked={item.checked}
            />
            <label className="text-sm leading-none text-gray-400">{item.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
