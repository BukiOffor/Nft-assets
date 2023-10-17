import React, { useState, useEffect } from "react";
import CollectionCard from "../CollectionCard";
import { orbitron } from "@/fonts/fonts";
import APIService from "@/http/api_service";
import Link from "next/link";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

const ProjectCollection = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    APIService.fetchAllProjects((response: any, error: any) => {
      if (error) {
        toast.error(error, { theme: "colored" });
      }
      const data = response?.data ?? [];
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="text-center mb-8 mt-6">
        <h2 className={`${orbitron.className} text-3xl text-white`}>
          Project Collection by NSMEs
        </h2>
        <p className="text-white">
          Check out all the latest projects from your favourite brand worldwide
        </p>
      </div>

      <div className="w-[85%] tablet:w-full mx-auto">
        {loading && (
          <div className="flex justify-center items-center my-4">
            <PulseLoader color="#fff" />
          </div>
        )}
        <div
          className={`grid grid-cols-1 tablet:grid-cols-2 tablet_l:grid-cols-3 text-white gap-6 ${orbitron.className}`}
        >
          {projects?.length &&
            projects?.slice(0, 6).map((item) => (
              <CollectionCard title={item?.title} source={item?.artwork[0]}>
                <div className="flex justify-between">
                  <div className="text-white">
                    <p>Floor</p>
                    <p>{parseFloat(item?.price)} ETH</p>
                  </div>
                  <div>
                    <p>Total Supply</p>
                    <p>{item?.supply}</p>
                  </div>
                </div>
                <Link href={`/projects/${item?._id}`}>
                  <div className="my-6 underline text-center">View Details</div>
                </Link>
              </CollectionCard>
            ))}
        </div>
        <div className="flex justify-end my-8">
          <Link href="/">
            <p className="underline text-white">See more</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCollection;
