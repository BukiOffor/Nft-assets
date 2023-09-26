"use client";

import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import { orbitron } from "@/fonts/fonts";
import { poppins } from "@/fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RedeemNft = () => {
  const router = useRouter();

  const Mint = () => {
    router.push("/collections/mint");
  };

  return (
    <div className="mt-24">
      <TopNavigation />
      <div className="">
        <div className="mx-auto w-[97%] tablet_l:w-[94%] max-w-[800px]">
          <div className="mx-auto">
            <Image
              src="/images/redeemed.svg"
              alt=""
              height={1000}
              width={1008}
              // className="w-[100%] tablet_l:w-[350px] max-w-[400px] "
              // style={{ width: "568px", height: "400px" }}
            />
            <div></div>
          </div>
        </div>
        <div className="text-2xl text-white w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px] mx-auto mt-5 mb-20">
          <div className="flex justify-between items-center">
            <p className={`${orbitron.className} text-xl text-white `}>
              Product/Package type
            </p>
            <p
              className={`${orbitron.className} flex gap-3 tracking-wide items-center `}
            >
              West craving NFTS
              <Image
                src="/images/badge-check.svg"
                alt=""
                height={30}
                width={30}
                // className="w-[20px] h-[20px]"
              />
            </p>
          </div>
          <p className="bg-[#FFC72C] h-[1.5px] my-7"></p>
          <div className="flex flex-wrap gap-5 justify-between w-full tablet_l:w-[60%]">
            <p className="flex flex-col text-[15px]">
              Unique Owners
              <span className={`${orbitron.className} text-xl`}>
                120 Owners
              </span>
            </p>
            <div>
              <p className="text-[15px]">Mint price</p>
              <p className={`${orbitron.className} text-xl`}>0.05 eth</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RedeemNft;
