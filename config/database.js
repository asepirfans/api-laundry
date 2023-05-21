import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config();
const db = new Sequelize("smartrinse_db","root","awan123",
    {
    host: "34.122.1.17",
    dialect: 'mysql'
    }
);

export default db;