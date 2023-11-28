"use client";

import React, { createContext, useContext, ReactNode, useReducer } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ArchiveIcon, CogIcon } from "lucide-react";
import { MenubarShortcut } from "@/components/ui/menubar";
import { GlobalReducer } from "@/reducer";
import { GlobalContextType } from "./types";

export const initialState = {
  merchants: [
    {
      title: "Ozon",
      selected: false,
      merchant: "ozon",
      disabled: false,
      href: "/ozon",
    },
    {
      title: "Etsy",
      selected: false,
      merchant: "etsy",
      disabled: true,
      href: "/etsy",
    },
    {
      title: "Joom",
      selected: false,
      merchant: "joom",
      disabled: true,
      href: "/joom",
    },
    {
      title: "Fruugo",
      selected: false,
      merchant: "fruugo",
      disabled: false,
      href: "/fruugo",
    },
    {
      title: "Trendyol International",
      selected: false,
      merchant: "trendyolint",
      disabled: true,
      href: "/trendyolint",
    },
  ],
  // data menuleri içerir
  data: [
    {
      title: "Bildirimler",
      selected: false,
      merchant: null,
      href: "/notifications",
    },
    {
      title: "Arşiv İşlemleri",
      selected: false,
      merchant: null,
      href: "#",
      submenu: [
        {
          title: "Arşivlenmiş Ürünler",
          href: "/archived-products",
          disabled: false,
          shortcut: (
            <MenubarShortcut>
              <ArchiveIcon size={16} />
            </MenubarShortcut>
          ),
        },
        {
          title: "Arşiv Ayarları",
          href: "/settings",
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
      href: "/ozon/settings",
    },
    {
      title: "Fruugo Ürün Ayarları",
      selected: false,
      merchant: "fruugo",
      href: "/fruugo/settings",
    },
  ],
  pageLoader: true,
  filterQuery: "",
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
const queryClient = new QueryClient();

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const selectedMerchantisExist = state.merchants.some((merchant) => merchant.selected === true);
  const selectedMerchant = state.merchants.find((x) => x.selected)?.merchant;
  const nullMerchantsMenu = state.data.filter((x) => x.merchant === null);
  const selectedMerchantMenu = state.data.filter((x) => x.merchant === selectedMerchant);

  const contextValue = {
    state,
    dispatch,
    selectedMerchant,
    selectedMerchantisExist,
    nullMerchantsMenu,
    selectedMerchantMenu,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
    </QueryClientProvider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal fonksiyonu globalProvider içerisinde kullanılmalıdır.");
  }
  return context;
}
