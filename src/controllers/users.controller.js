import { usersService } from "../services/index.js";

const getAllUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).send({ status: "success", payload: users });
};

const getUser = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  res.status(200).send({ status: "success", payload: user });
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    await usersService.create(newUser);
    res.status(201).send({ status: "success", payload: newUser });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  const result = await usersService.update(userId, updateBody);
  res.status(200).send({ status: "success", message: "User updated" });
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.uid;
    const result = await usersService.delete(userId);
    if (!result){ return res.status(404).send({ status: "error", error: "User not found" })}
    res.status(200).send({ status: "success", message: "User deleted" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  createUser,
  updateUser,
};
