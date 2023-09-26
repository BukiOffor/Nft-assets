"use client";
import React, { useState, useEffect } from "react";
import { orbitron } from "@/fonts/fonts";
import Button from "@/common/Button";
import { AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

interface GetStartedProps {
  cancel: () => void;
  //   nextPage: () => void;
}

export const Transproces: React.FC<GetStartedProps> = ({ cancel }) => {
  const [isComfirmed, setIsComfirmed] = useState(true);
  const [subcom, setSubcom] = useState(true);
  const [share, setShare] = useState(false);

  useEffect(() => {
    // Use setTimeout to change the text after 3 seconds
    const timeoutId = setTimeout(() => {
      setIsComfirmed(false);
    }, 3000);

    // Clear the timeout to prevent memory leaks when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const closeComfimSubmit = () => {
    setSubcom(!subcom);
  };

  const submitsucces = () => {
    // nextPage()
    setShare(true);
  };

  return (
    <>
      {subcom && (
        <div className="fixed text-white  flex h-[100dvh] left-0 top-0 l w-[100dvw]">
          <div
            onClick={closeComfimSubmit}
            className="absolute h-[100dvh] left-0 top-0 l w-[100dvw]  bg-[#1B0A1A]  bg-opacity-60"
          />

          {isComfirmed ? (
            <div className="relative z-30 w-[95%] py-32 rounded-2xl shadow-lg mx-auto mt-32 h-fit laptop_l:w-[1000px] bg-[#130712] ">
              <Image
                width={15}
                height={15}
                onClick={cancel}
                className="absolute top-6 right-7 cursor-pointer"
                src="/images/close.svg"
                alt="checked"
              />
              <h2
                className={`${orbitron.className} text-center text-white text-3xl mb-3`}
              >
                Transaction processing...
              </h2>
              <p className="text-center text-xl w-[90%] mx-auto mt-2">
                Your transaction is been published, please exercise patience!
              </p>
              <Link
                href="/redeemNft"
                className="text-center w-fit mx-auto text-primary flex justify-center gap-2 items-center text-lg tablet_l:w-[550px] mt-6 "
              >
                View On Explorer
                <Image
                  width={15}
                  height={15}
                  onClick={cancel}
                  className=" cursor-pointer"
                  src="/images/explora.svg"
                  alt="checked"
                />
              </Link>
            </div>
          ) : (
            <div className="relative z-30 w-[95%] py-32 rounded-2xl shadow-lg mx-auto mt-32 h-fit laptop_l:w-[1000px] bg-[#130712] ">
              <Image
                width={15}
                height={15}
                onClick={cancel}
                className="absolute top-6 right-7 cursor-pointer"
                src="/images/close.svg"
                alt="checked"
              />
              <h2
                className={`${orbitron.className} text-center text-white text-3xl mb-3`}
              >
                Congratulations It’s Yours!
              </h2>
              <p className="text-center text-xl w-[90%] mx-auto mt-2">
                Your mint is confirmed - you officially own a West cravings Nft
              </p>
              <Link
                href="/redeemNft"
                className="text-center w-fit mx-auto text-primary flex justify-center gap-2 items-center text-lg tablet_l:w-[550px] mt-6 "
              >
                View On Explorer
                <Image
                  width={15}
                  height={15}
                  onClick={cancel}
                  className=" cursor-pointer"
                  src="/images/explora.svg"
                  alt="checked"
                />
              </Link>
              <div className="flex justify-center my-6">
                {!share ? (
                  <Button
                    handleClick={submitsucces}
                    className={`${orbitron.className} bg-gradient-linear px-6 mb-5 py-3`}
                  >
                    <p> Redeem NFT</p>
                  </Button>
                ) : (
                  <Button
                    // handleClick={submitsucces}
                    className={`${orbitron.className} bg-gradient-linear px-6 mb-5 py-3`}
                  >
                    <p className="flex gap-2 items-center">
                      Share on Twitter
                      <AiOutlineTwitter size={20} />
                    </p>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
