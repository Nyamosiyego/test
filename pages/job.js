/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Link from "next/link";
import { BsBookmarkFill } from "react-icons/bs";
import { Toaster, toast } from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import Spinner from "@/components/spinner";
import Swal from "sweetalert2";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isLoaded, isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setJobs(response.data);
        setIsLoading(false); // Set loading to false once jobs are fetched
      } catch (error) {
        console.error(error);
      }
    };

    const getBookmarks = async () => {
      try {
        if (user?.id) {
          const response = await axios.get(`/api/bookmarks?id=${user.id}`);
          setBookmarks(response.data.map((bookmark) => bookmark.JobId));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getJobs();
    getBookmarks();
  }, [user?.id]);

  const notify = () =>
    toast.success("Bookmark removed!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  const notify2 = () =>
    toast.success("Job Bookmarked!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  const toggleBookmark = async (jobId) => {
    try {
      const isBookmarked = bookmarks.includes(jobId);

      if (isBookmarked) {
        await axios.delete("/api/bookmarks", {
          data: {
            JobId: jobId,
            user: user?.id,
          },
        });
        setBookmarks((prevBookmarks) =>
          prevBookmarks.filter((id) => id !== jobId),
        );
        notify();
      } else {
        await axios.post("/api/bookmarks", {
          JobId: jobId,
          user: user?.id,
        });
        setBookmarks((prevBookmarks) => [...prevBookmarks, jobId]);
        notify2();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    // Show a loading indicator while jobs are being fetched
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 70,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
      <div className="px-8 py-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {jobs.length > 0 &&
            jobs.map((job) => (
              <div
                key={job._id}
                className="w-auto h-36 grid grid-flow-row auto-rows-3fr"
              >
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link href={`/jobs/${job._id}`}>
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {job.title}
                    </h5>
                    <p className="font-bold">{job.company}</p>
                    <p className="text-gray-500">{job.location}</p>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {job.description.length > 200
                      ? job.description.substring(0, 200) + "...."
                      : job.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/jobs/${job._id}`}
                      className="inline-flex items-center mt-14 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                    <button>
                      <BsBookmarkFill
                        className="w-6 h-6 mt-12"
                        style={{
                          color: bookmarks.includes(job._id) ? "black" : "grey",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleBookmark(job._id)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
