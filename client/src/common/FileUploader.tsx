import Endpoints from "@/http/endpoints";
import { getArtworks, setArtworks } from "@/reducers/userSlice";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const FileUploader = () => {
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);
  const fileRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [artwork, setArtwork] = useState<null | string>();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    axios
      .post(Endpoints.UPLOAD_IMAGE, formData)
      .then((response) => {
        setLoading(false);
        if (response?.data) {
          const [artworkUrl] = response?.data?.data;
          setArtwork(artworkUrl);
          dispatch(setArtworks({ ...artworks, artwork: [artworkUrl] }));
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center mb-5 overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        height: "200px",
        borderRadius: "0.75rem",
        boxShadow: "-2px 0px 4px 0px rgba(255, 199, 44, 0.08)",
        backdropFilter: "blur(4px)",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileRef}
        multiple
      />

      {!loading ? (
        artwork ? (
          <Image
            src={`${artwork}`}
            alt="artwork url"
            layout="responsive"
            width={100}
            height={100}
            style={{ background: "#fff" }}
          />
        ) : (
          <div className="mb-2">
            <FontAwesomeIcon
              icon={faPlus}
              style={{ fontSize: "4rem", fontWeight: 300 }}
            />
          </div>
        )
      ) : (
        <ClipLoader color="#105BC9" size={15} />
      )}
      <p className="text-opacity-25 p-6">
        {artwork ? "Change" : "Upload"} Artwork
      </p>
    </div>
  );
};

FileUploader.displayName = "FileUploader";
export default FileUploader;
