"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
const { Sequelize, DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../connection"));
exports.Track = connection_1.default.define('Tracks', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    embedded: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    played: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
});
