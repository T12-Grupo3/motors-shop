import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { Comments } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IAdverts } from "../../interfaces/adverts";
import { IUser } from "../../interfaces/users";

const listCommentsIdService = async (commentsId: string ): Promise<Comments> => {
  const commentsRepository = AppDataSource.getRepository(Comments);
  const findComments = await commentsRepository.findOne({
    where: {
      id: commentsId,
    },
    relations: {
      adverts: true,
      user: true,
    },
  });

  if (!findComments) {
    throw new AppError("Comments not found", 404);
  }

  return findComments;
};

export default listCommentsIdService;
