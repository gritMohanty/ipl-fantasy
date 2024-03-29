import sql from "./postgres";

// export interface ToDo {
//   id: number;
//   text: string;
//   done: boolean;
// }

export async function listTeams() {
  return await sql`
    SELECT * FROM team`;
}

export async function listPlayers(teamId: number) {
  return await sql`SELECT * FROM player WHERE team_id = ${teamId}`;
}

export async function listMatches() {
  return await sql`SELECT * FROM match`;
}

export async function getUserInfo(userId: number) {
  return await sql`SELECT * FROM user_info WHERE user_id = ${userId}`;
}

export async function addUserDetails(details: {
  user_name: string;
  user_image: string;
  user_email: string;
}) {
  return await sql`
    INSERT INTO user_info (user_name, user_image, user_email) VALUES (${details.user_name}, ${details.user_image}, ${details.user_email}) 
    RETURNING user_id, user_name, user_image, user_email
  `;
}

// export async function create(todo: ToDo) {
//   return await sql<ToDo[]>`
//     INSERT INTO todos (text, done) VALUES (${todo.text}, false)
//     RETURNING id, text, done
//   `;
// }

// export async function update(todo: ToDo) {
//   return await sql<ToDo[]>`
//     UPDATE todos SET done=${todo.done} WHERE id=${todo.id}
//     RETURNING id, text, done
//   `;
// }

// export async function remove(todo: ToDo) {
//   return await sql<ToDo[]>`
//     DELETE FROM todos WHERE id=${todo.id}
//     RETURNING id, text, done
//   `;
// }
