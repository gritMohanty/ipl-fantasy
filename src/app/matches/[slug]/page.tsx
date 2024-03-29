"use client"
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Match({ params }: { params: { slug: string } }) {
  return (
    <div className="flex justify-center items-center mt-8 ">
      <Card className={cn("w-[100%] p-4 m-8")}>
        <CardTitle className={cn("mb-8 mt-2")}>PKBS vs DD</CardTitle>
        <Link href="/teams/falcon-firefly">
          <div className="flex justify-between rounded-md border p-4 mb-4 items-center cursor-pointer">
            <div className="flex flex-start items-center gap-2">
              <Avatar>
                <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>Falcon Firefly</p>
            </div>
            <p>54</p>
          </div>
        </Link>

        <div className="flex justify-between rounded-md border p-4 mb-4 items-center cursor-pointer">
          <div className="flex flex-start items-center gap-2">
            <Avatar>
              <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Auggie Breader</p>
          </div>
          <p>25</p>
        </div>
      </Card>
    </div>
  );
}
