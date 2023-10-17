"use client";
import React, { useState, useEffect } from "react";
import { orbitron } from "@/fonts/fonts";
import Button from "@/common/Button";
import Image from "next/image";
import APIService from "@/http/api_service";
import { useSelector } from "react-redux";
import {
  getProject,
  getSales,
  getTeam,
  getArtworks,
  getSocial,
} from "@/reducers/userSlice";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

interface GetStartedProps {
  cancel: () => void;
  nextPage: () => void;
}

const ConfirmSubmit: React.FC<GetStartedProps> = ({ cancel, nextPage }) => {
  const project = useSelector(getProject);
  const sales = useSelector(getSales);
  const team = useSelector(getTeam);
  const artworks = useSelector(getArtworks);
  const socials = useSelector(getSocial);

  const [isChecked, setIsChecked] = useState(true);
  const [subcom, setSubcom] = useState(true);
  const [loading, setLoading] = useState(false);

  const check = () => {
    setIsChecked(!isChecked);
  };

  const closeComfimSubmit = () => {
    setSubcom(!subcom);
  };

  const handleProjectSubmit = () => {
    console.log("loading...");
    setLoading(true);
    const requestBody = {
      ...project,
      ...team,
      ...sales,
      ...artworks,
      ...socials,
    };
    APIService.createLaunchPackage(requestBody, (response: any, error: any) => {
      if (error) {
        setLoading(false);
        toast.error(error, { theme: "colored" });
        setSubcom(!subcom);
      }
      toast.success(response["message"], { theme: "colored" });
      setSubcom(!subcom);
      setLoading(false);
    });
  };

  return (
    <>
      {subcom && (
        <div className="fixed  flex h-[100dvh] left-0 top-0 l w-[100dvw]">
          <div
            onClick={closeComfimSubmit}
            className="absolute h-[100dvh] left-0 top-0 l w-[100dvw]  bg-[#1B0A1A]  bg-opacity-60"
          />
          <div className="relative z-10 w-[95%] py-16 rounded-2xl shadow-lg mx-auto mt-32 h-fit laptop_l:w-[1000px] bg-[#130712] ">
            <Image
              width={15}
              height={15}
              onClick={cancel}
              className="absolute top-6 right-7 cursor-pointer"
              src="/images/close.svg"
              alt="checked"
            />
            <h2
              className={`${orbitron.className} text-center text-primary text-3xl mb-5`}
            >
              Submission Instructions
            </h2>
            <p className="text-center text-sm w-[90%] tablet_l:w-[650px] mx-auto mt-5 ">
              Please fill out this form and submit it to [Typeform Submission
              Link]. Once we receive your application, our team will review it,
              and we'll get in touch with you for further steps. Please ensure
              that all required details are provided accurately to expedite the
              review process. Thank you for considering NFT Factory for minting
              and showcasing your unique products and services as NFTs. We look
              forward to collaborating with you!
            </p>
            <div className="flex justify-center my-10">
              <Button
                handleClick={handleProjectSubmit}
                className="bg-gradient-linear px-6 mb-5 py-3"
              >
                <div className="flex justify-between space-x-2">
                  {loading && (
                    <ClipLoader color="#fff" loading={loading} size={25} />
                  )}
                  <p>Submit</p>
                </div>
              </Button>
            </div>
            <div className="w-[90%] tablet_l:w-[650px] mx-auto flex items-start gap-3">
              {isChecked ? (
                <Image
                  width={25}
                  height={25}
                  onClick={check}
                  src="/images/checked.svg"
                  alt="checked"
                />
              ) : (
                <Image
                  width={25}
                  onClick={check}
                  height={25}
                  src="/images/unchecked.svg"
                  alt="checked"
                />
              )}

              <p className="text-center text-sm">
                By submitting this application, the NMSME/ Creator acknowledges
                that all information provided is accurate and agrees to comply
                with NFT Factory's policies and guidelines for minting and
                selling NFTs.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmSubmit;
