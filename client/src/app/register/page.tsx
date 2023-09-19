"use client";

import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import Endpoints from "@/http/endpoints";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { orbitron, poppins } from "../../fonts/fonts";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    brand_name: "",
    email: "",
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(Endpoints.REGISTER, formData)
      .then((response) => {
        setLoading(false);
        let message = response?.data?.message;
        toast.success(message, { theme: "colored" });
        router.push("/launchpad", { scroll: false });
      })
      .catch((error) => {
        let message = error?.response?.data?.error;
        toast.error(message, { theme: "colored" });
        setLoading(false);
      });
  };

  return (
    <>
      <TopNavigation />
      <div className="flex justify-center items-center h-screen md:mx-5">
        <div>
          <h3
            className={`${orbitron.className} text-center text-primary font-orbitron text-4xl`}
          >
            Register
          </h3>
          <form onSubmit={handleSubmit} className={`${poppins.className} mt-5`} method="POST">
            <label className="text-md">Brand name:</label>
            <input
              className="shadow appearance-none rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-3"
              name="brand_name"
              type="text"
              placeholder="Enter Brand name"
              value={formData.brand_name}
              onChange={handleFieldChange}
            />

            <label className="text-md">Email Address:</label>
            <input
              className="shadow appearance-none rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-3"
              name="email"
              type="email"
              placeholder="Enter Email address"
              value={formData.email}
              onChange={handleFieldChange}
            />
            <button
              type="submit"
              className="bg-gradient-linear outline-none w-full p-3 mt-5 rounded-md"
              style={orbitron.style}
            >
              {loading ? <ClipLoader color="text-white" /> : "Connect Wallet"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
