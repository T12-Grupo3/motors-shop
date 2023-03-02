import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";

const listCommentsByAdvertService = async (id_advert: string) => {
  const commentsRepository = AppDataSource.getRepository(Comments);
  const comments = await commentsRepository.find({
    where: { adverts: { id: id_advert } },
    relations: { user: true },
  });

  return comments;
};
export default listCommentsByAdvertService;
