import { connection } from "./mysql";

export const api_question = async (
  action,
  question,
  id_user,
  comments,
  status,
  id
) => {
  const conn = await connection;
  console.log(action);
  switch (action) {
    case "add":
      const sql =
        "INSERT INTO `questions`(`question`, `user_fk`, `status`, `comments`) " +
        "VALUES (" +
        conn.escape(question) +
        "," +
        id_user +
        ",'" +
        status +
        "'," +
        conn.escape(comments) +
        ")";

      const sql_rep = await conn.execute(sql);
      return sql_rep;
  }

  return { error: "invalid command" };
};
