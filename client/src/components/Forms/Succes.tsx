"use client";
import React, { useState } from "react";
import { orbitron } from "@/fonts/fonts";
import Button from "@/common/Button";
import Image from "next/image";
import Link from "next/link";

interface GetStartedProps {
  cancel: () => void;
}

const Succes: React.FC<GetStartedProps> = ({ cancel }) => {
  const [isChecked, setIsChecked] = useState(true);

  const check = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="w-[95%] py-16 rounded-2xl shadow-lg mx-auto  h-fit max-w-[900px]">
        <h2
          className={`${orbitron.className} text-center text-primary text-3xl mb-5`}
        >
          Your Application have been recieved
        </h2>
        <p className="text-center text-sm w-[95%] max-w-[700px] mx-auto mt-5 ">
          Thank you for choosing NFT Factory! Once we receive your completed
          application form, our team will review the details provided and reach
          out to you with further instructions on the minting process. If you
          have any questions, feel free to reach out to us at [Contact
          Email/Phone Number].
        </p>
        <div className="flex justify-center my-10">
          <Link
            className="bg-gradient-linear px-6 mb-5 py-3 rounded-md"
            href="/marketplace"
          >
            Marketplace
          </Link>
        </div>
      </div>
    </>
  );
};

export default Succes;
