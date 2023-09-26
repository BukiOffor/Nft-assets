"use client";
import Logo from "@/common/Logo";
import { poppins } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsCollection } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

interface ProfileSideBarProps {
  menuNav: () => void; // Define the prop type for menuNav
}

const ProfileSideBar: React.FC<ProfileSideBarProps> = ({ menuNav }) => {
  const pathName = usePathname();

  const navigationLinks = [
    {
      name: "Profile",
      icon: <CgProfile size={25} />,
      to: "#",
    },
    {
      name: "My Collections",
      icon: <BsCollection size={25} />,
      to: "#",
    },
    {
      name: "Notifications",
      icon: <IoMdNotifications size={25} />,
      to: "#",
    },
    {
      name: "Settings",
      icon: <IoMdNotifications size={25} />,
      to: "#",
    },
    {
      name: "Help Center",
      icon: <FiHelpCircle size={25} />,
      to: "#",
    },
    {
      name: "Language",
      icon: <BiWorld size={25} />,
      to: "#",
    },
  ];
  return (
    <div>
      <div
        className="pt-24 w-[11rem] laptop:w-[15rem] h-screen fixed"
        style={{
          background: "#130712",
          // width: "15%",
        }}
      >
        <div
          onClick={menuNav}
          className="absolute right-0  text-white top-16 cursor-pointer"
        >
          <AiOutlineMenu className="h-6 w-6 text-white items-center" />
        </div>
        <div className="flex flex-col">
          {navigationLinks.map(({ name, to, icon }) => (
            <Link
              key={name}
              href={to}
              className={`${poppins.className} text-sm`}
            >
              <div
                className="flex gap-4 w-full text-white items-center px-4 py-3"
                style={{
                  margin: ".6rem 0",
                  backgroundColor:
                    to === pathName ? "rgba(255, 199, 44, 0.12)" : "none",
                  borderRight: to === pathName ? "4px solid #FFC72C" : "none",
                }}
              >
                {icon}
                <p>{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
