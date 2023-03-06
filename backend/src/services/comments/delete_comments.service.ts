import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";
import { IAdverts, IAdvertsDelete } from "../../interfaces/adverts";

const deleteCommentsService = async (id: string ): Promise<string> => {
  const commentsRepository = AppDataSource.getRepository(Comments);

  const deletedComments = await commentsRepository.findOneBy({ id });

  if (!deletedComments) {
    throw new AppError("Comment not found");
  }

  await commentsRepository.delete({ id });

  return "Comments deleted";
};

export default deleteCommentsService;