"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";

type Match = {
  match_id: number;
  match_name: string;
  first_team_id: number;
  second_team_id: number;
  winning_team_id: number;
  match_date: string;
};
export default function Dashboard() {
  const [matches, setMatches] = useState<Match[]>([]);
  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    const matchData: any = await fetch("api/matches");
    const matchList: { data: Match[] } = await matchData.json();
    setMatches(matchList?.data);
  };

  const getNewDate = (date: string) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toDateString();
    return formattedDate;
  };
  const { data: session } = useSession();
  if (!session) redirect("/");
  return (
    <main className="flex justify-center items-center mt-8">
      <Card className={cn("w-[100%] m-8")}>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription className="flex flex-row justify-between items-center">
            <p>Fixtures and performance</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[100%] p-4">
                <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-4">
            {matches?.map((match) => (
              <Link href={`/matches/${match.match_id}`} key={match.match_id}>
                <div className=" flex items-center space-x-4 rounded-md border p-4 cursor-pointer">
                  <div className="flex-1 space-y-1">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      {match.match_name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {getNewDate(match.match_date)}
                    </p>
                    <div className="flex flex-row justify-start gap-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Link href="/configure">Edit my team</Link>
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
