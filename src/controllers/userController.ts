import {Request, Response} from 'express';
import userService from '../useCases/user/createUser';

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.createUser(req.body);
      const { name, email, role } = req.body;
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}

export default new UserController();