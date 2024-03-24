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
  return (
    <main className="flex justify-center items-center mt-8">
      <Card className={cn("w-[100%] m-8")}>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Fixtures and performance</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-4">
            {notifications.map((notification, index) => (
              <Link href="/dashboard/1" key={index}>
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
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            {/* <Check className="mr-2 h-4 w-4" /> Mark all as read */}Configure
            teams for other matches
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
