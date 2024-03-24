import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PlayerSelector from "@/_components/playerSelector";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Configure() {
  return (
    <div className="flex justify-center items-center m-8 flex-col">
      <Card className={cn("w-[100%] p-4")}>
        <CardTitle className="mb-8">Configure your team</CardTitle>
        <div className="rounded-md border p-4 mb-4">
          <Select>
            <SelectTrigger className="w-[100%] mb-4">
              <SelectValue placeholder="Tier I" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Batter</SelectItem>
              <SelectItem value="dark">Bowler</SelectItem>
              <SelectItem value="system">Fielder</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-col gap-2">
            <PlayerSelector />
            <PlayerSelector />
            <PlayerSelector />
          </div>
        </div>
        <div className="rounded-md border p-4 mb-4">
          <Select>
            <SelectTrigger className="w-[100%] mb-4">
              <SelectValue placeholder="Tier II" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Batter</SelectItem>
              <SelectItem value="dark">Bowler</SelectItem>
              <SelectItem value="system">Fielder</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-col gap-2">
            <PlayerSelector />
            <PlayerSelector />
          </div>
        </div>
        <div className="rounded-md border p-4">
          <Select>
            <SelectTrigger className="w-[100%] mb-4">
              <SelectValue placeholder="Tier III" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Batter</SelectItem>
              <SelectItem value="dark">Bowler</SelectItem>
              <SelectItem value="system">Fielder</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-col gap-2">
            <PlayerSelector />
          </div>
        </div>
      </Card>
      <Button className="mt-4 width-[100%]">
        <Link href="/dashboard">Continue</Link>
      </Button>
    </div>
  );
}
