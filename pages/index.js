/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/job");
  };

  return (
    <div className="px-8">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl">Looking for remote jobs don't look far</h1>
        <h2 className="text-2xl mt-2 mb-10">
          We have the best remote jobs for you
        </h2>
        <button
          onClick={handleClick}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Index;
