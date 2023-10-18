import React from "react";
import Button from "@/common/Button";
import { orbitron } from "@/fonts/fonts";

type Props = {
  title: String;
  price: String;
};

const PurchaseCard = ({ title, price }: Props) => {
  const mintProject = () => {
    console.log("mint project");
  };

  return (
    <div
      className="px-6 py-10 w-[38%]"
      style={{
        background:
          "linear-gradient(134deg, rgba(255, 199, 44, 0.16) 4.92%, rgba(255, 199, 44, 0.00) 50%)",
        borderRadius: "10px",
        boxShadow: "-4px 12px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className={`${orbitron.className}`}>
        <h3 className="text-primary">{title}</h3>
        <h1 className="text-2xl">Package ###</h1>
      </div>

      <div className="mt-14 mb-16 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-lightGrey">Price(1)</p>
          <p className={`${orbitron.className}`}>{price} ETH</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lightGrey">You pay</p>
          <p className={`${orbitron.className}`}>0.05ETH</p>
        </div>
      </div>
      <Button
        className="bg-gradient-linear rounded-md px-24 py-2 text-[24px] w-full mb-2 px-2"
        handleClick={mintProject}
      >
        Mint
      </Button>

      <p className="text-[12px] text-justify mt-2 px-2">
        By clicking “Mint” you agree to the Nft Factory. Terms of Service. Each
        transaction will incur non-refundable gas fees.
      </p>
    </div>
  );
};

export default PurchaseCard;
