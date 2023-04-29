import request from 'supertest'
import { app } from '../../../app'

export const GetAllAnimesTest = () => describe('Get all animes', () => {
    it('Should create new anime', async () => {
        const data = await request(app).get('/animes')

        expect(data.status).toBe(200)
    })
})