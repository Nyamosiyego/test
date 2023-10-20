import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "@/components/spinner";
import Button from "@/components/button";

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
      <div className="flex flex-col items-start mt-20 lg:flex-row">
        <div className="px-4 lg:px-16 py-4 lg:w-3/4">
          <h1 className="font-bold text-2xl">{details.company}</h1>
          <h2 className="font-bold mt-2">{details.title}</h2>
          <p className="text-gray-500">{details.location}</p>
          {/* Render other details here */}
          <p className="mt-2">{details.description}</p>
          <Button>Apply</Button>
        </div>
        <div className="flex-1 ml-4 lg:ml-0">
          <h2 className="font-bold text-xl">Recommended Jobs</h2>
        </div>
      </div>
    </>
  );
};

export default JobsDetails;
