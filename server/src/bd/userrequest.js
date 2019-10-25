import { connection } from "./mysql";

export const loginBD = async () => {
  const conn = await connection;
  const [rows] = await conn.execute("SELECT * FROM banana");
  for (let i = 0; i < rows.length; i++) {
    console.log(rows[i].firstname); //nom de la colonne
  }
  return rows;
};
