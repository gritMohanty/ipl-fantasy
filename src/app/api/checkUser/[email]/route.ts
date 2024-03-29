import * as ipl from "../../../../db/ipl";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  context: { params: { email: string } }
) {
  const data = await ipl.isFirstTimeUser(context.params.email);
  return NextResponse.json({ data }, { status: 200 });
}
