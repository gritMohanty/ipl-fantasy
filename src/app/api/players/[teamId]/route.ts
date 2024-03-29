import * as ipl from "../../../../db/ipl";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  context: { params: { teamId: number } }
) {
  const data = await ipl.listPlayers(context.params.teamId);
  return NextResponse.json({ data }, { status: 200 });
}
