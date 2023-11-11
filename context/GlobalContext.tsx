"use client";

import { MenubarShortcut } from "@/components/ui/menubar";
import { ArchiveIcon, CogIcon } from "lucide-react";
import React, { createContext, useContext, ReactNode, useReducer } from "react";

// Reducer fonksiyonu, state ve action alır, yeni bir state döner.
function globalReducer(state: typeof initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case "selectMerchant":
      return {
        ...state,
        merchants: state.merchants.map((merchant) => ({
          ...merchant,
          selected: merchant.title === action.payload,
        })),
      };
    default:
      return state;
  }
}

const initialState = {
  merchants: [
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
  ],
  data: [
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
  ],
};

interface GlobalContextType {
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
  selectedMerchant: string | undefined;
  selectedMerchantisExist: boolean;
  nullMerchantsMenu: typeof initialState.data;
  selectedMerchantMenu: typeof initialState.data;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

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

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal fonksiyonu globalProvider içerisinde kullanılmalıdır.");
  }
  return context;
}
