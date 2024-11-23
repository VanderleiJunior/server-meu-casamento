import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../index";
import { User } from "./User";

interface MarriageAttributes {
  id: number;
  person1: string;
  person2: string;
  numberGuests: number;
  party: string;
  religious: string;
  honeyMoon: string;
  season: string;
  religion: string;
  city: string;
  style: string;
  time: string;
  local: string;
  budget: number;
  localHoneyMoon?: string;
  userId: number; // Chave estrangeira para o User
}

interface MarriageCreationAttributes
  extends Optional<MarriageAttributes, "id"> {}

class Marriage
  extends Model<MarriageAttributes, MarriageCreationAttributes>
  implements MarriageAttributes
{
  public id!: number;
  public person1!: string;
  public person2!: string;
  public numberGuests!: number;
  public party!: string;
  public religious!: string;
  public honeyMoon!: string;
  public season!: string;
  public religion!: string;
  public city!: string;
  public style!: string;
  public time!: string;
  public local!: string;
  public budget!: number;
  public localHoneyMoon?: string;
  public userId!: number;

  static initModel() {
    Marriage.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        person1: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        person2: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        numberGuests: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        party: {
          type: DataTypes.STRING(1), // "Y" ou "N"
          allowNull: false,
        },
        religious: {
          type: DataTypes.STRING(1), // "Y" ou "N"
          allowNull: false,
        },
        honeyMoon: {
          type: DataTypes.STRING(1), // "Y" ou "N"
          allowNull: false,
        },
        season: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        religion: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        style: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        time: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        local: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        budget: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        localHoneyMoon: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "user_id",
          references: {
            model: User, // Referencia o modelo User
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        sequelize,
        modelName: "Marriage",
        tableName: "marriages",
        timestamps: true,
      }
    );
  }
}

export { Marriage, MarriageAttributes, MarriageCreationAttributes };
