const sequelize = require("../config/connection.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Users extends Model {}
Users.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    fullName: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: "full_name",
    },
    userName: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: "user_name",
    },

    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: "email",
    },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "password",
      },
      role: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "role",
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "start_date",
      },  
        endDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "end_date",
      },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      field: "created_at",
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      field: "updated_at",
    },
  },
  {
    sequelize,
    modelName: "users",
    freezeTableName: true,
    tableName: "users",
    timestamps: false,
  }
);

module.exports = () => Users;
