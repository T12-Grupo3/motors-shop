import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Adverts } from "../../entities/adverts.entity";
import { User } from "../../entities/user.entity";
import { Comments } from "../../entities/comments.entity";


const listCommentsService = async ( ) => {
    const commentsRepository = AppDataSource.getRepository(Comments);
    const comments = await commentsRepository.find();

    return comments;
}

export default listCommentsService;