
import {Request, Response} from 'express'
import createAdvertsService from '../../services/adverts/create_adverts.service'

const createAdvertsController = async (request: Request, response: Response) => {
    const adverts = request.body

    const newAdverts = await createAdvertsService(adverts)

    return response.status(201).json(newAdverts)
}

export default createAdvertsController



