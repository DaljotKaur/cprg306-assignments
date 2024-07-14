"use client";
import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {!user && <button onClick={handleSignIn}>Login with GitHub</button>}
      {user && (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <Link href={"/week-8/shopping-list"}>Go to shopping list</Link>
        </div>
      )}
    </div>
  );
};

export default Page;