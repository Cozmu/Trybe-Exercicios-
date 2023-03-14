import { IUsers } from '../interfaces';
import userModel from '../models/user.model';

const getAllUsers = async ():Promise<IUsers[]> => {
  const user = await userModel.findAll();
  return user;
}

const getUserById = async (id: number):Promise<IUsers> => {
  const result = await userModel.findById(id);
  return result;
} 

const userSercice = { getAllUsers, getUserById };

export default userSercice;