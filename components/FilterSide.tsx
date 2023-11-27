import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { apiService } from "@/functions";

interface FilterItem {
  title: string;
  value: string;
}

interface FilterGroup {
  [key: string]: FilterItem[];
}

export default function FilterSide() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data, error, isLoading } = useQuery("getFilter", apiService.getFilter);

  const filters: FilterGroup = data;

  console.log(filters);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  };

  // const filters: FilterGroup = {
  //   mainCategorys: [
  //     { title: "Kadın", value: "KADIN" },
  //     { title: "Erkek", value: "ERKEK" },
  //   ],
  //   subCategorys: [
  //     { title: "Sneaker", value: "SNEAKER" },
  //     { title: "Spor Ayakkabı", value: "SPOR_AYAKKABI" },
  //     { title: "Terlik", value: "TERLIK" },
  //     { title: "Bot", value: "BOT" },
  //     { title: "Çizme", value: "CIZME" },
  //     { title: "Sandalet", value: "SANDALET" },
  //     { title: "Babet", value: "BABET" },
  //   ],
  //   stockExist: [
  //     { title: "Tümü", value: "all" },
  //     { title: "Stokta Var", value: "on" },
  //     { title: "Stokta Yok", value: "off" },
  //   ],
  //   merchantExist: [
  //     { title: "Tümü", value: "all" },
  //     { title: "Yüklenenler", value: "on" },
  //     { title: "Yüklenmeyenler", value: "off" },
  //   ],
  //   colors: [
  //     { title: "Siyah", value: "black" },
  //     { title: "Beyaz", value: "white" },
  //     { title: "Kırmızı", value: "red" },
  //     { title: "Mavi", value: "blue" },
  //     { title: "Yeşil", value: "green" },
  //     { title: "Mor", value: "purple" },
  //     { title: "Turuncu", value: "orange" },
  //     { title: "Pembe", value: "pink" },
  //     { title: "Gri", value: "gray" },
  //     { title: "Sarı", value: "yellow" },
  //     { title: "Kahverengi", value: "brown" },
  //     { title: "Bej", value: "beige" },
  //     { title: "Lacivert", value: "navy" },
  //     { title: "Bordo", value: "burgundy" },
  //     { title: "Ekru", value: "ecru" },
  //     { title: "Lila", value: "lilac" },
  //     { title: "Somon", value: "salmon" },
  //     { title: "Krem", value: "cream" },
  //     { title: "Saks", value: "saks" },
  //     { title: "Hardal", value: "mustard" },
  //   ],
  // };

  const handleRedirectSelected = (queryName: string, queryValue: string) => {
    const queryString = createQueryString(queryName, queryValue);
    window.location.href = pathname + (queryString === "" ? "" : `?${queryString}`);
  };

  // Function to sort the selected value to the top
  const sortSelectedToTop = (data: FilterItem[], selectedValue: string | null) => {
    if (!selectedValue) {
      return data;
    }

    const selectedIndex = data.findIndex((item) => item.value === selectedValue);
    if (selectedIndex === -1) {
      return data;
    }

    const selected = data.splice(selectedIndex, 1);
    return [...selected, ...data];
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  // render filter items
  const renderFilter = (data: FilterItem[], sideTitle: string, queryName: string) => {
    const selectedValue = searchParams.get(queryName);
    const sortedData = sortSelectedToTop(data, selectedValue);

    return (
      <div className="w-full">
        <Label>{sideTitle}</Label>
        <div className="max-h-[200px] overflow-y-auto gap-1.5 grid max-w-sm pt-4 space-y-4 items-center">
          {sortedData?.map((item, i) => (
            <div className="flex items-center space-x-2 px-2 font-medium" key={i}>
              <Checkbox
                id={item.title}
                name={item.title}
                onCheckedChange={(isChecked) => handleRedirectSelected(queryName, isChecked ? item.value : "")}
                defaultChecked={selectedValue === item.value}
              />
              <label className="text-sm leading-none text-gray-400">{item.title}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filtrele</CardTitle>
        <CardDescription>Bu alandan ürünlerle ilgili filtreleme yapabilirsiniz.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-5 space-y-4">
        {/* filtrede ara */}
        <div className="grid w-full max-w-sm items-center space-y-2">
          <Label>Ara</Label>
          <Input type="text" placeholder="Filtrede Arama Yapabilirsiniz." />
        </div>

        {/* Yüklenenler yüklenmeyenler */}
        {renderFilter(filters.merchantExist, "Pazaryeri Durumu", "merchantStatus")}

        {/* stok durumu */}
        {renderFilter(filters.stockExist, "Stok Durumu", "stock")}

        {/* Ana kategori */}
        {renderFilter(filters.mainCategorys, "Ana Kategori", "kata1")}

        {/* alt Kategori */}
        {renderFilter(filters.subCategorys, "Alt Kategori", "kata3")}

        {/* renk */}
        {renderFilter(filters.colors, "Renk", "color")}
      </CardContent>
    </Card>
  );
}
