import Navbar from "@/components/navbar";
import React from "react";
import { useUser } from "@clerk/nextjs";

const JobsDetails = () => {
  const { isSignedIn, user } = useUser();
  return (
    <>
      <Navbar />
      <div className="mt-20 px-8">JobsDetails</div>
    </>
  );
};

export default JobsDetails;
