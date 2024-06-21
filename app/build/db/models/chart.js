"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = void 0;
const { Sequelize, DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../connection"));
exports.Chart = connection_1.default.define('Charts', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});
