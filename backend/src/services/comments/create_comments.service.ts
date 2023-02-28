import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { AppError } from "../../errors/appError";
import  {IImageAdvertsCreate}  from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { Adverts } from "../../entities/adverts.entity";
import { IComments, ICommentsRequest } from "../../interfaces/comments";
import { Comments } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";



const createCommentsService = async({comments, advertsId, userId }:ICommentsRequest) => {

  const userRepository = AppDataSource.getRepository(User);
  
  const findUser = await userRepository.findOneBy({
    id: userId 
  });
  console.log("CONSOLE.LOG FINDUSER:", findUser)
  
  if (!findUser) {
      throw new AppError("User is not exists", 404);
  }


const advertsRepository = AppDataSource.getRepository(Adverts);

const findAdvert = await advertsRepository.findOneBy({

  id: advertsId 
});

if (!findAdvert) {
    throw new AppError("Advert is not exists", 404);
}



const commentsRepository = AppDataSource.getRepository(Comments);
const findAdvertsComments = await advertsRepository.createQueryBuilder('adverts')
.leftJoinAndSelect('adverts.comments', 'comments')
.where('adverts.id = :id', {id: advertsId})
.andWhere('comments.comments = :comments', {comments: comments})
.getOne()

// if(findAdvertsComments){
//     console.log("CONSOLE.LOG FINDCOMMENTS:", findAdvertsComments)
//     throw new AppError("Comments already exists",400 )
// }

// const newComments = commentsRepository.create({
//   comments: comments,
//   adverts: findAdvert,
//   user: findUser
// })

await commentsRepository.save({
  comments: comments,
  adverts: findAdvert,
  user: findUser
})

// return newComments



}

export default createCommentsService