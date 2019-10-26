import { connection } from "./mysql";
import { getPathSteps } from "./userrequest";
export const search = async query => {
  const conn = await connection;
  let sql_q_where = [];
  let sql_a_where = [];
  let sql_lt_where = [];
  let sql_tlt_where = [];
  console.log(query);
  let keywords = query.split(" ");
  keywords.forEach(e => {
    sql_q_where.push(
      "LCASE(question) LIKE CONCAT('%'," + conn.escape(e) + ",'%')"
    );
  });
  keywords.forEach(e => {
    sql_a_where.push(
      "LCASE(answer) LIKE CONCAT('%'," + conn.escape(e) + ",'%')"
    );
  });
  keywords.forEach(e => {
    sql_lt_where.push(
      "LCASE(legal_text) LIKE CONCAT('%'," + conn.escape(e) + ",'%')"
    );
  });
  keywords.forEach(e => {
    sql_tlt_where.push(
      "LCASE(title) LIKE CONCAT('%'," + conn.escape(e) + ",'%')"
    );
  });
  let sql_where =
    "(" +
    sql_q_where.join(" AND ") +
    ") OR " +
    "(" +
    sql_a_where.join(" AND ") +
    ") OR " +
    "(" +
    sql_lt_where.join(" AND ") +
    ") OR " +
    "(" +
    sql_tlt_where.join(" AND ") +
    ")";
  const sql =
    "SELECT id_question_pk, question, id_answer_pk, answer, id_legal_text_pk, legal_text, title " +
    "FROM questions AS Q " +
    "INNER JOIN answers AS A ON Q.id_question_pk = A.id_question_fk " +
    "INNER JOIN legal_texts AS LT ON LT.id_legal_text_pk = A.id_legal_text_fk " +
    "WHERE " +
    sql_where;
  const [sql_rep] = await conn.execute(sql);
  const regex = new RegExp("(" + keywords.join("|") + ")", "igm");
  const subst = `<strong>$1</strong>`;

  for (let i = 0; i < sql_rep.length; i++) {
    sql_rep[i].question = sql_rep[i].question.replace(regex, subst);
    sql_rep[i].answer = sql_rep[i].answer.replace(regex, subst);
    sql_rep[i].legal_text = sql_rep[i].legal_text.replace(regex, subst);
    sql_rep[i].title = sql_rep[i].title.replace(regex, subst);
    sql_rep[i].categories = await getCat(sql_rep[i].id_answer_pk);
    sql_rep[i].job_domains = await getJobs(sql_rep[i].id_answer_pk);
    sql_rep[i].path_steps = await getPaths(sql_rep[i].id_answer_pk);
    sql_rep[i].upvotes = await getUpvotes(sql_rep[i].id_answer_pk);
    sql_rep[i].downvotes = await getDownvotes(sql_rep[i].id_answer_pk);
  }
  return sql_rep;
};
const getUpvotes = async id => {
  const conn = await connection;
  let sql =
    "SELECT COUNT(*) as upvotes FROM votes WHERE type = 'up-vote' AND id_answer_fk = " +
    id.toString();

  const [rows] = await conn.execute(sql);
  return rows[0].upvotes;
};
const getDownvotes = async id => {
  const conn = await connection;
  let sql =
    "SELECT COUNT(*) as downvotes FROM votes WHERE type = 'down-vote' AND id_answer_fk = " +
    id.toString();

  const [rows] = await conn.execute(sql);
  return rows[0].downvotes;
};
const getCat = async id => {
  const conn = await connection;
  let sql =
    "SELECT * FROM categories " +
    "INNER JOIN answers_x_categories ON categories.id_categorie_pk = answers_x_categories.id_categorie_fk " +
    " WHERE id_answer_fk = " +
    id.toString();

  const [rows] = await conn.execute(sql);
  return rows;
};
const getJobs = async id => {
  const conn = await connection;
  let sql =
    "SELECT * FROM job_domains " +
    "INNER JOIN answers_x_job_domains ON job_domains.id_job_domain_pk = answers_x_job_domains.id_job_domain_fk " +
    " WHERE id_answer_fk = " +
    id.toString();

  const [rows] = await conn.execute(sql);
  return rows;
};
const getPaths = async id => {
  const conn = await connection;
  let sql =
    "SELECT * FROM path_steps " +
    "INNER JOIN answers_x_path_steps ON path_steps.id_path_step_pk = answers_x_path_steps.id_path_step_fk " +
    " WHERE id_answer_fk = " +
    id.toString();

  const [rows] = await conn.execute(sql);
  return rows;
};
export const api_question = async (
  action,
  question,
  id_user,
  comments,
  status,
  id
) => {
  const conn = await connection;
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
/*
SELECT id_question_pk, question, id_answer_pk, answer, id_legal_text_pk, legal_text, C.label AS categories FROM questions AS Q

INNER JOIN answers AS A ON Q.id_question_pk = A.id_question_fk
INNER JOIN legal_texts AS LT ON LT.id_legal_text_pk = A.id_legal_text_fk
INNER JOIN answers_x_categories AS AC ON AC.id_answer_fk = A.id_answer_pk
INNER JOIN categories AS C ON C.id_categorie_pk = AC.id_categorie_fk

WHERE LCASE(question) LIKE '%et%' OR LCASE(answer) LIKE '%et%'
*/
