"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { avatars } from "./avatars";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function CreateTeam() {
  const { data: session } = useSession();
  const [details, setDetails] = useState({
    avatar: "",
    teamName: "",
  });
  const addTeam = async () => {
    const data = await fetch("api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...details, email: session?.user?.email ?? "" }),
    });
    console.log(data)
  };
  return (
    <div className="flex justify-center mt-8">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Team</CardTitle>
          <CardDescription>
            Choose an avatar and give a name to your fantasy team.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-4 flex-wrap">
          {avatars.map((avatar) => (
            <Avatar
              key={avatar.id}
              onClick={() => {
                setDetails({ ...details, avatar: avatar.image });
              }}
              className={
                details.avatar === avatar.image
                  ? "border-4 border-gray-600"
                  : ""
              }
            >
              <AvatarImage src={avatar.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
          <Input
            id="name"
            placeholder="Name of your team"
            onChange={(e) =>
              setDetails({ ...details, teamName: e.target.value })
            }
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={addTeam}
            disabled={!(details.avatar && details.teamName)}
          >
            Create my team
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
