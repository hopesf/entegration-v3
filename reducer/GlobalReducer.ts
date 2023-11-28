import { initialState } from "@/context/GlobalContext";

export default function globalReducer(state: typeof initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case "selectMerchant":
      const merchants = state.merchants.map((merchant) => ({
        ...merchant,
        selected: merchant.merchant === action.payload.toLowerCase(),
      }));
      return {
        ...state,
        merchants,
      };

    case "notSelectMerchant":
      const notMerchants = state.merchants.map((merchant) => ({
        ...merchant,
        selected: false,
      }));
      return {
        ...state,
        merchants: notMerchants,
      };
    case "setPageLoader":
      return {
        ...state,
        pageLoader: action.payload,
      };
    case "SET_FILTER_QUERY":
      return {
        ...state,
        filterQuery: action.payload,
      };
    default:
      return state;
  }
}
