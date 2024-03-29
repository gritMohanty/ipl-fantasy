import sql from "./postgres";

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

export async function isFirstTimeUser(email :string) {
  return await sql`SELECT * FROM user_info WHERE user_email = ${email};`;
}

export async function getMatchDetails(matchId: number) {
  return await sql`SELECT * FROM match WHERE match_id = ${matchId};`;
}


