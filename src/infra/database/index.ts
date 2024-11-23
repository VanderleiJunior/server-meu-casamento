import { Sequelize } from "sequelize";
import { config } from "../../main/config";
import { User } from "./models/User";
import { Marriage } from "./models/Marriage";

const sequelize = new Sequelize({
  database: config.database.database,
  username: config.database.username,
  password: config.database.password,
  host: config.database.host,
  port: config.database.port,
  dialect: "mysql",
  logging: false,
});

const tables = () => {
  User.initModel();
  Marriage.initModel();

  Marriage.belongsTo(User, { foreignKey: "userId", as: "user" });
  User.hasMany(Marriage, { foreignKey: "userId", as: "marriages" });
};

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    tables();
    console.log("Conexão com o banco de dados foi estabelecida com sucesso.");
    await sequelize.sync();
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
};

export { sequelize };
