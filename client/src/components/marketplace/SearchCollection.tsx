import React from "react";
import Image from "next/image";
import { orbitron } from "@/fonts/fonts";
import SearchField from "../SearchField";

const SearchCollection: React.FC = () => {
  return (
    <div className=" flex mt-28 flex-col tablet_l:flex-row gap-y-10 my-20 justify-between">
      <div className="flex w-full tablet_l:w-[50%] flex-col">
        <SearchField />
        <h2
          className={`${orbitron.className} text-primary text-2xl w-[80%] max-w-[400px]`}
        >
          Explore thousands of digital assets from trending to curated
          collections
        </h2>
      </div>

      <div
        className={`w-[90%] flex flex-col tablet_l:w-[35%] mx-auto tablet_l:ml-auto ${orbitron.className}`}
      >
        <h2 className="text-2xl text-white w-full  mb-8">NFT SPECIALS</h2>
        <div
          className={`flex flex-col bg-sidebar ml-auto w-full tablet-l:w-[450px] rounded-md`}
        >
          <Image
            src={"/rectangle.png"}
            alt={"nft special"}
            height={250}
            width={250}
            layout="responsive"
          />
          <div className="p-2">
            <div className="flex space-x-2 items-center mt-4 mb-8">
              <Image
                src={"/images/nft-special.png"}
                height={45}
                width={45}
                alt="nft-special"
              />
              <h3 className="text-lg text-white">Bake shop NFTs</h3>
              <Image
                src="/images/badge-check.svg"
                height={20}
                width={20}
                alt="badge-check"
              />
            </div>

            <div className={`flex justify-between`}>
              <div className="text-white">
                <p>Floor</p>
                <p>0.05 ETH</p>
              </div>
              <div className="text-white">
                <p>Total Volume</p>
                <p>14.1K ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCollection;
