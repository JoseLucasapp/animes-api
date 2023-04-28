import { PostgresAnimesRepository } from "../../../repositories/implementations/PostgresAnimesRepository";
import { CreateAnimeController } from "./CreateAnimeController";
import { CreateAnimeUseCase } from "./CreateAnimeUseCase";

const postgresAnimesRepository = new PostgresAnimesRepository()

const createAnimeUseCase = new CreateAnimeUseCase(postgresAnimesRepository)

const createAnimeController = new CreateAnimeController(createAnimeUseCase)

export { createAnimeController, createAnimeUseCase }