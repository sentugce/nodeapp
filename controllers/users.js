import { v4 as uuid } from "uuid";
import postgresClient from "../config/db.js"

export const userList = async (req, res) => {
  try {
    const text = "SELECT * FROM users ORDER BY id ASC"
    const { rows } = await postgresClient.query(text);
    return res.status(201).json(rows)
    //console.log(result);
  } catch (error) {
    console.log("Err accured", error.message);
    return res.status(400).json({ message: error.message })
  }
};

export const currentUserList = async (req, res) => {
  try {
    const { userId } = req.params;
    const text = "SELECT * FROM users WHERE id = $1"
    const values = [userId]
    const { rows } = await postgresClient.query(text, values);
    return res.status(201).json(rows)
    //console.log(result);
  } catch (error) {
    console.log("Err accured", error.message);
    return res.status(400).json({ message: error.message })
  }
};

export const createUser = async (req, res) => {
  try {
    const text = "INSERT INTO users (email,password,fullname) VALUES ($1,crypt($2,gen_salt('bf')),$3) RETURNING *"
    const values = [req.body.email, req.body.password, req.body.fullname]
    const { rows } = await postgresClient.query(text, values);
    const result = res.status(201).json({ createUser: rows[0] })
    console.log(result);
  } catch (error) {
    console.log("Err accured", error.message);
    return res.status(400).json({ message: error.message })
  }

};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const text = "UPDATE users SET email = $1, fullname = $2 WHERE id = $3 RETURNING *"
    const values = [req.body.email, req.body.fullname, userId]
    const { rows } = await postgresClient.query(text, values);
    const result = res.status(201).json({ updatedUser: rows[0] })
    console.log(result);
  } catch (error) {
    console.log("Err accured", error.message);
    return res.status(400).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const text = "DELETE FROM users WHERE id = $1 RETURNING *"
    const values = [userId]
    const { rows } = await postgresClient.query(text, values);
    const result = res.status(201).json({ deletedUser: rows[0] })
    console.log(result);
  } catch (error) {
    console.log("Err accured", error.message);
    return res.status(400).json({ message: error.message })
  }
};