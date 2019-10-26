import { sign } from "crypto";
import { connection } from "../bd/mysql";
import { decode } from "punycode";
const jwt = require("jsonwebtoken");

export const login = async (req, res) => {
  let userLogin = req.body.login;
  let password = req.body.password;
  console.log(req.body);
  const conn = await connection;
  const sql =
    "SELECT U.id_user_pk, U.login, U.email, U.creation_date, JD.id_job_domain_pk, JD.label AS job_domain, " +
    "PS.id_path_step_pk, PS.label AS path_step, LS.id_legal_status_pk, LS.label AS legal_status, " +
    "SES.id_self_employed_status_pk, SES.label as self_employed_status " +
    "FROM users_table AS U " +
    "INNER JOIN job_domains AS JD ON U.id_job_domain_fk = JD.id_job_domain_pk " +
    "INNER JOIN path_steps AS PS ON U.id_path_step_fk = PS.id_path_step_pk " +
    "INNER JOIN legal_status AS LS ON U.id_legal_status_fk = LS.id_legal_status_pk " +
    "INNER JOIN self_employed_status AS SES ON U.id_self_employed_status_fk = SES.id_self_employed_status_pk WHERE login = " +
    conn.escape(userLogin) +
    " AND password = " +
    conn.escape(password);
  console.log(sql);
  const [rows] = await conn.execute(sql);

  if (rows.length == 1) {
    // res.send("you are login");
    let row = rows[0];
    let roles = await getRoles(row.id_user_pk);
    const user = {
      id: row.id_user_pk,
      login: row.login,
      creation_date: row.creation_date,
      id_job_domain_pk: row.id_job_domain_pk,
      job_domain: row.job_domain,
      id_path_step_pk: row.id_path_step_pk,
      path_step: row.path_step,
      id_legal_status_pk: row.id_legal_status_pk,
      legal_status: row.legal_status,
      id_self_employed_status_pk: row.id_self_employed_status_pk,
      self_employed_status: row.self_employed_status,
      user_types: roles
    };
    console.log(user);
    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: "24h"
    });
    console.log("token!");
    res.send(token);
  } else {
    res.send({ error: "Error in login or password" });
  }
};

export const isLogin = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    console.log(decoded);
    next();
  } catch (err) {
    res.send({
      error: err.message
    });
  }
};

export const isCommunity = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    let ok = false;
    if (decoded.user_types.length > 0) {
      console.log(decoded.user_types);
      decoded.user_types.forEach(e => {
        if (
          e.label == "administrator" ||
          e.label == "specialist" ||
          e.label == "community"
        ) {
          ok = true;
        }
      });
    }
    if (!ok) {
      throw { error: "No authorization" };
    }
    console.log(decoded.user_types);
    next();
  } catch (err) {
    res.send({
      error: err.message
    });
  }
};

export const isSpecialist = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    let ok = false;
    if (decoded.user_types.length > 0) {
      console.log(decoded.user_types);
      decoded.user_types.forEach(e => {
        if (e.label == "administrator" || e.label == "specialist") {
          ok = true;
        }
      });
    }
    if (!ok) {
      throw { error: "No authorization" };
    }
    console.log(decoded.user_types);
    next();
  } catch (err) {
    res.send({
      error: err.message
    });
  }
};

export const isAdmin = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    let ok = false;
    if (decoded.user_types.length > 0) {
      console.log(decoded.user_types);
      decoded.user_types.forEach(e => {
        if (e.label == "administrator") {
          ok = true;
        }
      });
    }
    if (!ok) {
      throw { error: "No authorization" };
    }
    console.log(decoded.user_types);
    next();
  } catch (err) {
    res.send({
      error: err.message
    });
  }
};

const getRoles = async id => {
  const conn = await connection;
  const [rows] = await conn.execute(
    "SELECT * FROM `users_x_user_types` " +
      "INNER JOIN user_types ON users_x_user_types.id_user_type_fk = user_types.id_user_type_pk " +
      "WHERE id_user_fk = " +
      id
  );
  return Array.from(rows);
};
