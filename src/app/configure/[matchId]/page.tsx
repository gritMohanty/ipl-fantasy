"use client";
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
import { useEffect, useState } from "react";

export default function Configure({ params }: { params: { matchId: number } }) {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");
  useEffect(() => {
    getMatchDetails();
  }, []);
  const getMatchDetails = async () => {
    const data = await fetch(`/api/matches/${params.matchId}`);
    const details = await data.json();
    getPlayers(
      details?.data?.[0]?.first_team_id,
      details?.data?.[0]?.second_team_id
    );
    getTeamNames(
      details?.data?.[0]?.first_team_id,
      details?.data?.[0]?.second_team_id
    );
  };
  const getPlayers = async (team1: number, team2: number) => {
    const data1 = await fetch(`/api/players/${team1}`);
    const team1Players = await data1.json();
    const data2 = await fetch(`/api/players/${team2}`);
    const team2Players = await data2.json();
    setTeam1(team1Players?.data);
    setTeam2(team2Players?.data);
  };
  const getTeamNames = async (team1: number, team2: number) => {
    const data1 = await fetch(`/api/teams/${team1}`);
    const team1DataName = await data1.json();
    const data2 = await fetch(`/api/teams/${team2}`);
    const team2DataName = await data2.json();
    setTeam1Name(team1DataName?.data?.[0]?.team_name);
    setTeam2Name(team2DataName?.data?.[0]?.team_name);
  };
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
            <PlayerSelector
              team1={team1}
              team2={team2}
              team1Name={team1Name}
              team2Name={team2Name}
            />
            <PlayerSelector
              team1={team1}
              team2={team2}
              team1Name={team1Name}
              team2Name={team2Name}
            />
            <PlayerSelector
              team1={team1}
              team2={team2}
              team1Name={team1Name}
              team2Name={team2Name}
            />
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
            <PlayerSelector
              team1={team1}
              team2={team2}
              team1Name={team1Name}
              team2Name={team2Name}
            />
            <PlayerSelector
              team1={team1}
              team2={team2}
              team1Name={team1Name}
              team2Name={team2Name}
            />
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
            <PlayerSelector
              team1={team1}
              team2={team2}
              team1Name={team1Name}
              team2Name={team2Name}
            />
          </div>
        </div>
      </Card>
      <Button className="mt-4 width-[100%]">
        <Link href="/dashboard">Continue</Link>
      </Button>
    </div>
  );
}
