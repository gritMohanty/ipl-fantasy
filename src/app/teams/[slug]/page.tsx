"use client"
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const playerData = [
  {
    name: "Player 1",
    runs: 24,
    balls: 23,
    fours: 4,
    sixes: 6,
    strikeRate: 200,
  },
  {
    name: "Player 1",
    runs: 24,
    balls: 23,
    fours: 4,
    sixes: 6,
    strikeRate: 200,
  },
  {
    name: "Player 1",
    runs: 24,
    balls: 23,
    fours: 4,
    sixes: 6,
    strikeRate: 200,
  },
  {
    name: "Player 1",
    runs: 24,
    balls: 23,
    fours: 4,
    sixes: 6,
    strikeRate: 200,
  },
  {
    name: "Player 1",
    runs: 24,
    balls: 23,
    fours: 4,
    sixes: 6,
    strikeRate: 200,
  },
];
export default function Team() {
  return (
    <div className="flex justify-center items-center mt-8 ">
      <Card className={cn("w-[100%] p-4 m-8")}>
        <CardTitle>Falcon Firefly</CardTitle>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>Player 1</p>
              <p>Batter</p>
              <p>12</p>
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Runs scored</TableHead>
                    <TableHead>Balls played</TableHead>
                    <TableHead>4s</TableHead>
                    <TableHead>6s</TableHead>
                    <TableHead>Strike Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {playerData.map((player) => (
                    <TableRow key={player.name}>
                      <TableCell className="font-medium">
                        {player.name}
                      </TableCell>
                      <TableCell>{player.runs}</TableCell>
                      <TableCell>{player.balls}</TableCell>
                      <TableCell>{player.fours}</TableCell>
                      <TableCell>{player.sixes}</TableCell>
                      <TableCell>{player.strikeRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}
