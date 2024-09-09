import Task from '../models/taskModel';


class TaskRepository  {
    async createTask(data: Partial<Task>){
        return await Task.create(data);
    }
    
    async getTaskById(id:string){
        return await Task.findByPk(id);
    }

    async getAllTask(){
        return await Task.findAll();
    }
    async updateTask(id:string, data: Partial<Task>){
        const task = await Task.findByPk(id);
        if(task){
            return await task.update(data);
        }
        return null;
    }
    async deleteTask(id: string) {
        const task = await Task.findByPk(id);
        if (task) {
          return await task.destroy();
        }
        return null;
      }
}

export default new TaskRepository;