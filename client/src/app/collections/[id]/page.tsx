"use client";

import React, { useEffect, useState } from "react";
import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import { orbitron } from "@/fonts/fonts";
import { poppins } from "@/fonts/fonts";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import { SimpleCollectible } from "../../../../constants";
import { readFactoryContract, readSimpleCollectibleContract } from "@/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { parseEther } from "viem";

const Details = () => {
  const { address } = useAccount();
  const pathName = usePathname();
  // const router = useRouter();
  const params = parseFloat(pathName.charAt(pathName.length - 1));
  const [collection, setCollection] = useState({ mintFee: 0 });
  const [owners, setOwners] = useState<any[]>([]);
  const [image, setImage] = useState("");
  const [cAddress, setAddress] = useState<`0x${string}`>(
    "0x950384443e2455E93010BeeC53Fd24e3aaD04C67",
  );
  const [name, setName] = useState("");
  const [isRedeemed, setIsRedeemed] = useState(false);

  useEffect(() => {
    console.log("jjj");
    readFactoryContract("getMarketPlaces").then((res) => {
      console.log(res);
      res.forEach((address: any) => {
        console.log(address);
        readSimpleCollectibleContract(address, "getData").then(
          (data: string | any[] | null) => {
            console.log(data, address);
            data &&
              setCollection({
                mintFee: parseFloat(data[params].mintFee) / 10 ** 18,
              });
            readSimpleCollectibleContract(address, "name").then((name) => {
              console.log(name, data);
              setAddress(address);
              name && setName(String(name));
              data &&
                axios.get(data[params].uri).then((axiosResponse) => {
                  console.log(axiosResponse);
                  setImage(axiosResponse.data.imageUrl);
                  readSimpleCollectibleContract(address, "getOwners", [
                    parseFloat(data[params].index),
                  ]).then((owners) => {
                    console.log(owners, "fff");
                    owners && typeof owners !== "string"
                      ? setOwners(owners)
                      : setOwners([]);
                  });
                });
            });
          },
        );
      });
    });
  }, []);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: cAddress,
    abi: SimpleCollectible.abi,
    functionName: "createCollectible",
    args: [address, params],
    value: parseEther(String(collection.mintFee * 100)),
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    console.log(String(collection.mintFee * 100), collection.mintFee);
    if (isSuccess) {
      toast.success("Minted Successfully", { theme: "colored" });
      setIsRedeemed(true);
    } else if ((isPrepareError || isError) && collection.mintFee) {
      toast.error(prepareError?.message || error?.message, {
        theme: "colored",
      });
    }
  }, [isSuccess, isError, isPrepareError]);

  const Mint = () => {
    console.log(isRedeemed);
    !isRedeemed && write?.();
    // router.push("/collections/mint");
  };

  const Redeem = () => {
    // write?.();
    // router.push("/collections/mint");
  };

  return (
    <div className="mt-24">
      <TopNavigation />
      <div className="text-white">
        <div className="flex gap-8 gap-y-16 items-end flex-col tablet_l:flex-row mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
          <div className="mr-auto">
            <Image
              src={image}
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
              {name} NFTS
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
                {owners.length} Owners
              </span>
            </p>
            <div>
              <p className="text-[15px]">Mint price</p>
              <p className={`${orbitron.className} text-xl`}>
                {collection.mintFee} eth
              </p>
            </div>
            {isRedeemed ? (
              <button className={styles.home_btn} onClick={Redeem}>
                Redeem
              </button>
            ) : (
              <button className={styles.home_btn} onClick={Mint}>
                Mint
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
