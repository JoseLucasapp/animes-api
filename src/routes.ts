import { Request, Response, Router } from "express";
import { createAnimeController } from "./useCases/animes/CreateAnime";
import { getAllAnimesController } from "./useCases/animes/GetAllAnimes";

const router = Router()

router.post('/animes', (request: Request, response: Response) => {
    return createAnimeController.handle(request, response)
})
router.get('/animes', (request: Request, response: Response) => {
    return getAllAnimesController.handle(request, response)
})

export { router }