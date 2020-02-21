import Sequelize from "sequelize";
import dbconfig from "./dbconfig";

const connection = new Sequelize(dbconfig);

export default connection;
