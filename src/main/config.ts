import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "mydb",
  },
  salt: Number(process.env.SALT_ROUNDS) || 10,
  secret: process.env.SECRET,
  loginTime: process.env.LOGIN_TIME,
};
