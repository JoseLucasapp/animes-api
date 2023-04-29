import { Request, Response } from "express";
import { CreateAnimeUseCase } from "./CreateAnimeUseCase";

export class CreateAnimeController {
    constructor(private createAnimeUseCase: CreateAnimeUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, episodes } = request.body;

        try {
            await this.createAnimeUseCase.execute({ name, episodes })
            return response.status(201).json({})
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}