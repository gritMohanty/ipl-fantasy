const puppeteer = require("puppeteer");
import * as ipl from "../../../db/ipl";
import { NextRequest, NextResponse } from "next/server";

async function scrapData() {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the desired webpage
  await page.goto(
    "https://www.cricbuzz.com/live-cricket-scores/89710/lsg-vs-pbks-11th-match-indian-premier-league-2024"
  ); // Replace with your URL

  // Wait for the element with the specified class name to be present
  await page.waitForSelector(".cb-min-inf.cb-col-100.ng-scope"); //cb-min-inf cb-col-100 ng-scope

  // Get the element
  // const element = await page.$(".cb-min-inf.cb-col-100.ng-scope");

  // Do something with the element (e.g., extract text content)
  const data = await page.evaluate(() => {
    const divs = Array.from(
      document.querySelectorAll(".cb-min-inf.cb-col-100.ng-scope")
    );
    return divs.map((div) => div?.innerText);
  });

  const cleanedData = cleanData(data);

  // Close the browser
  await browser.close();
  // const { batting, bowling } = splitData(elementText);
  // const battingData = batting.map(parsePlayer);

  return cleanedData;
}

function cleanData(data) {
  const cleanedData = data.map((entry) => {
    const [type, ...data] = entry.split("\n");
    console.log(type, data);
    if (type.toLowerCase() === "batter") {
      const [name, runs, balls, fours, sixes, strikeRate] = data;
      return [
        {
          name: data[5],
          runs: parseInt(data[6]),
          balls_played: parseInt(data[7]),
          fours: parseInt(data[8]),
          sixes: parseInt(data[9]),
          strike_rate: parseFloat(data[10]),
        },
        {
          name: data[11],
          runs: parseInt(data[12]),
          balls_played: parseInt(data[13]),
          fours: parseInt(data[14]),
          sixes: parseInt(data[15]),
          strike_rate: parseFloat(data[16]),
        },
      ];
    } else if (type.toLowerCase() === "bowler") {
      return [
        {
          name: data[5],
          overs: parseInt(data[6]),
          maidens: parseInt(data[7]),
          runsGiven: parseInt(data[8]),
          wicketsTaken: parseInt(data[9]),
          economy: parseFloat(data[10]),
        },
        {
          name: data[11],
          overs: parseInt(data[12]),
          maidens: parseInt(data[13]),
          runsGiven: parseInt(data[14]),
          wicketsTaken: parseInt(data[15]),
          economy: parseFloat(data[16]),
        },
      ];
    }
  });

  return cleanedData;
}

export async function GET(
  req: NextRequest,
  context: {
    params: { matchId: number };
  }
) {
  const data = await scrapData();
  // const details = {
  //   performance_id: number;
  //   match_id: number;
  //   runs: number;
  //   balls_played: number;
  //   fours: number;
  //   sixes: number;
  //   strike_rate: number;
  //   maidens: number;
  //   wicket_taken: number;
  //   catch_outs: number;
  //   run_outs: number;
  //   player_id: number;
  // }
  // const resData = await ipl.updatePerformance(details);

  return NextResponse.json({ data }, { status: 200 });
}
