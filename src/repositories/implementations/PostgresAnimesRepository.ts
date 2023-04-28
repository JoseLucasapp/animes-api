import { Anime } from "../../entities/animes";
import { IAnimeRepository } from "../IAnimeRepository";

export class PostgresAnimesRepository implements IAnimeRepository {

    private animes: Anime[] = []
    async find(): Promise<Anime[]> {
        const animes = this.animes;
        return animes;
    }

    async save(anime: Anime): Promise<void> {
        this.animes.push(anime);
    }
}