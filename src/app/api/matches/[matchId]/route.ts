import * as ipl from "../../../../db/ipl";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  context: {
    params: { matchId: number },
  },
) {
  const data = await ipl.getMatchDetails(context.params.matchId);
  return NextResponse.json({ data }, { status: 200 });
}
