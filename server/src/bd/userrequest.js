import { connection } from "./mysql";

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
