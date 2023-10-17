"use client";

import React, { useState, useEffect } from "react";
import APIService from "@/http/api_service";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import Image from "next/image";
import TopNavigation from "@/common/navs/top/TopNavigation";
import { orbitron } from "@/fonts/fonts";
import { poppins } from "@/fonts/fonts";
import Footer from "@/components/Footer";
import { ScaleLoader } from "react-spinners";

const Details = () => {
  const pathName = usePathname();
  const segments = pathName.split("/");
  const id = segments[segments.length - 1];

  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetails] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    APIService.fetchProjectDetail(id, (response: any, error: any) => {
      if (error) {
        setLoading(false);
        toast.error(error, { theme: "colored" });
      }
      setLoading(false);
      setDetails({ ...response?.data });
    });
  }, []);

  return (
    <div className="mt-24">
      <TopNavigation />
      <div>
        {loading && 
        <ScaleLoader color="#FFC72C"/>}
      </div>
      {
        !loading && 
      <div className="text-white">
        <div className="flex gap-8 gap-y-16 items-end flex-col tablet_l:flex-row mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
          <div className="mr-auto">
            {detail?.artwork && detail?.artwork?.length && (
              <Image
                src={detail?.artwork[0] || "/images/nft-1.png"}
                alt="artwork"
                height={800}
                width={808}
                className="w-[100%] tablet_l:w-[350px] max-w-[400px] "
              />
            )}
            <p
              className={`${orbitron.className} flex gap-3 tracking-wide items-center mt-3 `}
            >
              {detail?.title}
              <Image
                src="/images/badge-check.svg"
                alt=""
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
              />
            </p>
          </div>
          <div className="">
            <h4 className={`${poppins.className} text-2xl `}>
              About Collection
            </h4>
            <p className="mt-3 mb-6">{detail?.description}</p>
          </div>
        </div>
        <div className="text-2xl w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px] mx-auto my-14">
          <p className={`${orbitron.className} text-2xl `}>
            Product/Package type
          </p>
          <p className="bg-[#FFC72C] h-[1.5px] my-7"></p>
          <div className="flex flex-wrap gap-5 justify-between">
            <p className="flex flex-col text-[15px]">
              Unique Owners
              <span className={`${orbitron.className} text-xl`}>
                {detail?.owner?.length || 0} Owners
              </span>
            </p>
            <div>
              <p className="text-[15px]">Mint price</p>
              <p className={`${orbitron.className} text-xl`}>
                {/* {collection.mintFee} eth */}
                {detail?.price}
              </p>
            </div>
            {/* {isRedeemed ? (
            <button className={styles.home_btn} onClick={Redeem}>
              Redeem
            </button>
          ) : (
            <button className={styles.home_btn} onClick={Mint}>
              Mint
            </button>
          )} */}
          </div>
        </div>
      </div>
      }
      <Footer />
    </div>
  );
};

export default Details;
