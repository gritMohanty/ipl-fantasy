import * as ipl from "../../../db/ipl";
import { NextResponse } from "next/server";
export async function GET() {
  const data = await ipl.listMatches();
  return NextResponse.json({ data }, { status: 200 });
}
