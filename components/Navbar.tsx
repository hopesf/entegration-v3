"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "./ui/menubar";
import { ArchiveIcon, CogIcon } from "lucide-react";

export default function Navbar() {
  const [merchants, setMerchants] = useState([
    {
      title: "Ozon",
      selected: false,
      merchant: "ozon",
      disabled: false,
    },
    {
      title: "Etsy",
      selected: false,
      merchant: "etsy",
      disabled: true,
    },
    {
      title: "Joom",
      selected: false,
      merchant: "joom",
      disabled: true,
    },
    {
      title: "Fruugo",
      selected: false,
      merchant: "fruugo",
      disabled: false,
    },
    {
      title: "Trendyol International",
      selected: false,
      merchant: "trendyolint",
      disabled: true,
    },
  ]);

  const data = [
    {
      title: "Bildirimler",
      selected: false,
      merchant: null,
    },
    {
      title: "Arşiv İşlemleri",
      selected: false,
      merchant: null,
      submenu: [
        {
          title: "Arşivlenmiş Ürünler",
          disabled: false,
          shortcut: (
            <MenubarShortcut>
              <ArchiveIcon size={16} />
            </MenubarShortcut>
          ),
        },
        {
          title: "Arşiv Ayarları",
          disabled: false,
          shortcut: (
            <MenubarShortcut>
              <CogIcon size={16} />
            </MenubarShortcut>
          ),
        },
      ],
    },
    {
      title: "Ozon Ürün Ayarları",
      selected: false,
      merchant: "ozon",
    },
    {
      title: "Fruugo Ürün Ayarları",
      selected: false,
      merchant: "fruugo",
    },
  ];

  const handleSelectMerchant = (selectedItemTitle: string, index: number) => {
    const newMerchants = merchants.map((el) => (el.title === selectedItemTitle ? { ...el, selected: true } : { ...el, selected: false }));
    setMerchants(newMerchants);
  };

  return (
    <div className="w-full flex items-center px-2 lg:px-4 py-1 border-b justify-between">
      <Menubar className="rounded-none border-none">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">{merchants.find((el) => el.selected)?.title || "Pazar Yeri Seçimi"}</MenubarTrigger>
          <MenubarContent>
            {merchants.map((item, index) => (
              <MenubarItem onClick={() => handleSelectMerchant(item.title, index)} disabled={item.disabled}>
                {item.title}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>

        {data
          .filter((f) => f.merchant === null)
          .map((item, i) => (
            <MenubarMenu key={i}>
              <MenubarTrigger>{item.title}</MenubarTrigger>
              {item.submenu && (
                <MenubarContent>
                  {item.submenu.map((subitem, subi) => (
                    <React.Fragment key={subi}>
                      <MenubarItem disabled={subitem.disabled}>
                        {subitem.title}
                        {subitem.shortcut}
                      </MenubarItem>
                    </React.Fragment>
                  ))}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}

        {data
          .filter((f) => f.merchant === merchants.find((x) => x.selected)?.merchant)
          ?.map((item, i) => (
            <MenubarMenu key={i}>
              <MenubarTrigger>{item.title}</MenubarTrigger>
              {item.submenu && (
                <MenubarContent>
                  {item.submenu.map((subitem, subi) => (
                    <React.Fragment key={subi}>
                      <MenubarItem disabled={subitem.disabled}>
                        {subitem.title}
                        {subitem.shortcut}
                      </MenubarItem>
                    </React.Fragment>
                  ))}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}

        <MenubarMenu>
          <MenubarTrigger>Ayarlar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Pazaryeri Ayarları</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ModeToggle />
    </div>
  );
}
