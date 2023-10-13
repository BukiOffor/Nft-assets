import { CgProfile } from "react-icons/cg";
import { BsCollection } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

export const sideNavRoutes = [
    {
        name: "Launchpad",
        icon: "/images/rocket_launch.svg",
        to: "/launchpad",
    },
    {
        name: "Analytics",
        icon: "/images/trending-up.svg",
        to: "/analytics",
    },
    {
        name: "Notifications",
        icon: "/images/bell.svg",
        to: "/notification",
    },
];

export const profileRoutes = [
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