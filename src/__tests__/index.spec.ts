import db from "../db/connection"
import { CreateAnimeTest } from "../useCases/animes/CreateAnime/CreateAnimeTest"

beforeAll(() => {
    db.authenticate()
    db.sync().then(() => console.log('Connected'))
})

afterAll(() => {
    db.close()
})

describe('Tests', () => {
    CreateAnimeTest()
})