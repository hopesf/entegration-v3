import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function RightSide() {
  return (
    <div className="col-span-9 w-full h-full max-w-screen space-y-4 overflow-y-auto">
      {/* resimlerin renklerinin seçilebileceği container */}
      <div className="w-fit mx-auto flex border px-5 py-4 rounded-tr-2xl rounded-bl-2xl items-center justify-center shadow -space-x-1 group">
        <div className="h-4 w-4 rounded-full bg-red-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
        <div className="h-4 w-4 rounded-full bg-gray-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
        <div className="h-4 w-4 rounded-full bg-yellow-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
        <div className="h-4 w-4 rounded-full bg-pink-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
        <div className="h-4 w-4 rounded-full bg-purple-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
        <div className="h-4 w-4 rounded-full bg-orange-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
        <div className="h-4 w-4 rounded-full bg-blue-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
        <div className="h-4 w-4 rounded-full bg-green-500 border group-hover:mx-5 duration-500 hover:scale-150 cursor-pointer" />
      </div>

      <div className="w-full grid gap-10 grid-cols-3">
        <Image
          src="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/01035427/23080.jpg"
          width={500}
          height={300}
          alt="Photo by Drew Beamer"
          className="rounded-tl-2xl rounded-br-2xl object-cover"
        />

        <Image
          src="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/01035431/23081.jpg"
          alt="Photo by Drew Beamer"
          width={500}
          height={300}
          className="rounded-tl-2xl rounded-br-2xl object-cover"
        />

        <Image
          src="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/01035435/23082.jpg"
          alt="Photo by Drew Beamer"
          width={500}
          height={300}
          className="rounded-tl-2xl rounded-br-2xl object-cover"
        />

        <Image
          src="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/01035439/23083.jpg"
          alt="Photo by Drew Beamer"
          width={500}
          height={300}
          className="rounded-tl-2xl rounded-br-2xl object-cover"
        />

        <Image
          src="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/01035443/23084.jpg"
          alt="Photo by Drew Beamer"
          width={500}
          height={300}
          className="rounded-tl-2xl rounded-br-2xl object-cover"
        />

        <Image
          src="https://czbucket-cz.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/11/01035447/23085.jpg"
          alt="Photo by Drew Beamer"
          width={500}
          height={300}
          className="rounded-tl-2xl rounded-br-2xl object-cover"
        />
      </div>
    </div>
  );
}
