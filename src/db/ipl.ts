import DBClient from "./client";
const sql = DBClient.getInstance().sql;

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

export async function isFirstTimeUser(email: string) {
  return await sql`SELECT * FROM user_info WHERE user_email = ${email};`;
}

export async function getMatchDetails(matchId: number) {
  return await sql`SELECT * FROM match WHERE match_id = ${matchId};`;
}

export async function getTeamDetails(teamId: number) {
  return await sql`SELECT * FROM team WHERE team_id = ${teamId};`;
}

export async function updatePerformance(details: {
  performance_id: number;
  match_id: number;
  runs: number;
  balls_played: number;
  fours: number;
  sixes: number;
  strike_rate: number;
  maidens: number;
  wicket_taken: number;
  catch_outs: number;
  run_outs: number;
  player_id: number;
}) {
  return await sql`
  INSERT INTO performance (match_id, runs, balls_played, fours, sixes, strike_rate, maidens, wicket_taken, catch_outs, run_outs, player_id)
  VALUES (${details.match_id}, ${details.runs}, ${details.balls_played}, ${details.fours}, ${details.sixes}, ${details.strike_rate}, ${details.maidens}, ${details.wicket_taken}, ${details.catch_outs}, ${details.run_outs}, ${details.player_id})
  `;
}

export async function getPlayerId(playerName: string){
return await sql`SELECT player_id
FROM players
WHERE LOWER(player_name) = LOWER(${playerName});`;
}
