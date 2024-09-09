import Project from '../models/projectModel';


class ProjectRepository  {
    async createProject(data: Partial<Project>){
        return await Project.create(data);
    }
    
    async getProjectById(id:string){
        return await Project.findByPk(id);
    }

    async getAllProjects(){
        return await Project.findAll();
    }
    async updateProject(id:string, data: Partial<Project>){
        const project = await Project.findByPk(id);
        if(project){
            return await project.update(data);
        }
        return null;
    }
    async deleteProject(id: string) {
        const project = await Project.findByPk(id);
        if (project) {
          return await project.destroy();
        }
        return null;
      }
}

export default new ProjectRepository;