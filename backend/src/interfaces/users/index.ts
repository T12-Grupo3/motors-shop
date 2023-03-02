export interface IAddressesRequest {
    street: string
    zipCode: string
    number?: string
    city: string
    state: string
    complement: string
}


export interface IUserRequest {
    name: string
    email: string
    password: string
    cpf: string
    phone_number: string
    description_user: string
    birth_date: Date
    isAdm: boolean
    address: IAddressesRequest
}

export interface IUser {
    name: string
    email: string
    password: string
    cpf: string
    phone_number: string
    description_user: string
    birth_date: Date
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name: string
    email: string
    password: string
    cpf: string
    phone_number: string
    description_user: string
    birth_date: Date
    address: IAddressesRequest
}



