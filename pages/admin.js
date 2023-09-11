import Navbar from "@/components/navbar";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Admin = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState();

    const router = useRouter();

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/jobs", {
            title,
            description,
            company,
            location,
            salary,
        });
        router.push("/job");
    };

  return (
    <>
      <Navbar />
      <div className="px-16 mt-20">
        <form className="flex flex-col mt-4 gap-2">
            <h1 className="text-2xl font-semibold">Create a new job</h1>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                id="description"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            <label htmlFor="company">Company</label>
            <input
                type="text"
                name="company"
                id="company"
                placeholder="Company"
                onChange={(e) => setCompany(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            <label htmlFor="location">Location</label>
            <input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            <label htmlFor="salary">Salary</label>
            <input
                type="number"
                name="salary"
                id="salary"
                placeholder="Salary"
                onChange={(e) => setSalary(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            <label htmlFor="link">Link</label>
            <input
                type="text"
                name="link"
                id="link"
                placeholder="Link"
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
