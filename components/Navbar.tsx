"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { useGlobal } from "@/context/GlobalContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { state, dispatch, selectedMerchantisExist, nullMerchantsMenu, selectedMerchantMenu, selectedMerchant } = useGlobal();
  const [isAnimating, setIsAnimating] = useState(false);

  const current = usePathname();
  const checkCurrent = current.includes("/product");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSelectMerchant = (merchantTitle: string) => dispatch({ type: "selectMerchant", payload: merchantTitle });

  return (
    <div className="w-full flex items-center px-2 lg:px-4 py-1 border-b justify-between sticky top-0 z-20 bg-white dark:bg-black">
      <Menubar className="rounded-none border-none">
        <Link href={"/"} className={`font-extrabold text-lg select-none cursor-pointer ${isAnimating && "rotate-vert-center"}`}>
          CZ
        </Link>
        <MenubarMenu>
          <MenubarTrigger className="font-bold">{state.merchants.find((el) => el.selected)?.title || "Pazar Yeri Seçimi"}</MenubarTrigger>
          <MenubarContent>
            {state.merchants.map((item, index) => (
              <React.Fragment key={index}>
                {item.disabled ? (
                  <MenubarItem disabled={item.disabled}>{item.title}</MenubarItem>
                ) : checkCurrent ? (
                  <MenubarItem onClick={() => handleSelectMerchant(item.title)} disabled={item.disabled}>
                    {item.title}
                  </MenubarItem>
                ) : (
                  <Link href={item.href} key={index}>
                    <MenubarItem onClick={() => handleSelectMerchant(item.title)} disabled={item.disabled}>
                      {item.title}
                    </MenubarItem>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </MenubarContent>
        </MenubarMenu>

        {nullMerchantsMenu.map((item, i) => (
          <MenubarMenu key={i}>
            {item.submenu ? (
              <MenubarTrigger>{item.title}</MenubarTrigger>
            ) : (
              <Link href={item.href}>
                <MenubarTrigger>{item.title}</MenubarTrigger>
              </Link>
            )}

            {item.submenu && (
              <MenubarContent>
                {item.submenu.map((subitem, subi) => (
                  <Link href={subitem.href} key={subi}>
                    <MenubarItem disabled={subitem.disabled}>
                      {subitem.title}
                      {subitem.shortcut}
                    </MenubarItem>
                  </Link>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        ))}

        {selectedMerchantMenu?.map((item, i) => (
          <MenubarMenu key={i}>
            {item.submenu ? (
              <MenubarTrigger>{item.title}</MenubarTrigger>
            ) : (
              <Link href={item.href}>
                <MenubarTrigger>{item.title}</MenubarTrigger>
              </Link>
            )}
            {item.submenu && (
              <MenubarContent>
                {item.submenu.map((subitem, subi) => (
                  <Link href={subitem.href} key={subi}>
                    <MenubarItem disabled={subitem.disabled}>
                      {subitem.title}
                      {subitem.shortcut}
                    </MenubarItem>
                  </Link>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        ))}

        <MenubarMenu>
          <Link href="/settings">
            <MenubarTrigger>Ayarlar</MenubarTrigger>
          </Link>
        </MenubarMenu>
        {checkCurrent && selectedMerchantisExist && (
          <MenubarMenu>
            <Link href={`/${selectedMerchant?.toLowerCase()}`}>
              <MenubarTrigger className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Ürünlere Git
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        )}
      </Menubar>
      <ModeToggle />
    </div>
  );
}
