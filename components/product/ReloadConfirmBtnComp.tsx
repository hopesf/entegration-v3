import { Check } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function ReloadConfirmBtnComp({ reloadBtn, confirmBtn }: { reloadBtn: Function; confirmBtn: Function }) {
  return (
    <div className="flex space-x-2 items-center justify-between group transition-all duration-300">
      <div
        onClick={() => reloadBtn()}
        className="p-1 bg-gray-800 rounded-full hover:bg-gray-600 cursor-pointer hidden transition-transform translate-x-8 group-hover:translate-x-0 duration-200 ease-in delay-800  hover:scale-110 group-hover:flex"
      >
        <ReloadIcon fontSize={20} />
      </div>
      <Check
        onClick={() => confirmBtn()}
        className="bg-gray-800 p-1 rounded-full hover:bg-gray-600 cursor-pointer duration-200 hover:scale-110"
        size={24}
      />
    </div>
  );
}
