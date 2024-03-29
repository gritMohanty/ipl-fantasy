"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Home = () => {
   const { data: session } = useSession();
   if(session && session.user) redirect('/dashboard')
  return (
    <div className="flex justify-center mt-8">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign in to fantasy IPL 2024</CardTitle>
          <CardDescription>
            You need to sign in with your google account.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button onClick={() => signIn()}>Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
