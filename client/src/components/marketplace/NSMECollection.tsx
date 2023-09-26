import React from "react";
import { orbitron } from "@/fonts/fonts";
import CollectionCard from "../CollectionCard";
import { nsmeCollection } from "@/data/collection";
import Link from "next/link";

type Props = {
  names: string[];
  images: string[];
  collections: any[];
  owners: any[];
};

const NSMECollection = ({ collections, owners, names, images }: Props) => {
  return (
    <div>
      <div className="text-center mb-8 mt-6">
        <h2 className={`${orbitron.className} text-3xl text-white`}>
          NFTs Collection by NSMEs
        </h2>
        <p className="text-white">
          Check out all the latest Product NFTs from your favourite brand
          worldwide
        </p>
      </div>

      <div className="w-[85%] tablet:w-full mx-auto">
        <div
          className={`grid grid-cols-1 tablet:grid-cols-2 tablet_l:grid-cols-3 text-white gap-6 ${orbitron.className}`}
        >
          {collections.map(({ mintFee, index }, i) => (
            <CollectionCard title={names[0]} source={images[0]}>
              <div className="flex justify-between">
                <div className="text-white">
                  <p>Floor</p>
                  <p>{parseFloat(mintFee) / 10 ** 18} ETH</p>
                </div>
                <div>
                  <p>Total Volume</p>
                  <p>{(parseFloat(mintFee) / 10 ** 18) * owners.length} ETH</p>
                </div>
              </div>
              <Link href={`/collections/${parseFloat(index) + 1}`}>
                <div className="my-6 underline text-center">View Details</div>
              </Link>
            </CollectionCard>
          ))}
        </div>
        <div className="flex justify-end my-8">
          <Link href="/">
            <p className="underline text-white">See more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NSMECollection;
