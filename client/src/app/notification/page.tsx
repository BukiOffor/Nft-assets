"use client";

import { useState } from "react";

import NavTools from "@/common/navs/NavTools";
import SideBar from "@/common/navs/side/SideNavigation";
import NotificationTile from "@/components/NotificationTile";
import { notificationsData } from "@/data/notification";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import React from "react";

const Notification: React.FC = () => {
  const [Open, setOpen] = useState(true);

  const menuNav = () => {
    setOpen(!Open);
  };

  return (
    <div
      className={
        Open
          ? "flex flex-row gap-10  min-h-screen"
          : " flex flex-row min-h-screen gap-0"
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
            ? "mr-auto w-[70%] py-10"
            : "w-[97%] tablet_l:w-[94%] laptop_l:w-[89%]  max-w-[1280px] mx-auto py-10 "
        }
      >
        <NavTools title="Notifications" isMenu={true} />
        <div className="mr-3">
          <div className="flex justify-end mb-10 mt-14">
            <p className="text-primary">mark all as read</p>
          </div>

          {notificationsData.map(
            ({ title, message, duration, profile }, index) => (
              <div className="text-white">
                <NotificationTile
                  key={index}
                  title={title}
                  message={message}
                  time={duration}
                  source={profile}
                />
              </div>
            ),
          )}

          <div className="flex justify-end mb-10 mt-14">
            <Link href="/marketplace">
              <p className="text-primary">Go to Marketplace</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Notification;
