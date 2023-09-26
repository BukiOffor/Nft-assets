"use client";

import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import { orbitron } from "@/fonts/fonts";
import { poppins } from "@/fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Details = () => {
  const router = useRouter();

  const Mint = () => {
    router.push("/collections/mint");
  };

  return (
    <div className="mt-24">
      <TopNavigation />
      <div className="text-white">
        <div className="flex gap-8 gap-y-16 items-end flex-col tablet_l:flex-row mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
          <div className="mr-auto">
            <Image
              src="/images/nft-2.png"
              alt=""
              height={800}
              width={808}
              className="w-[100%] tablet_l:w-[350px] max-w-[400px] "
              // style={{ width: "568px", height: "400px" }}
            />
            <div></div>
            <p
              className={`${orbitron.className} flex gap-3 tracking-wide items-center mt-3 `}
              // className=""
            >
              West craving NFTS
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
            <p className="mt-3 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium est quia illo nisi, cumque laborum vero quae maxime
              ratione nulla veniam, perferendis recusandae. Temporibus, minus
              sunt nobis asperiores qui iure.
            </p>
            <ul className="gap-3 flex flex-col list-disc">
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
            </ul>
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
                120 Owners
              </span>
            </p>
            <div>
              <p className="text-[15px]">Mint price</p>
              <p className={`${orbitron.className} text-xl`}>0.05 eth</p>
            </div>
            <button className={styles.home_btn} onClick={Mint}>
              Mint
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
