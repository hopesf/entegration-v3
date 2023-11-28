import { initialState } from "./GlobalContext";

export interface GlobalContextType {
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
  selectedMerchant: string | undefined;
  selectedMerchantisExist: boolean;
  nullMerchantsMenu: typeof initialState.data;
  selectedMerchantMenu: typeof initialState.data;
}
