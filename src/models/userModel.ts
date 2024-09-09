import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import Task from './taskModel';
import Project from './projectModel';

class User extends Model {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public typeUser!: 'admin' | 'employee'; 
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        TypeUser: {
            type: DataTypes.ENUM('admin', 'employee'),
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'User,'
    }
);

User.hasMany(Task, { foreignKey: 'userId' });
User.hasMany(Project, { foreignKey: 'userId' });

export default User;