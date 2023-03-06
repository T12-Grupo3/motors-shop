import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";
import { IAdverts, IAdvertsDelete } from "../../interfaces/adverts";

const deleteCommentsService = async (id: string, userId:string ): Promise<string> => {
  const commentsRepository = AppDataSource.getRepository(Comments);

  const deletedComments = await commentsRepository.findOne({
    where: {id:id
    } ,
    relations:{
      user: true
    }
    });
  
  if (!deletedComments) {
    throw new AppError("Comment not found");
  }
  
  
  if( deletedComments.user.id !== userId){
    throw new AppError("User  Unauthorized");
  }
    
  await commentsRepository.delete({ id });
    
    return "Comments deleted";



};

export default deleteCommentsService;