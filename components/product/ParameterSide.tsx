import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { useGlobal } from "@/context/GlobalContext";
import { firstCharToUpperCase } from "@/functions";

export default function ParameterSide() {
  const { selectedMerchant } = useGlobal();

  /* 

Article Code
Casual Footwear Features

Seçiniz
Closure Type

Seçiniz
Collection

Seçiniz
Commercial Type

Seçiniz
Foot Length, cm
0
Heel Height, cm
Heel Height, cm
Heel Type

Seçiniz
Inner Material

Seçiniz
Insole length, cm

Seçiniz
Insole Material

Seçiniz
Manufacturer Size
Manufacturer Size
Material

Seçiniz
Platform Height, cm
Platform Height, cm
Season

Seçiniz
Shaft Height, cm
Shaft Height, cm
Sole Height, cm
Sole Height, cm
Sole Material

Seçiniz
Style

Seçiniz
Type (Zorunlu)

Seçiniz
Upper Material
*/

  const parameters = [
    {
      title: "Article Code",
      type: "text",
      placeholder: "Article Code",
      minLenght: 1,
      maxLenght: 100,
      required: false,
    },
    {
      title: "Casual Footwear Features",
      type: "selectbox",
      placeholder: "Casual Footwear Features",
      minLenght: 0,
      maxLenght: 0,
      required: false,
    },
    {
      title: "Closure Type",
      type: "selectbox",
      placeholder: "Closure Type",
      minLenght: 0,
      maxLenght: 0,
      required: false,
    },
    {
      title: "Collection",
      type: "selectbox",
      placeholder: "Collection",
      minLenght: 0,
      maxLenght: 0,
      required: false,
    },
    {
      title: "Commercial Type",
      type: "selectbox",
      placeholder: "Commercial Type",
      minLenght: 0,
      maxLenght: 0,
      required: false,
    },
    {
      title: "Foot Length, cm",
      type: "number",
      placeholder: "Foot Length, cm",
      minLenght: 1,
      maxLenght: 100,
      required: false,
    },
    {
      title: "Heel Height, cm",
      type: "number",
      placeholder: "Heel Height, cm",
      minLenght: 1,
      maxLenght: 100,
      required: false,
    },
    {
      title: "Heel Type",
      type: "selectbox",
      placeholder: "Heel Type",
      minLenght: 0,
      maxLenght: 0,
      required: false,
    },
    {
      title: "Type",
      type: "selectbox",
      placeholder: "Type",
      minLenght: 0,
      maxLenght: 0,
    },
  ];

  return (
    <div className="col-span-3 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{selectedMerchant && firstCharToUpperCase(selectedMerchant)} Parametreleri</CardTitle>
          <CardDescription>Ürünün Parametrelerini {selectedMerchant}'da seçin veya düzenleyin.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 space-y-4">
              {parameters.map((parameter, index) => (
                <>
                  {parameter.type === "text" ? (
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">{parameter.title}</Label>
                      <Input placeholder={parameter.placeholder} />
                    </div>
                  ) : parameter.type === "number" ? (
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">{parameter.title}</Label>
                      <Input type="number" placeholder={parameter.placeholder} />
                    </div>
                  ) : parameter.type === "selectbox" ? (
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">{parameter.title}</Label>
                      <Select>
                        <SelectTrigger id="material">
                          <SelectValue placeholder={parameter.placeholder} />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="hakikideri">Hakiki Deri</SelectItem>
                          <SelectItem value="sunideri">Suni Deri</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ) : null}
                </>
              ))}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="material">Deri Materyali</Label>
                <Select>
                  <SelectTrigger id="material">
                    <SelectValue placeholder="Deri Materyal Seçimi" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="hakikideri">Hakiki Deri</SelectItem>
                    <SelectItem value="sunideri">Suni Deri</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
