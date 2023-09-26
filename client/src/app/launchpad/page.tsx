"use client";

import { useState } from "react";
import Button from "@/common/Button";
import SideBar from "@/common/navs/side/SideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Apply from "./apply/page";
import NavTools from "@/common/navs/NavTools";
import { AiOutlineMenu } from "react-icons/ai";

const LaunchPad = () => {
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
            : "relative w-[0rem]  h-screen"
        }
      >
        {Open ? (
          <>
            <SideBar menuNav={menuNav} />
          </>
        ) : (
          <div
            className="absolute top-11 text-white cursor-pointer"
            onClick={menuNav}
          >
            <AiOutlineMenu className="h-6 w-6 text-white items-center" />
          </div>
        )}
      </div>
      <div
        className={
          Open
            ? "mr-auto w-[70%] py-10"
            : "w-[97%] tablet_l:w-[94%] laptop_l:w-[89%]  max-w-[1280px] text-white mx-auto py-10 "
        }
      >
        <NavTools title="Launchpad" isMenu={true} />

        <Apply />
      </div>
    </div>
  );
};

export default LaunchPad;
