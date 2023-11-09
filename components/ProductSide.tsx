import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductSide() {
  const renderProductCard = () => {
    return (
      <div className="min-w-fit flex space-y-2 flex-col border-b pb-5">
        <Image src="https://picsum.photos/800/800" width={800} height={800} alt="test" />
        <div className="space-y-2">
          <Label className="text-md font-bold">Ürün Adı</Label>
          <p className="text-sm text-gray-400">Ürün Açıklaması</p>
        </div>
        <div className="flex items-center justify-center">
          <Button className="w-fit bg-black text-white border-b">
            <ArrowRight className="mr-2 h-4 w-4" /> Ürüne Git
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="text-lg">Ürünler</CardTitle>
        <CardDescription>Filtrenize göre veya Filtresiz sıralı bir şekilde ürünlerimiz</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full grid gap-10 grid-cols-4 py-5">
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
      </CardContent>
    </Card>
  );
}
