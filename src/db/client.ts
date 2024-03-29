import postgres from "postgres";

class DBClient {
  public sql;
  private static instance: DBClient;
  private constructor() {
    this.sql = postgres(process.env.DATABASE_URL as string);
  }

  public static getInstance = () => {
    if (!DBClient.instance) {
      DBClient.instance = new DBClient();
    }
    return DBClient.instance;
  };
}

export default DBClient;

// import { PrismaClient } from '@prisma/client'

// class DBClient {
//   public prisma: PrismaClient
//   private static instance: DBClient
//   private constructor() {
//     this.prisma = new PrismaClient()
//   }

//   public static getInstance = () => {
//     if (!DBClient.instance) {
//       DBClient.instance = new DBClient()
//     }
//     return DBClient.instance
//   }
// }

// export default DBClient
// Then wherever I used the client I did:

// import DBClient from '../../database/client'
// const prisma = DBClient.getInstance().prisma
