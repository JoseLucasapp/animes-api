import request from 'supertest'
import { app } from '../../../app'

export const CreateAnimeTest = () => describe('Create new anime', () => {
    it('Should create new anime', async () => {
        const data = await request(app).post('/animes').send({ name: 'Yu Yu Hakusho', episodes: 112 })

        expect(data.status).toBe(201)
    })
})