import User from '../models/userModel';


class UserRepository  {
    async createUser(data: Partial<User>){
        return await User.create(data);
    }
    
    async getUserById(id:string){
        return await User.findByPk(id);
    }

    async getAllUsers(){
        return await User.findAll();
    }
    async updateUser(id:string, data: Partial<User>){
        const user = await User.findByPk(id);
        if(user){
            return await user.update(data);
        }
        return null;
    }
    async deleteUser(id: string) {
        const user = await User.findByPk(id);
        if (user) {
          return await user.destroy();
        }
        return null;
      }
}

export default new UserRepository;