"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { useGlobal } from "@/context/GlobalContext";

export default function Navbar() {
  const { state, dispatch, selectedMerchantisExist, nullMerchantsMenu, selectedMerchantMenu } = useGlobal();

  const handleSelectMerchant = (merchantTitle: string) => {
    dispatch({ type: "selectMerchant", payload: merchantTitle });
  };

  return (
    <div className="w-full flex items-center px-2 lg:px-4 py-1 border-b justify-between">
      <Menubar className="rounded-none border-none">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">{state.merchants.find((el) => el.selected)?.title || "Pazar Yeri Seçimi"}</MenubarTrigger>
          <MenubarContent>
            {state.merchants.map((item, index) => (
              <MenubarItem key={index} onClick={() => handleSelectMerchant(item.title)} disabled={item.disabled}>
                {item.title}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>

        {nullMerchantsMenu.map((item, i) => (
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

        {selectedMerchantMenu?.map((item, i) => (
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
