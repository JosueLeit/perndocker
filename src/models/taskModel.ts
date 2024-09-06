import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import User from "./userModel";
import Project from "./projectModel";

class Task extends Model {
    public id!: string;
    public title!: string;
    public description!: string;
    public deadlineDate!: Date;
    public priority!: 'low' | 'medium' | 'high';
    public userIdFk!: User;
    public projectIdFk!: Project;
    public createdAt!: Date;
    public updateAt!: Date;
    public status!: 'pending' | 'completed';
}

Task.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deadlineDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        priority: {
            type: DataTypes.ENUM('low', 'medium', 'high'),
            allowNull: false,
        },
        userIdFk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updateAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed'),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'Task,'
    }
)

export default Task;