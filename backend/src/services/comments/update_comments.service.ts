import AppDataSource from "../../data-source";
import { IImageAdvertsRequest } from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { AppError } from "../../errors/appError";
import { IComments, ICommentsRequest, ICommentsUpdate } from "../../interfaces/comments";
import { Comments } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";


// const updateCommentsService = async (commentsID:string, userID:string) => {
    
//     const commentsRepository = AppDataSource.getRepository(Comments)
//     const userRepository = AppDataSource.getRepository(User)

//     const commentsExists = await commentsRepository.findOneBy({
//         id: commentsID
//     })
    
//     if(!commentsExists){
//         throw new AppError("Comment not found", 404)
//     }

//     const userExists = await userRepository.findOneBy({
//         id: userID
//     })

   
  
//     if(userExists){
//         await commentsRepository.update(
//             commentsID,
//             {        
              
                
//                 user:userExists,                    
//             }
//         )
//     }    

//     return commentsExists
// }

// export default updateCommentsService






const updateCommentsService = async({ comments }: ICommentsUpdate, id: string): Promise<ICommentsUpdate>  => {

    const commentsRepository = AppDataSource.getRepository(Comments)

    const findComments = await commentsRepository.findOneBy({
        id
    })

    if(!findComments){
        throw new AppError('Comments not found', 404)    
    }

    

    const commentsUpdated = {
        comments: comments || findComments!.comments,
        };
    
      await commentsRepository.update(findComments!.id, commentsUpdated);
    
      const comment = await commentsRepository.findOneBy({
        id,
      });
    
      const { ...rest } = comment!;
      return rest;
}

export default updateCommentsService