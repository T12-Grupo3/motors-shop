import { Adverts } from "../../entities/adverts.entity";
import AppDataSource from "../../data-source";
import { IAdvertsUpdate } from "../../interfaces/adverts";

const updateAdvertService = async ({
  id,
  title_adverts,
  year_adverts,
  type_adverts,
  type_veicule,
  price_adverts,
  kilometers_adverts,
  description_adverts,
  cover_image_adverts,
}: IAdvertsUpdate) => {
  const advertRepository = AppDataSource.getRepository(Adverts);

  const findAdvert = await advertRepository.findOneBy({ id });

  const advertUpdated = {
    title_adverts: title_adverts || findAdvert!.title_adverts,
    year_adverts,
    type_adverts,
    type_veicule,
    price_adverts,
    kilometers_adverts,
    description_adverts,
    cover_image_adverts,
  };

  await advertRepository.update(findAdvert!.id, advertUpdated);

  const advert = await advertRepository.findOneBy({
    id,
  });

  const { ...rest } = advert!;
  return rest;
};

export default updateAdvertService;
