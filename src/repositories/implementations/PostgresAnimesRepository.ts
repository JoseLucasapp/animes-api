import { Anime } from "../../entities/animes";
import { IAnimeRepository } from "../IAnimeRepository";

export class PostgresAnimesRepository implements IAnimeRepository {

    async find(): Promise<Anime[]> {
        return await Anime.findAll()
    }

    async save(anime: Anime): Promise<void> {
        await Anime.create({ name: anime.name, episodes: anime.episodes })
    }
}