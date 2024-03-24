"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { players } from "@/app/players";

export default function PlayerSelector() {
  const team1Players = players[0].players;
  const team1name = players[0].team;
  const team2Players = players[1].players;
  const team2name = players[1].team;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Dialog>
        <DialogTrigger className="rounded-md border p-2 mb-2">
          Add Player...
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose player you want to add</DialogTitle>
            <DialogDescription>
              <Command>
                <CommandInput placeholder="Type player name to search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading={team1name}>
                    {team1Players.map((player) => {
                      return (
                        <CommandItem key={player.name}>
                          {player.name}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading={team2name}>
                    {team2Players.map((player) => {
                      return (
                        <CommandItem key={player.name}>
                          {player.name}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
