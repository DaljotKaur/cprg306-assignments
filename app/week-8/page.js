"use client";
import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context.js";

const Page = () => {
const { user ,  gitHubSignIn, firebaseSignOut } = useUserAuth();

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
            Welcome, Daljot Kaur 
          </p>
          <button onClick={handleSignOut}> </button>
          <Link href={"/week-8/shopping-list"}>Go to shopping list</Link>
        </div>
      )}
    </div>
  );
};

export default Page;