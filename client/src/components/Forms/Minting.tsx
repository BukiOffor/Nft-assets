import { orbitron } from "@/fonts/fonts";
import EditableSection from "@/common/EditableSection";
import React, { useState } from "react";

const Minting: React.FC = () => {
  const [planText, setPlanText] = useState<string>("");
  const [preSaleText, setPreSaleText] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Minting Specifications
      </h2>
      <EditableSection
        title={"Number of Copies/Units to be Minted"}
        placeholder={"325"}
        onChangeHandler={(value: string): void => {
          setPlanText(value);
        }}
        subTitle="(Limited Edition or Open Edition)"
      />

      <EditableSection
        title={"Minting Format"}
        placeholder={"Image"}
        onChangeHandler={(value: string): void => {
          setPreSaleText(value);
        }}
        subTitle="(e.g., Image, Video, Audio)"
      />

      <EditableSection
        title={"File Specifications "}
        placeholder={"ighH"}
        onChangeHandler={(value: string): void => {
          setAdditionalInfo(value);
        }}
        subTitle="File Specifications and Formats for the NFT (e.g., Image Resolution, Video Quality, Audio Format)"
      />

      <h2 className={`${orbitron.className} text-primary text-2xl mt-9 mb-5`}>
        Pricing and Royalties:
      </h2>
      <EditableSection
        title={"Price"}
        placeholder={"4.5ETH"}
        onChangeHandler={(value: string): void => {
          setPlanText(value);
        }}
        subTitle="Proposed Price for Each NFT"
      />

      <EditableSection
        title={"Royalty Percentage for the Creator/Owner (if applicable)"}
        placeholder={"4.5ETH"}
        onChangeHandler={(value: string): void => {
          setPreSaleText(value);
        }}
        // subTitle="Royalty Percentage for the Creator/Owner (if applicable)"
      />
    </div>
  );
};

export default Minting;
