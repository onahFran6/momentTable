"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <div className="flex-center flex-col flex h-screen  py-4">
      {" "}
      <div className="flex flex-col  justify-center items-center   ">
        <h1 className="head_text text-center orange_gradient font-bold">
          Contact Page
        </h1>
      </div>
    </div>
  );
};

export default Contact;
