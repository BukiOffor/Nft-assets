"use client";

import { useState } from "react";
import React from "react";
import SideBar from "@/common/navs/side/SideNavigation";
import { AiOutlineMenu } from "react-icons/ai";
import NavTools from "@/common/navs/NavTools";
import MarketTrend from "@/components/MarketTrend";
import Overview from "@/components/analytics/Overview";

const Analytics: React.FC = () => {
  const [Open, setOpen] = useState(true);

  const menuNav = () => {
    setOpen(!Open);
  };

  return (
    <div
      className={
        Open
          ? "flex flex-row gap-10  min-h-screen"
          : " flex flex-row min-h-screen gap-0 text-white"
      }
    >
      <div
        className={
          Open
            ? "w-[11rem] laptop:w-[15rem] h-screen"
            : "relative w-[0rem] text-white  h-screen"
        }
      >
        {Open ? (
          <SideBar menuNav={menuNav} />
        ) : (
          <div className="absolute top-11 cursor-pointer" onClick={menuNav}>
            <AiOutlineMenu className="h-6 w-6 items-center" />
          </div>
        )}
      </div>
      <div
        className={
          Open
            ? "mr-auto w-[90%] py-10"
            : "w-[95%] tablet_l:w-[94%] laptop_l:w-[89%]  max-w-[1280px] mx-auto py-10 text-white "
        }
      >
        <NavTools title="Analytics" isMenu={true} />
        <div className="w-[95%] mx-auto">
          <Overview />
          <MarketTrend />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
