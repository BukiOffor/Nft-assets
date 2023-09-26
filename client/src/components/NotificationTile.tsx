import React from "react";
import Image from "next/image";
import { orbitron } from "@/fonts/fonts";

interface NotificationTileProps {
  title: string;
  message: string;
  time: string;
  source: string;
}

const NotificationTile: React.FC<NotificationTileProps> = (props) => {
  const { title, message, time, source } = props;
  return (
    <div className="flex justify-between gap-2 mb-10 cursor-pointer">
      <div className="flex gap-4 ">
        <div>
          <Image src={source} height={60} width={60} alt={"profile-image"} />
        </div>
        <div className="flex flex-col">
          <h4 className={`${orbitron.className} text-lg laptop:text-xl`}>
            {title}
          </h4>
          <p className="text-sm laptop:text-md">{message}</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm">{time}</p>
    </div>
  );
};

export default NotificationTile;
