import express from "express";
import { createUser, userList, updateUser, deleteUser, currentUserList } from "../controllers/users.js";

const router = express.Router();
router.get('/usersList', userList);
router.post('/usersSave', createUser);
router.put('/usersUpdate/:userId', updateUser);
router.delete('/usersDelete/:userId', deleteUser);
router.get('/currentUser/:userId', currentUserList);
export default router;

