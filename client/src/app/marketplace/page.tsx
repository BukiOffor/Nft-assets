"use client";
import TopNavigation from "@/common/navs/top/TopNavigation";
import React, { useState, useEffect } from "react";
import TrendingCollection from "@/components/marketplace/TrendingCollections";
import SearchCollection from "@/components/marketplace/SearchCollection";
import Footer from "@/components/Footer";
import NSMECollection from "@/components/marketplace/NSMECollection";
import TopSellers from "@/components/marketplace/TopSellers";
import { readFactoryContract, readSimpleCollectibleContract } from "@/utils";
import axios from "axios";

const MarketPlace: React.FC = () => {
  const [collections, setCollections] = useState<any[]>([]);
  const [owners, setOwners] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    console.log("jjj");
    readFactoryContract("getMarketPlaces").then((res) => {
      console.log(res);
      res.forEach((address: any) => {
        console.log(address);
        readSimpleCollectibleContract(address, "getData").then((data) => {
          console.log(data);
          data &&
            typeof data !== "string" &&
            setCollections((existingCollections) => [
              ...existingCollections,
              ...data,
            ]);
          readSimpleCollectibleContract(address, "name").then((name) => {
            console.log(name);
            name &&
              setNames((existingNames) => [...existingNames, String(name)]);
            data &&
              typeof data === "object" &&
              data.forEach((response: any) => {
                console.log(response, response.uri);
                axios.get(response.uri).then((axiosResponse) => {
                  console.log(axiosResponse);
                  setImages((existingImages) => [
                    ...existingImages,
                    axiosResponse.data.imageUrl,
                  ]);
                });
                readSimpleCollectibleContract(address, "getOwners", [
                  parseFloat(response.index),
                ]).then((owners) => {
                  owners && typeof owners !== "string"
                    ? setOwners(owners)
                    : setOwners([]);
                });
              });
          });
        });
      });
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <div className="mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
        <SearchCollection />
        <TrendingCollection
          collections={collections}
          owners={owners}
          names={names}
          images={images}
        />
        <NSMECollection
          collections={collections}
          owners={owners}
          names={names}
          images={images}
        />
        <TopSellers />
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
