import { SignIn } from "@clerk/nextjs";
import Navbar from "../../components/navbar";
 
export default function Page() {
  return <div className="flex items-center justify-center mt-32">
    <Navbar />
    <SignIn />
  </div>;
}