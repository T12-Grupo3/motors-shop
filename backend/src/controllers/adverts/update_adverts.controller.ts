import { Request, Response } from "express";
import updateAdvertService from "../../services/adverts/update_adverts.service";

const updateAdvertController = async (req: Request, res: Response) => {
  const {
    title_adverts,
    year_adverts,
    type_adverts,
    type_veicule,
    price_adverts,
    kilometers_adverts,
    description_adverts,
  } = req.body;
  const { id } = req.params;

  if (req.body.id != undefined || req.body.createdAt != undefined) {
    return res.status(401).json({
      error: "invalid field",
      message: "This field can not be updated!",
    });
  }

  const advert = await updateAdvertService({
    id,
    title_adverts,
    year_adverts,
    type_adverts,
    type_veicule,
    price_adverts,
    kilometers_adverts,
    description_adverts,
  });

  return res.status(200).json({ message: "Service updated!", advert: advert });
};

export default updateAdvertController;
