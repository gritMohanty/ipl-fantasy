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
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const isUserWithTeam = async () => {
    const data = await fetch(`api/checkUser/${session?.user?.email}`);
    const fetchedinfo = await data.json();
    return fetchedinfo;
  };
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    redirectLogic();
  }, [session]);

  const redirectLogic = async () => {
    if (session && session.user) {
      const data = await isUserWithTeam();
      if (data?.data?.length) router.push("/dashboard");
      else router.push("/createTeam");
    }
  };

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
