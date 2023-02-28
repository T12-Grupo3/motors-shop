import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            adverts: {
                uuid: string
            }
        }
    }
}

import { IUserRequest } from "../../interfaces/users"

declare global {
    namespace Express {
        interface Request {
            user: {
                id: string
                isAdm: boolean
                email:string
            }
        }
    }
}

declare global {
    namespace Express {
        interface Request {
            userEmail: string
            newUser: IUserUpdateRequest
        }
    }
} 