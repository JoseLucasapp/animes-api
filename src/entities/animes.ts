import { Model, DataTypes } from 'sequelize'
import db from '../db/connection';

interface AnimeAttributes {
    id?: number;
    name: string;
    episodes: number;
}

/*export class Anime {
    public name: string
    public episodes: number;
    constructor(props: AnimeAttributes) {
        Object.assign(this, props)
    }
}*/

export class Anime extends Model<AnimeAttributes>{
    [x: string]: any;
}

Anime.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        episodes: {
            type: DataTypes.INTEGER
        }

    }, {
    sequelize: db,
    tableName: 'animes'
}
)