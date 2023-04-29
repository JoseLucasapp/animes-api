import { IAnimeRepository } from "../../../repositories/IAnimeRepository";

export class GetAllAnimesUseCase {
    constructor(
        private animesRepository: IAnimeRepository
    ) { }
    async execute() {
        return await this.animesRepository.find()
    }
}