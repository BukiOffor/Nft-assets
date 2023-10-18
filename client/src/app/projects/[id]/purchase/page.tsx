"use client";

import React, {useState, useEffect} from "react";
import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { orbitron } from "@/fonts/fonts";
import { useSelector } from "react-redux";
import { getProjectItem } from "@/reducers/project_slice";
import PurchaseCard from "@/components/PurchaseCard";

const PurchasePage = () => {
    const projectItem = useSelector(getProjectItem);
    const [title] = useState(projectItem?.title);
    const [price] = useState(projectItem?.price);

  return (
    <>
      <TopNavigation />
      <div className="mt-24 mb-[4em]">
        {
            projectItem && 
        <div className="flex gap-8 gap-y-16 items-start space-x-10 flex-col tablet_l:flex-row mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
          <div className="mr-auto">
            {projectItem?.artwork && 
            <Image
              src={projectItem?.artwork[0] ?? "/images/nft-1.png"}
              alt="artwork"
              height={800}
              width={808}
              className="w-[100%] tablet_l:w-[350px] max-w-[400px]"
            />
            }
            <p
              className={`${orbitron.className} flex gap-3 tracking-wide items-center mt-3 `}
            >
              {projectItem?.title ?? "NFT Title"}
              <Image
                src="/images/badge-check.svg"
                alt=""
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
              />
            </p>
          </div>
          <PurchaseCard 
          title={title} 
          price={price} />
          </div>
        }
      </div>
      <Footer />
    </>
  );
};

export default PurchasePage;
