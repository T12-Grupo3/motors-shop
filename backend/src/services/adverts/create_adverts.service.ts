import AppDataSource from "../../data-source"
import { Adverts } from "../../entities/adverts.entity"
import { IAdverts } from "../../interfaces/adverts"

const createAdvertsServices = async ({title_adverts, year_adverts, type_adverts, kilometers_adverts, description_adverts, isAvailable, createdAt_adverts, updatedAt_adverts}: IAdverts) =>{
     const advertsRepository = AppDataSource.getRepository(Adverts)

     const newAdverts = new Adverts()
     newAdverts.title_adverts = title_adverts,
     newAdverts.year_adverts = year_adverts,
     newAdverts.type_adverts = type_adverts,
     newAdverts.kilometers_adverts = kilometers_adverts,
     newAdverts.description_adverts = description_adverts,
     newAdverts.isAvailable = isAvailable
     newAdverts.createdAt_adverts = createdAt_adverts,
     newAdverts.updatedAt_adverts = updatedAt_adverts

     advertsRepository.create(newAdverts)
     await advertsRepository.save(newAdverts)

     return newAdverts


}

export default createAdvertsServices

