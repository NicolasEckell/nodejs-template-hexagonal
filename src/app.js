import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import configRoutes from './app-router.js'

let app = express();

const configApp = () => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(logger("dev"));
	app.use(cors());

	configRoutes(app);
}

configApp();

export default app;