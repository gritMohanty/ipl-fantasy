"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

export default function PlayerSelector({
  team1 = [],
  team2 = [],
  team1Name = "",
  team2Name = "",
}: any) {
  // console.log(team1Name, team2Name)
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | number>("Select your player");
  const getPlayerTeam = () => {
    if (selectedPlayer === "Select your player") {
      return "No Player selected";
    } else {
      const findPlayerinTeam1 = team1Players.filter(
        (player) => player.player_id === selectedPlayer
      );

      const findPlayerinTeam2 = team2Players.filter(
        (player) => player.player_id === selectedPlayer
      );

      if (findPlayerinTeam1.length) return team1Name;
      if (findPlayerinTeam2.length) return team2Name;
    }
  };
  useEffect(() => {
    if (team1.length) setTeam1Players([...team1]);
    if (team2.length) setTeam2Players([...team2]);
  }, [team1, team2]);

  return (
    <div className="rounded-md border p-4">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <div className="flex flex-row gap-2 items-start">
            <span
              className={`flex h-2 w-2 rounded-full ${
                selectedPlayer === "Select your player"
                  ? "bg-red-500"
                  : "bg-lime-500"
              }  mt-1`}
            />
            <div className="space-y-2 flex flex-col justify-center items-start">
              <p className="text-sm font-medium leading-none">
                {selectedPlayer}
              </p>
              <p className="text-sm text-muted-foreground">{getPlayerTeam()}</p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[30%]">
          <DialogHeader>
            <DialogTitle>Add player</DialogTitle>
            <DialogDescription>
              Search your player and add to the tier.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                defaultValue=""
                className="col-span-3"
                placeholder="Search your player..."
                onChange={(e) => {
                  const filtered1 = team1.filter((player) =>
                    player.player_name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  );
                  const filtered2 = team2.filter((player) =>
                    player.player_name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  );
                  setTeam1Players([...filtered1]);
                  setTeam2Players([...filtered2]);
                }}
              />
            </div>
            <Separator />
            <div className="h-56 overflow-y-auto">
              <h4 className="mt-2 mb-2 text-sky-400">{team1Name}</h4>
              {team1Players?.map((player) => (
                <div
                  className="flex gap-4 p-2 items-center justify-between"
                  key={player.player_id}
                >
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {player.player_name}
                  </label>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedPlayer(player.player_id);
                    }}
                  >
                    Add
                  </Button>
                </div>
              ))}
              <Separator className="mt-2 mb-2" />
              <h4 className="mt-2 mb-2 text-sky-400">{team2Name}</h4>
              {team2Players?.map((player) => (
                <div
                  className="flex gap-4 p-2 items-center justify-between"
                  key={player.player_id}
                >
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {player.player_name}
                  </label>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedPlayer(player.player_id);
                    }}
                  >
                    Add
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
