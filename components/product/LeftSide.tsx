import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { useGlobal } from "@/context/GlobalContext";
import { firstCharToUpperCase } from "@/functions";
import { Check } from "lucide-react";

export default function LeftSide() {
  const { selectedMerchant } = useGlobal();

  return (
    <div className="col-span-12 sm:col-span-6 2xl:col-span-3 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Ürün Ayarları</CardTitle>
          <CardDescription>Ürünün temel konfigürasyonlarını yapılandırın.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Ürün Başlığı</Label>
                <Input placeholder="Hakiki erkek deri ayakkabı" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Ürün Fiyatı</Label>
                <Input type="number" placeholder="55" />
              </div>

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

              <div className="flex flex-col space-y-1.5">
                <Label>Ürün Açıklaması</Label>
                <Textarea
                  rows={5}
                  placeholder="Hakiki deri ayakkabılar firmamız tarafından üretilmekte olup, siz değerli müşterilerimizin hayatını kolaylaştırmayı amaçlamaktadır."
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{selectedMerchant && firstCharToUpperCase(selectedMerchant)} Renklerin Durumu</CardTitle>
          <CardDescription>Ürünün renkleri {selectedMerchant}'da yüklenmiş mi ?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 items-center">
            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <span className="-rotate-45 group-hover:-rotate-90 delay-200 duration-500 text-red-600 font-light">!</span>
              </div>
              <span className="group-hover:scale-105 font-light">Siyah</span>
            </div>

            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <Check size={20} className="text-green-600 -rotate-45 group-hover:-rotate-90 delay-200 duration-500" />
              </div>
              <span className="group-hover:scale-105 font-light">Kırmızı</span>
            </div>
            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <span className="-rotate-45 group-hover:-rotate-90 delay-200 duration-500 text-red-600 font-light">!</span>
              </div>
              <span className="group-hover:scale-105 font-light">Sarı</span>
            </div>

            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <Check size={20} className="text-green-600 -rotate-45 group-hover:-rotate-90 delay-200 duration-500" />
              </div>
              <span className="group-hover:scale-105 font-light">Pembe</span>
            </div>
            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <span className="-rotate-45 group-hover:-rotate-90 delay-200 duration-500 text-red-600 font-light">!</span>
              </div>
              <span className="group-hover:scale-105 font-light">Mor</span>
            </div>

            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <Check size={20} className="text-green-600 -rotate-45 group-hover:-rotate-90 delay-200 duration-500" />
              </div>
              <span className="group-hover:scale-105 font-light">Turuncu</span>
            </div>
            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <span className="-rotate-45 group-hover:-rotate-90 delay-200 duration-500 text-red-600 font-light">!</span>
              </div>
              <span className="group-hover:scale-105 font-light">Mavi</span>
            </div>

            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <Check size={20} className="text-green-600 -rotate-45 group-hover:-rotate-90 delay-200 duration-500" />
              </div>
              <span className="group-hover:scale-105 font-light">Gri</span>
            </div>
            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <span className="-rotate-45 group-hover:-rotate-90 delay-200 duration-500 text-red-600 font-light">!</span>
              </div>
              <span className="group-hover:scale-105 font-light">Yeşil</span>
            </div>

            <div className="flex space-x-4 items-center group">
              <div className="w-5 h-5 bg-secondary border shadow rotate-45 group-hover:rotate-90 duration-300 flex items-center justify-center">
                <Check size={20} className="text-green-600 -rotate-45 group-hover:-rotate-90 delay-200 duration-500" />
              </div>
              <span className="group-hover:scale-105 font-light">Lacivert</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
