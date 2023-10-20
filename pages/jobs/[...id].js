import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "@/components/spinner";

const JobsDetails = () => {
  const router = useRouter();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = router.query;

  useEffect(() => {
    const getJobs = async () => {
      try {
        if (id) {
          const response = await axios.get(`/api/jobs?id=${id}`);
          const job = response.data; // Assuming response.data is the job object
          console.log(job);
          setDetails(job);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    };

    getJobs();
  }, [id]);

  if (isLoading) {
    // Show a loading indicator while data is being fetched
    return <Spinner />;
  }

  if (!details || Object.keys(details).length === 0) {
    // Show a message or handle the case where there is no job data
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-row items-start mt-20">
        <div className="ml-4">
          <h2 className="font-bold">Recommended Jobs</h2>
        </div>
        <div className="flex-1 px-16 py-4 lg:w-3/5 sm:min-w-full">
          <h1 className="font-bold text-2xl">{details.company}</h1>
          <h2 className="font-bold mt-3">{details.title}</h2>
          <p className="text-gray-500">{details.location}</p>
          {/* Render other details here */}
          <p className="mt-3">{details.description}</p>
        </div>
      </div>
    </>
  );
};

export default JobsDetails;
