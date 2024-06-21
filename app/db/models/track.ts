const { Sequelize, DataTypes } = require('sequelize');
import sequelize from "../connection";

export const Track = sequelize.define(
    'Tracks',
    {
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
    },
    {
        timestamps: false
    },
);