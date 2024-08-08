// import "reflect-metadata";
import express from 'express';
import sequelize from './config/db';
import { config } from 'dotenv';
import { router } from './routes/Router';

config();
const { PORT } = process.env;
const app = express();
app.use(express.json());
app.use("/api", router);

const startServer = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync({force: true});
		
		app.listen(PORT, () => {
			console.log("Server running on port " + PORT);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

startServer();