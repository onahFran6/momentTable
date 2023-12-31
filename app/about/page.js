"use client";

import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  console.log("===>>> About", { router: router });

  return (
    <div className="flex-center flex-col flex h-screen  py-4">
      {" "}
      <div className="flex flex-col  justify-center items-center   ">
        <h1 className="head_text text-center orange_gradient font-bold">
          About Page
          {/* <br className="max-md:hidden" /> */}
        </h1>
      </div>
    </div>
  );
};

export default About;
