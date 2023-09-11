/* eslint-disable react/no-unescaped-entities */
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <>
      <div className="px-8 py-4">
        <header>
          <UserButton afterSignOutUrl="/" />
        </header>
        <div>Your page's content can go here.</div>
      </div>
    </>
  );
}
