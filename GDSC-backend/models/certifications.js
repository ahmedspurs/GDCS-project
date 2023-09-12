const sequelize = require("../config/connection.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Certifications extends Model {}
Certifications.init(
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

      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: "email",
      },
    courseId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "courses",
        key: "id",
      },
      field: "course_id",
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
    modelName: "certifications",
    freezeTableName: true,
    tableName: "certifications",
    timestamps: false,
  }
);
Certifications.associate = ({ courses }) => {
  Certifications.belongsTo(courses, {
    foreignKey: "courseId",
    as: "course",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = () => Certifications;
