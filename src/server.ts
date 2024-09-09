import express, { Application} from "express";
import userRoutes from './routes/userRoutes';
import sequelize from './utils/database';
import { authenticationMiddleware } from "./middleware/authMiddleware";
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();

app.use(express.json());
app.use(authenticationMiddleware);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  
    app.listen(PORT, () :void =>{
      console.log(`Server is running on port ${PORT}`);
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();