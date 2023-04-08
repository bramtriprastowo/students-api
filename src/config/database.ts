import { Sequelize } from "sequelize";

const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} = process.env;
export const db = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});


(async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();