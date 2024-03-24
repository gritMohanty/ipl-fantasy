"use client";

import { useState } from "react";

import { players } from "@/app/players";
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

export default function PlayerSelector({ tierType }: { tierType: string }) {
  const [team1Players, setTeam1Players] = useState(players[0].players);
  const team1name = players[0].team;
  const [team2Players, setTeam2Players] = useState(players[1].players);
  const team2name = players[1].team;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("Select your player");
  const getPlayerTeam = () => {
    if (selectedPlayer === "Select your player") {
      return "No Player selected";
    } else {
      const findPlayerinTeam1 = players[0].players.filter(
        (player) => player.name === selectedPlayer
      );

      const findPlayerinTeam2 = players[1].players.filter(
        (player) => player.name === selectedPlayer
      );

      if (findPlayerinTeam1.length) return team1name;
      if (findPlayerinTeam2.length) return team2name;
    }
  };
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
            <div className="space-y-2">
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
                  const filtered1 = players[0].players.filter((player) =>
                    player.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  );
                  const filtered2 = players[1].players.filter((player) =>
                    player.name
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
              <h4 className="mt-2 mb-2 text-sky-400">{team1name}</h4>
              {team1Players.map((player) => (
                <div className="flex gap-4 p-2 items-center justify-between">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {player.name}
                  </label>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedPlayer(player.name);
                    }}
                  >
                    Add
                  </Button>
                </div>
              ))}
              <Separator className="mt-2 mb-2" />
              <h4 className="mt-2 mb-2 text-sky-400">{team2name}</h4>
              {team2Players.map((player) => (
                <div className="flex gap-4 p-2 items-center justify-between">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {player.name}
                  </label>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedPlayer(player.name);
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
