import React from "react";
import { orbitron } from "@/fonts/fonts";
import Image from "next/image";

const ColletionHeader = () => {
  return (
    <div className="mt-32 mb-24 w-full tablet_l:w-[97%] laptop_l:w-[97%] max-w-[1280px]">
      <div className="relative z-10 flex justify-center items-center mx-auto w-full h-[500px] laptop:h-[500px] rounded-lg">
        <Image
          className="hidden tablet_l:block h-[450px] absolute  w-full"
          src="/collection.png"
          width={1200}
          height={1000}
          alt=""
        />

        <Image
          className="tablet_l:hidden absolute h-[400px] w-full"
          src="/collection.png"
          width={1200}
          height={1000}
          alt=""
        />
        <div className="z-10 text-center my-auto">
          <h2 className={`${orbitron.className} text-3xl text-[#FFC72C]`}>
            Browse Collections
          </h2>
          <p className="mt-3 text-white w-[90%] tablet_l:w-[85%] laptop_l:w-[80%] max-w-[900px] mx-auto text-center">
            Browse through a diverse range of collections from our clients.
            Discover stunning artworks, limited editions, and rare collectibles.
            Each NFT holds a story waiting to be unveiled.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColletionHeader;
