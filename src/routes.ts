import { Request, Response, Router } from "express";
import { createAnimeController } from "./useCases/animes/CreateAnime";

const router = Router()

router.post('/animes', (request: Request, response: Response) => {
    return createAnimeController
})

export { router }