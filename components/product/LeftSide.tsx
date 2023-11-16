import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { useGlobal } from "@/context/GlobalContext";
import { firstCharToUpperCase } from "@/functions";

export default function LeftSide() {
  const { selectedMerchant } = useGlobal();

  return (
    <div className="col-span-3 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Ürün Ayarları</CardTitle>
          <CardDescription>Ürünün temel konfigürasyonlarını yapılandırın.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Ürün Başlığı</Label>
                <Input placeholder="Hakiki erkek deri ayakkabı" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Ürün Fiyatı</Label>
                <Input type="number" placeholder="55" />
              </div>

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

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Ürün Açıklaması</Label>
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
          <CardTitle>{selectedMerchant && firstCharToUpperCase(selectedMerchant)} Güncel Durumu</CardTitle>
          <CardDescription>Ürünün {selectedMerchant}'da ne durumda ?</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 space-y-4">
              <span>Siyah</span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
