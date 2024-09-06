import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";

class User extends Model {
    public id!: string;
    public name!: string;
    public email!: string;
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

export default User;