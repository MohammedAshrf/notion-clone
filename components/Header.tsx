"use client";

import { useUser } from "@clerk/nextjs";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { user } = useUser();
  //   const { signUp } = useSignUp();

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <>
          <h1 className="text-2xl">{user?.firstName + " 's"}</h1>
        </>
      )}

      {/* Bread clumbs */}
      <div></div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
