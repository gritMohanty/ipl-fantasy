import { NextRequest, NextResponse } from "next/server";
import * as ipl from "../../../../db/ipl";

export async function GET(
  req: NextRequest,
  context: { params: { userId: number } }
) {
  const userData = await ipl.getUserInfo(context.params.userId);
  return NextResponse.json({ userData }, { status: 200 });
}



//reference

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ToDo[] | string>
// ) {
//   switch (req.method) {
//     case "GET":
//       const data = await todos.list();
//       console.log(data);
//       return res.status(200).json(await todos.list());
//     case "POST":
//       return res.status(201).json(await todos.create(req.body));
//     case "PUT":
//       const updated = await todos.update(req.body);
//       return res.status(updated.length > 0 ? 200 : 404).json(updated);
//     case "DELETE":
//       const removed = await todos.remove(req.body);
//       return res.status(removed.length > 0 ? 204 : 404).end();
//     default:
//       return res.status(405).send("Method Not Allowed");
//   }
// }
