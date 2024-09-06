import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import User from "./userModel";
import Task from "./taskModel";

class Project extends Model {
    public id!: string;
    public projectName!: string;
    public deadlineDate!: Date;
    public createdAt!: Date;
    public updateAt!: Date;
    public userAcess!: 'admin' | 'employee';
    public taskList!: Task[];

    
}

Project.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deadlineDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updateAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        userAcess: {
            type: DataTypes.ENUM('admin', 'employee'),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'Project,'
    }
)

export default Project;