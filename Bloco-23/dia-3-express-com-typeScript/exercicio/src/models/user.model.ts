import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces';
import connection from './connection';

const findAll = async ():Promise<IUsers[]> => {
  const [rows] = await connection.execute<IUsers[] & RowDataPacket[]>('SELECT id, name, email FROM Users');
  return rows;
}

const findById = async (id: number):Promise<IUsers> => {
  const result = await connection.execute<IUsers & RowDataPacket[]>
  ('SELECT id, name, email FROM Users WHERE id=?', [id]);
  const [rows] = result;
  return rows;
};

const createNewUser = async (body:IUsers):Promise<IUsers> => {
  const { name, email, password } = body;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO User (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  )
  return { id: insertId, ...body };
};

const userModel = { createNewUser, findAll, findById };

export default userModel;