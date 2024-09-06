import express, { Application} from "express";
import userRoutes from './routes/userRoutes';
import sequelize from './utils/database';

const app: Application = express();

app.use(express.json());
app.use('/api', userRoutes);

  const PORT = 3000;

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