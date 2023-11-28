import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGlobal } from "@/context/GlobalContext";
import { firstCharToUpperCase } from "@/functions";

import ReloadConfirmBtnComp from "./ReloadConfirmBtnComp";

export default function ParameterSide() {
  const { selectedMerchant } = useGlobal();

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
    <div className="col-span-12 sm:col-span-6 2xl:col-span-3 space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{selectedMerchant && firstCharToUpperCase(selectedMerchant)} Parametreleri</CardTitle>
            <ReloadConfirmBtnComp reloadBtn={() => console.log("reload btn")} confirmBtn={() => console.log("confirm btn")} />
          </div>
          <CardDescription>Ürünün Parametrelerini {selectedMerchant} da seçin veya düzenleyin.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 space-y-4">
              {parameters.map((parameter, index) => (
                <React.Fragment key={index}>
                  {parameter.type === "text" ? (
                    <div className="flex flex-col space-y-1.5">
                      <Label>{parameter.title}</Label>
                      <Input placeholder={parameter.placeholder} />
                    </div>
                  ) : parameter.type === "number" ? (
                    <div className="flex flex-col space-y-1.5">
                      <Label>{parameter.title}</Label>
                      <Input type="number" placeholder={parameter.placeholder} />
                    </div>
                  ) : parameter.type === "selectbox" ? (
                    <div className="flex flex-col space-y-1.5">
                      <Label>{parameter.title}</Label>
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
                </React.Fragment>
              ))}

              <div className="flex flex-col space-y-1.5">
                <Label>Deri Materyali</Label>
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
