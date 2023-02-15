export interface IAdvertsRequest {
    title_adverts: string,
    year_adverts: string,
    type_adverts: string,
    kilometers_adverts: string,
    description_adverts: string
}

export interface IAdverts {
    id: string
    title_adverts: string,
    year_adverts: string,
    type_adverts: string,
    kilometers_adverts: string,
    description_adverts: string,
    createdAt: Date,
    updatedAt: Date,
    isAvailable: boolean
}


