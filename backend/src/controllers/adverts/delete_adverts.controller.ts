import { Request, Response } from "express";
import { Adverts } from "../../entities/adverts.entity";
import { IAdverts, IAdvertsDelete, IAdvertsUpdate } from "../../interfaces/adverts";
import deleteAdvertsService from "../../services/adverts/delete_adverts.service";

const deleteAdvertsController = async (req: Request, res: Response) => {
  const {isAvailable}: IAdvertsDelete = req.body
  const id: string = req.params.id
  const updatedAdvert = await deleteAdvertsService({isAvailable}, id)

  if(updatedAdvert instanceof Adverts){
      return res.status(204).json({mesage: "Advert alterated with sucess!", isAvailable})
  }
  return res.status(updatedAdvert[1] as number).json({
      message: updatedAdvert[0]
  })

};
export default deleteAdvertsController;
