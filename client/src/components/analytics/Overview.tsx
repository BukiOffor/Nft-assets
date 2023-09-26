import React from "react";
import { orbitron } from "@/fonts/fonts";
import { poppins } from "@/fonts/fonts";
import Button from "@/common/Button";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="text-white mt-14">
      <div className="mx-auto w-full">
        <div className=" flex justify-between mb-5">
          <h2 className={`${orbitron.className} text-2xl mb-3`}>Overview</h2>
          <button
            className={`${orbitron.className} overview_b text-[#FFC72C] px-4 py-2`}
            style={{
              border: "2px solid transparent ",
              borderRadius: "10px",
              borderImage: "linear-gradient(to right, #702D6C, #FFC72C) 1",
            }}
          >
            Veiw more
          </button>
        </div>
        <div
          className={`${poppins.className} flex flex-wrap gap-y-3 gap-x-auto justify-around tablet:justify-between`}
        >
          <div className="bg-[#130712] rounded-lg border border-opacity-25 border-yellow-400 shadow-lg p-3 w-[47%] tablet_l:w-[30%]">
            <p className="text-[#989898] tracking-wider text-[14px]">
              Total Sales
            </p>
            <p className="text-[#FFC72C] text-2xl font-semibold my-1">
              $100,000
            </p>
            <p className="text-[#989898] text-[12px] tracking-wider">+10%</p>
          </div>
          <div className="bg-[#130712] rounded-lg border border-opacity-25 border-yellow-400 shadow-lg p-3 w-[47%] tablet_l:w-[30%]">
            <p className="text-[#989898] tracking-wider text-[14px]">
              Total Created NFTs
            </p>
            <p className="text-[#FFC72C] text-2xl font-semibold my-1">500</p>
            <p className="text-[#989898] text-[12px] tracking-wider">+20%</p>
          </div>
          <div className="bg-[#130712] rounded-lg border border-opacity-25 border-yellow-400 shadow-lg p-3 w-[47%] tablet_l:w-[30%]">
            <p className="text-[#989898] tracking-wider text-[14px]">
              Total Deployed NFTs
            </p>
            <p className="text-[#FFC72C] text-2xl font-semibold my-1">340</p>
            <p className="text-[#989898] text-[12px] tracking-wider">-5%</p>
          </div>
        </div>

        <div className=" flex justify-between mt-16">
          <h2 className={`${orbitron.className} text-2xl mb-3`}>Analytics</h2>
          <button
            className={`${orbitron.className} overview_b text-[#FFC72C] px-4 py-2`}
            style={{
              border: "2px solid transparent ",
              borderRadius: "10px",
              borderImage: "linear-gradient(to right, #702D6C, #FFC72C) 1",
            }}
          >
            Export Data
          </button>
        </div>
        <div className="mt-8">
          <Image
            src="/images/graph.png"
            alt=""
            height={1200}
            width={1000}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
