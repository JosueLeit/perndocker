import userRepository from "../../repositories/userRepository";

class UserService {
  async createUser(data: any) {
    return await userRepository.createUser(data);
  }

  async getAllUsers() {
    return await userRepository.getAllUsers();
  }

  
}


export default new UserService();
