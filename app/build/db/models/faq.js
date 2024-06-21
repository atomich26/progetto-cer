"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faq = void 0;
const { Sequelize, DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../connection"));
exports.Faq = connection_1.default.define('Faqs', {
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
