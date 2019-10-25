import { connection } from "./mysql";

export const loginBD = async (login, password) => {
  const conn = await connection;
  const [rows] = await conn.execute(
    "SELECT U.login, U.email, U.creation_date, JD.id_job_domain_pk, JD.label AS job_domain, " +
      "PS.id_path_step_pk, PS.label AS path_step, LS.id_legal_status_pk, LS.label AS legal_status, " +
      "SES.id_self_employed_status_pk, SES.label as self_employed_status " +
      "FROM users_table AS U " +
      "INNER JOIN job_domains AS JD ON U.id_job_domain_fk = JD.id_job_domain_pk " +
      "INNER JOIN path_steps AS PS ON U.id_path_step_fk = PS.id_path_step_pk " +
      "INNER JOIN legal_status AS LS ON U.id_legal_status_fk = LS.id_legal_status_pk " +
      "INNER JOIN self_employed_status AS SES ON U.id_self_employed_status_fk = SES.id_self_employed_status_pk WHERE login = " +
      conn.escape(login) +
      " AND password = " +
      conn.escape(password)
  );
  if (rows.length == 0) {
    return { error: "invalid login or password" };
  }
  return rows;
};

export const getPathSteps = async () => {
  const conn = await connection;
  const [rows] = await conn.execute("SELECT * FROM path_steps");
  return rows;
};

export const getLegalStatus = async () => {
  const conn = await connection;
  const [rows] = await conn.execute("SELECT * FROM legal_status");
  return rows;
};

export const getSelfEmployedStatus = async () => {
  const conn = await connection;
  const [rows] = await conn.execute("SELECT * FROM self_employed_status");
  return rows;
};

export const getJobDomains = async () => {
  const conn = await connection;
  const [rows] = await conn.execute("SELECT * FROM job_domains");
  return rows;
};

export const getCategories = async () => {
  const conn = await connection;
  const [rows] = await conn.execute("SELECT * FROM categories");
  return rows;
};
