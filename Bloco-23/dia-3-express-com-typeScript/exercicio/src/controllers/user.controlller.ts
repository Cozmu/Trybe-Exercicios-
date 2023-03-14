import { Request, Response } from 'express';
import userSercice from '../services/user.service';

const listAllUsers = async (req: Request, res: Response) => {
  const users = await userSercice.getAllUsers();
  return res.status(200).json(users);
};

const listUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userSercice.getUserById(+id);
  if(!result) return res.status(404).json({ message: 'User not found!' });
  return res.status(200).json(result);
}

const userController = { listUserById, listAllUsers };

export default userController;