const { Sequelize, DataTypes } = require('sequelize');
import { connection } from "../database";

export const Faq = connection.define(
  'faqs',
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