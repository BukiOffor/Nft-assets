"use client";
import React from "react";
import DropdownSelect from "@/common/Dropdown";
import FileUploader from "@/common/FileUploader";
import { orbitron, poppins } from "@/fonts/fonts";
import { getArtworks, setArtworks } from "@/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import EditableSection from "@/common/EditableSection";

const ArtworkDetailsForm: React.FC = () => {
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Metadata and Description
      </h2>
      <DropdownSelect
        item={["nft", "crypto"]}
        title={"Metadata and Description "}
        subTitle="Detailed Metadata and Description for the NFT (Title, Description, Tags, Keywords)"
        onChangeHandler={(value: string | number): void => {
          dispatch(setArtworks({ ...artworks, metadata: value }));
        }}
      />
      <EditableSection
        title={"Mint Price"}
        placeholder={"2000"}
        onChangeHandler={(value: string): void => {
          dispatch(setArtworks({ ...artworks, price: value }));
        }}
        subTitle="Enter mint price"
      />
      <EditableSection
        title={"Mint Supply"}
        placeholder={"325"}
        onChangeHandler={(value: string): void => {
          dispatch(setArtworks({ ...artworks, supply: value }));
        }}
        subTitle="Enter mint supply"
      />
      <div className={`${poppins.className} mb-5 flex flex-col`}>
        <h2 className=" block text-white text-sm font-bold mb-2">
          Upload Image
        </h2>
        <p className="text-sm text-gray-700">
          Upload Images, Videos, or Audio Files for the NFT
        </p>
        <FileUploader />
      </div>
    </div>
  );
};

export default ArtworkDetailsForm;
