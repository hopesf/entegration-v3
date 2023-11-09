import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export default function FilterSide() {
  const mainCategorys = [
    { title: "Kadın", value: "KADIN" },
    { title: "Erkek", value: "ERKEK" },
  ];

  const subCategorys = [
    { title: "Sneaker", value: "SNEAKER" },
    { title: "Spor Ayakkabı", value: "SPOR_AYAKKABI" },
    { title: "Terlik", value: "TERLIK" },
    { title: "Bot", value: "BOT" },
    { title: "Çizme", value: "CIZME" },
    { title: "Sandalet", value: "SANDALET" },
    { title: "Babet", value: "BABET" },
  ];

  const stockStatus = [
    { title: "Tümü", value: "TUMU" },
    { title: "Stokta Var", value: "STOKTA_VAR" },
    { title: "Stokta Yok", value: "STOKTA_YOK" },
  ];

  const colors = [
    { title: "Siyah", value: "black" },
    { title: "Beyaz", value: "white" },
    { title: "Kırmızı", value: "red" },
    { title: "Mavi", value: "blue" },
    { title: "Yeşil", value: "green" },
    { title: "Mor", value: "purple" },
    { title: "Turuncu", value: "orange" },
    { title: "Pembe", value: "pink" },
    { title: "Gri", value: "gray" },
    { title: "Sarı", value: "yellow" },
    { title: "Kahverengi", value: "brown" },
    { title: "Bej", value: "beige" },
    { title: "Lacivert", value: "navy" },
    { title: "Bordo", value: "burgundy" },
    { title: "Ekru", value: "ecru" },
    { title: "Lila", value: "lilac" },
    { title: "Somon", value: "salmon" },
    { title: "Krem", value: "cream" },
    { title: "Saks", value: "saks" },
    { title: "Hardal", value: "mustard" },
  ];

  const renderFilter = (data: any[], sideTitle: string) => {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5 space-y-4 pt-4">
        <Label htmlFor="searchInFilter">{sideTitle}</Label>
        {data?.map((item) => (
          <div className="flex items-center space-x-2 px-2 font-medium" key={item.title}>
            <Checkbox id={item.title} />
            <label htmlFor={item.value} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {item.title}
            </label>
          </div>
        ))}
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
          <Label htmlFor="searchInFilter">Ara</Label>
          <Input type="text" placeholder="Filtrede Arama Yapabilirsiniz." />
        </div>

        {/* fiyat aralığı */}
        <div className="grid w-full max-w-sm items-center space-y-2 pt-4">
          <Label htmlFor="searchInFilter">Fiyat Aralığı</Label>
          <div className="flex items-center space-x-2">
            <Input type="text" placeholder="Min" />
            <Input type="text" placeholder="Max" />
          </div>
        </div>

        {/* stok durumu */}
        {renderFilter(stockStatus, "Stok Durumu")}

        {/* Ana kategori */}
        {renderFilter(mainCategorys, "Ana Kategori")}

        {/* alt Kategori */}
        {renderFilter(subCategorys, "Alt Kategori")}

        {/* renk */}
        {renderFilter(colors, "Renk")}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Filter className="mr-2 h-4 w-4" /> Filtrele
        </Button>
      </CardFooter>
    </Card>
  );
}
