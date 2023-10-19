import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "@/components/spinner";

const JobsDetails = () => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const [jobs, setJobs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = router.query;

  useEffect(() => {
    const getJobs = async () => {
      try {
        if (id) {
          const response = await axios.get(`/api/jobs?id=${id}`);
          setJobs(response.data);
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

  if (!jobs) {
    // Show a loading indicator while jobs are being fetched
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="mt-20 px-8">JobsDetails</div>
    </>
  );
};

export default JobsDetails;
