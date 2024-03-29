import { NextRequest, NextResponse } from "next/server";
import * as ipl from "../../../db/ipl";
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const body = {
    user_name: data.teamName,
    user_image: data.avatar,
    user_email: data.email,
  };
  const details = await ipl.addUserDetails(body);
  return NextResponse.json({ details }, { status: 200 });
}
