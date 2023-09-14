/* eslint-disable react/no-unescaped-entities */
import MyApplications from "@/components/myapplications";
import Navbar from "@/components/navbar";
import { UserProfile } from "@clerk/nextjs";

export default function Account() {
  return (
    <>
      <Navbar />
      <div className="px-8 py-4 mt-28">
        <div className="flex justify-between">
          <div className="h-20">
            <MyApplications />
          </div>
          <div className="sm: px-5">
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  );
}
