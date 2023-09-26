import { orbitron } from "@/fonts/fonts";
import React from "react";
import Image from "next/image";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const MarketTrend = () => {
  return (
    <div className="text-white my-24">
      <div className="mx-auto w-full">
        <h2 className={`${orbitron.className} text-2xl mb-3`}>Market Trend</h2>
        <div className="border-[1px] flex flex-wrap gap-6 justify-between px-5 py-4 border-[#FFC72C] rounded-lg">
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowUpShort size={30} className="text-green-600" />
              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowDownShort size={30} className="text-red-600" />
              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowUpShort size={30} className="text-green-600" />
              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowDownShort size={30} className="text-red-600" />

              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowUpShort size={30} className="text-green-600" />
              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowUpShort size={30} className="text-green-600" />
              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowDownShort size={30} className="text-red-600" />

              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
          <div className="flex justify-between w-full tablet_l:w-[47%]">
            <div className="flex gap-7 items-center">
              <Image
                src="/images/nft-7.png"
                alt=""
                height={50}
                width={50}
                className=""
              />
              <p className="text-[1rem]">NFT #123</p>
            </div>

            <div className="flex gap-3 items-center">
              <BsArrowUpShort size={30} className="text-green-600" />
              <span className="text-[.8rem] font-[400]">+0.015%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrend;
