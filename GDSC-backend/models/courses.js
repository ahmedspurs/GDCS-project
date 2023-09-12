const sequelize = require("../config/connection.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Courses extends Model {}
Courses.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: "name",
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "user_id",
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
    modelName: "courses",
    freezeTableName: true,
    tableName: "courses",
    timestamps: false,
  }
);


module.exports = () => Courses;
