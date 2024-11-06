import { Button } from "@/components/ui/button";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      <h1>Home page</h1>
      <Button> Click Me</Button>
    </div>
  );
}
