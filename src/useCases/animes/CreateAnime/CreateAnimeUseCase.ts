import { Anime } from "../../../entities/animes";
import { IAnimeRepository } from "../../../repositories/IAnimeRepository";
import { ICreateAnimeRequestDTO } from "./CreateAnimeDTO";

export class CreateAnimeUseCase {
    constructor(
        private animesRepository: IAnimeRepository
    ) { }
    async execute(data: ICreateAnimeRequestDTO) {
        const user = new Anime(data)

        await this.animesRepository.save(user)
    }
}