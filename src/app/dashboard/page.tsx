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

const notifications = [
  {
    title: "PKBS vs DD",
    description: "March 28",
  },
  {
    title: "CSK vs MI",
    description: "March 29",
  },
  {
    title: "RCB vs SRH",
    description: "April 2",
  },
];
type CardProps = React.ComponentProps<typeof Card>;
export default function Dashboard() {
  const { data: session } = useSession();
  console.log(session, "session etails");
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
            {notifications.map((notification, index) => (
              <Link href="/matches/1" key={index}>
                <div className=" flex items-center space-x-4 rounded-md border p-4 cursor-pointer">
                  <div className="flex-1 space-y-1">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
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
        <CardFooter>
          <Button className="w-full" variant="outline">
            <Link href="/configure">Configure teams for other matches</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
