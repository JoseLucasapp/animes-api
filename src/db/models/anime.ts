import { Model, DataTypes } from 'sequelize'
import db from '../connection';

interface AnimeAttributes {
    id: number;
    name: string;
    episodes: number;
}

export class AnimeModel extends Model<AnimeAttributes> { }

AnimeModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        episodes: {
            type: DataTypes.INTEGER
        }

    }, {
    sequelize: db,
    tableName: 'animes'
}
)