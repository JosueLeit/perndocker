import UserRepository from '../../repositories/userRepository';

// export default async function createUser(name: string, email: string, password: string) {
//   const userRepository = new UserRepository(); // Add constructor to UserRepository class
//   const user = await userRepository.create(name, email, password);
//   return user;
// }
import userRepository from '../../repositories/userRepository';

class UserService {
  async createUser(data: any) {
    return await userRepository.createUser(data);
  }

  async getAllUsers() {
    return await userRepository.getAllUsers();
  }

  // Outros métodos de serviço
}

export default new UserService();
