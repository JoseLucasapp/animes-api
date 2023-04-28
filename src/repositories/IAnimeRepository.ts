import { Anime } from "../entities/animes";

export interface IAnimeRepository {
    find(): Promise<Anime[]>;
    save(anime: Anime): Promise<void>;
}