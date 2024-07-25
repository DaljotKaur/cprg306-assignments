"use client";
import React from "react";
import Link from "next/link";
import { useUserAuth } from "../week-8/_utils/auth-context"; // Adjusted import path

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
          <div>
            <button onClick={handleSignOut}> Sign Out  </button>
            </div>
            <div>
          <Link href={"/week-8/shopping-list"}>Go to shopping list</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;