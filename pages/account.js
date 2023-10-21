/* eslint-disable react/no-unescaped-entities */
import MyApplications from "@/components/myapplications";
import Navbar from "@/components/navbar";
import SavedApplications from "@/components/savedapplications";
import { UserProfile } from "@clerk/nextjs";

export default function Account() {
  return (
    <>
      <Navbar />
      <div className="px-8 py-4 mt-20">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex md:flex-row gap-8 lg:flex-col flex-col">
            <div className="lg:h-20">
              <MyApplications />
            </div>
            <div className="lg:mt-24 lg:h-20">
              <SavedApplications />
            </div>
          </div>
          <div className="lg:px-5 mt-10 lg:mt-0 flex items-center justify-center">
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  );
}
