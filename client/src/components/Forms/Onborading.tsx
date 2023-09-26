import { orbitron, poppins } from "@/fonts/fonts";
import Button from "@/common/Button";
import React from "react";
import Image from "next/image";
// import { orbitron } from "@/fonts/fonts";

interface GetStartedProps {
  nextPage: () => void;
}

const Onboarding: React.FC<GetStartedProps> = ({ nextPage }) => {
  return (
    <div className={`w-[96%] tablet_l:w-[95%] mb-12 ${poppins.className} `}>
      <div>
        <div
          style={{
            background:
              "linear-gradient(134deg, rgba(255, 199, 44, 0.16) 4.92%, rgba(255, 199, 44, 0.00) 50%)",
          }}
          className="border-[2px] text-primary border-primary border-opacity-25 py-2 px-3 w-fit rounded-lg"
        >
          Ongoing{" "}
          <span className="text-[15px] font-[400] ml-3 text-gray-400">
            Upcoming
          </span>
        </div>
        <div className="mt-8 mb-16 flex justify-between w-[90%] tablet_l:w-[100%] laptop_l:w-[85%] flex-wrap gap-y-7 gap-x-3">
          <div
            className={`w-[100%] flex flex-col tablet_l:w-[47%] ${orbitron.className}`}
          >
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
                <div className="flex space-x-2 items-center mt-2 mb-6">
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
                    <p className="text-[12px]">Floor</p>
                    <p>0.05 ETH</p>
                  </div>
                  <div className="text-white">
                    <p className="text-[12px]">Total Volume</p>
                    <p>14.1K ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-[100%] flex flex-col tablet_l:w-[47%] ${orbitron.className}`}
          >
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
                <div className="flex space-x-2 items-center mt-2 mb-6">
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
                    <p className="text-[12px]">Floor</p>
                    <p>0.05 ETH</p>
                  </div>
                  <div className="text-white">
                    <p className="text-[12px]">Total Volume</p>
                    <p>14.1K ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-[100%] flex flex-col tablet_l:w-[47%] ${orbitron.className}`}
          >
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
                <div className="flex space-x-2 items-center mt-2 mb-6">
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
                    <p className="text-[12px]">Floor</p>
                    <p>0.05 ETH</p>
                  </div>
                  <div className="text-white">
                    <p className="text-[12px]">Total Volume</p>
                    <p>14.1K ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-[100%] flex flex-col tablet_l:w-[47%] ${orbitron.className}`}
          >
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
                <div className="flex space-x-2 items-center mt-2 mb-6">
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
                    <p className="text-[12px]">Floor</p>
                    <p>0.05 ETH</p>
                  </div>
                  <div className="text-white">
                    <p className="text-[12px]">Total Volume</p>
                    <p>14.1K ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className={`${orbitron.className} text-2xl tablet_l:text-3xl mb-3`}>
        Launchpad Project Application
      </h3>
      <p className="mb-10 text-white w-[100%] text-sm tablet_l:text-md laptop:w-[90%]">
        Turn your digital products/services into unique NFTs with just a few
        clicks. Choose your preferred blockchain, set the supply, and define
        rarity to create captivating digital assets.
      </p>
      <div className=" w-full">
        <Button
          className="bg-gradient-linear px-14 py-3 rounded-md"
          handleClick={nextPage}
        >
          Apply
        </Button>
        {/* <Button
          className="px-14 py-3 text-white"
          as="link"
          href="/guide"
          style={{
            border: "2px solid transparent",
            borderImage: "linear-gradient(to right, #702D6C, #FFC72C) 1",
          }}
        >
          Guide
        </Button> */}
      </div>
    </div>
  );
};

export default Onboarding;
