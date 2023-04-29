import { Request, Response } from "express";
import { GetAllAnimesUseCase } from "./GetAllAnimesUseCase";

export class GetAllAnimesController {
    constructor(private getAllAnimesUseCase: GetAllAnimesUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const animes = await this.getAllAnimesUseCase.execute()
            return response.status(200).json(animes)
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}