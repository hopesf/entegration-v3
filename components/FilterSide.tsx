import { useQuery } from "react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { apiService } from "@/functions";
import RenderFilter from "./filter/RenderFilter";

export default function FilterSide() {
  const { data: filters, error, isLoading } = useQuery("getFilter", apiService.getFilter, { refetchOnWindowFocus: false });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

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
        <RenderFilter data={filters.merchantExist} sideTitle="Pazaryeri Durumu" queryName="merchantStatus" />
        {/* stok durumu */}
        <RenderFilter data={filters.stockExist} sideTitle="Stok Durumu" queryName="stock" />
        {/* Ana kategori */}
        <RenderFilter data={filters.mainCategorys} sideTitle="Ana Kategori" queryName="kata1" />
        {/* alt Kategori */}
        <RenderFilter data={filters.subCategorys} sideTitle="Alt Kategori" queryName="kata2" />
        {/* renk */}
        <RenderFilter data={filters.colors} sideTitle="Renk" queryName="color" />
      </CardContent>
    </Card>
  );
}
