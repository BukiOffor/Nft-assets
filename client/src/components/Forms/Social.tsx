import EditableSection from "@/common/EditableSection";
import { orbitron } from "@/fonts/fonts";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSocial, setSocial } from "@/reducers/userSlice";

const Social: React.FC = () => {
  const dispatch = useDispatch();
  const socials = useSelector(getSocial);
  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Social Media and Online Presence
      </h2>
      <EditableSection
        title={"Online Portfolios"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          dispatch(setSocial({ ...socials, portfolio: value }));
        }}
        subTitle="(if available)"
      />

      <EditableSection
        title={"Links to Social Media Profiles"}
        placeholder={"https://socialmedia##"}
        onChangeHandler={(value: string): void => {
          dispatch(setSocial({ ...socials, social: value }));
        }}
        subTitle="(e.g., Image, Video, Audio)"
      />

      <EditableSection
        title={
          "Any Past Experience or Achievements Relevant to the Product/Service"
        }
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          dispatch(setSocial({ ...socials, achievements: value }));
        }}
        subTitle="File Specifications and Formats for the NFT (e.g., Image Resolution, Video Quality, Audio Format)"
      />

      <h2 className={`${orbitron.className} text-primary text-2xl mt-9 mb-5`}>
        Additional Information
      </h2>
      <EditableSection
        title={"Additional Information"}
        placeholder={"4.5ETH"}
        onChangeHandler={(value: string): void => {
          dispatch(setSocial({ ...socials, additional_information: value }));
        }}
        subTitle="Any Additional Information or Comments the NMSME / Creator Would Like to Provide"
      />
    </div>
  );
};

export default Social;
