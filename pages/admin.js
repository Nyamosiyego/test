/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "@/components/navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { set } from "mongoose";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState();
  const [refresh, setRefresh] = useState(false);

  const router = useRouter();
  const notify = () =>
    toast.success("Job created successfully!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  useEffect(() => {
    if (refresh) {
      const delay = 2000;
      setCompany("");
        setDescription("");
        setLocation("");
        setSalary("");
        setTitle("");
        setTimeout(() => {
            setRefresh(false);
            }
        , delay);
    }
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/jobs", {
      title,
      description,
      company,
      location,
      salary,
    });
    notify();
    setRefresh(true);
  };

  return (
    <>
      <Navbar />
      <div className="px-16 mt-20">
        <form className="flex flex-col mt-4 gap-2">
          <Toaster
            containerStyle={{
              top: 50,
              left: 20,
              bottom: 20,
              right: 20,
            }}
          />
          <h1 className="text-2xl font-semibold">Create a new job</h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            name="salary"
            id="salary"
            placeholder="Salary"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <label htmlFor="link">Link</label>
          <input
            type="text"
            name="link"
            id="link"
            placeholder="Link"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <button
            type="submit"
            onClick={formSubmit}
            className="w-36 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
