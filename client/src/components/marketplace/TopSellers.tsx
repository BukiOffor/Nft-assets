import { orbitron } from "@/fonts/fonts";
import DateSelection from "../DateSelection";
import Image from "next/image";

const TopSellers = () => {
  return (
    <div className={`${orbitron.className} my-28`}>
      <h2 className="text-2xl text-center text-white">Top Sellers</h2>
      <div className="flex justify-center my-8">
        <DateSelection />
      </div>
      <div className="flex flex-wrap justify-between gap-x-8">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div
              className="flex space-x-4 mb-5 w-full tablet_l:w-[45%] bg-sidebar rounded-md px-4 py-2 items-center text-white"
              key={index}
              style={{
                border: "2px solid transparent",
                borderImage: "linear-gradient(to right, #702D6C, #FFC72C) 1",
              }}
            >
              <h2 className="text-white">{index + 1}.</h2>
              <Image
                src="/images/nft-7.png"
                alt=""
                height={40}
                width={40}
                className="rounded-full"
              />

              <div className="w-full text-white">
                <div className=" flex flex-row space-x-2">
                  <h3>Shoe Fac NFTs</h3>
                  <Image
                    src="/outline-badge.svg"
                    alt="badge"
                    height={30}
                    width={30}
                    priority
                  />
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs">Floor</p>
                    <p className="text-sm">0.05 ETH</p>
                  </div>
                  <div>
                    <p className="text-xs">24hrs Volume</p>
                    <p className="text-sm">12.19K ETH</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopSellers;
