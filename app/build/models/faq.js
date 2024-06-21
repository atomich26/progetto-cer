"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faq = void 0;
const { Sequelize, DataTypes } = require('sequelize');
const database_1 = require("../database");
exports.Faq = database_1.connection.define('faqs', {
    // Model attributes are defined here
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false
});
