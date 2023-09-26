import Logo from "@/common/Logo";
import Link from "next/link";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { SiOpensea } from "react-icons/si";
const Footer = () => {
  return (
    <div
      style={{
        // display: "flex",
        background:
          "linear-gradient(134deg, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.00) 100%)",
      }}
      className="py-12 sticky top-0 bottom-auto"
    >
      <div className="flex justify-between gap-y-14 laptop:flex-row flex-col mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%]">
        <div className="">
          <div className="mb-3">
            <Logo height={60} />
          </div>
          <div className="mt-2 ">
            <h5 className="text-lg font-semibold text-primary">Socials</h5>
            <div className="mt-2 flex gap-5">
              <div className="flex items-center">
                <BsDiscord color="white" size={24} />
                <span className="text-white ml-2">Discord</span>
              </div>
              <div className="flex items-center">
                <SiOpensea color="white" size={24} />
                <span className="text-white ml-2">Open sea</span>
              </div>
              <div className="flex items-center">
                <BsTwitter color="white" size={24} />
                <span className="text-white ml-2">Twitter</span>
              </div>
            </div>

            <p className="text-white mt-3">nftfactory2@gmail.com</p>
          </div>
        </div>

        <div className="flex text-white gap-8 laptop:flex-row flex-col ">
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-primary text-[20px]">
              Marketplace
            </Link>
            <Link href="/" className="text-sm ">
              All NFTs
            </Link>
            <Link href="/" className="text-sm ">
              Consumeable
            </Link>
            <Link href="/" className="text-sm ">
              Reusable
            </Link>
            <Link href="/" className="text-sm ">
              Memberships
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-primary text-[20px]">
              My Account
            </Link>
            <Link href="/" className="text-sm ">
              Profile
            </Link>
            <Link href="/" className="text-sm ">
              Favorite
            </Link>
            <Link href="/" className="text-sm ">
              watchlist
            </Link>
            <Link href="/" className="text-sm ">
              My collections
            </Link>
            <Link href="/" className="text-sm ">
              Create
            </Link>
            <Link href="/" className="text-sm ">
              Settings
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-primary text-[20px]">
              Resources
            </Link>
            <Link href="/" className="text-sm ">
              Blog
            </Link>
            <Link href="/" className="text-sm ">
              Learn
            </Link>
            <Link href="/" className="text-sm ">
              Help center
            </Link>
            <Link href="/" className="text-sm ">
              Community standards
            </Link>
            <Link href="/" className="text-sm ">
              Taxes
            </Link>
            <Link href="/" className="text-sm ">
              Partners
            </Link>
            <Link href="/" className="text-sm ">
              Developer platform
            </Link>
            <Link href="/" className="text-sm ">
              Platform status
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-primary text-[20px]">
              Company
            </Link>
            <Link href="/" className="text-sm ">
              About
            </Link>
            <Link href="/" className="text-sm ">
              Careers
            </Link>
            <Link href="/" className="text-sm ">
              Ventures
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#FE7947] my-8 " />
      <div className=" text-white">
        <p className="text-center text-lg tracking-[1px]">
          Privacy Policy-Terms of Service
        </p>
        <p className="text-center text-sm mt-1 tracking-[1px] ">
          © Copyright 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
