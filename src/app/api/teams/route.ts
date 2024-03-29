import * as ipl from "../../../db/ipl";
import { NextResponse } from "next/server";
export async function GET() {
  const data = await ipl.listTeams();
  return NextResponse.json({ data }, { status: 200 });
}
