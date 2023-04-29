import { PostgresAnimesRepository } from "../../../repositories/implementations/PostgresAnimesRepository";
import { GetAllAnimesController } from "./GetAllAnimesController";
import { GetAllAnimesUseCase } from "./GetAllAnimesUseCase";

const postgresAnimesRepository = new PostgresAnimesRepository()

const getAllAnimesUseCase = new GetAllAnimesUseCase(postgresAnimesRepository)

const getAllAnimesController = new GetAllAnimesController(getAllAnimesUseCase)

export { getAllAnimesController, getAllAnimesUseCase }