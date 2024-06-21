const { Sequelize, DataTypes } = require('sequelize');
import sequelize from "../connection";

export const Faq = sequelize.define(
  'Faqs',
  {
    // Model attributes are defined here
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
    {
      timestamps: false
  },
);