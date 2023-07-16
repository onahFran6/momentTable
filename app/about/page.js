"use client";

import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  console.log("===>>> About", { router: router });

  return <div>About</div>;
};

export default About;
