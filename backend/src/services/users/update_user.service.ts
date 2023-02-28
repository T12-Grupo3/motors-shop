import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserUpdate } from "../../interfaces/users";
import bcrypt, { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { Addresses } from "../../entities/addresses.entity";

const updateUserService = async (
  {
    name,
    email,
    password,
    cpf,
    phone_number,
    description_user,
    birth_date,
    address,
  }: IUserUpdate,
  userId: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const addressesRepository = AppDataSource.getRepository(Addresses);
  const findUser = await userRepository.findOneBy({ id: userId });
  const addresses = await addressesRepository.find();

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const addressUser = addresses.find(
    (foundAddress) => foundAddress.id === findUser.address.id
  );

  await userRepository.update(userId, {
    name,
    email,
    password,
    cpf,
    phone_number,
    description_user,
    birth_date,
  });

  if (address) {
    if (!addressUser) {
      throw new AppError("Address not found", 404);
    }
    await addressesRepository.update(addressUser.id, {
      city: address.city,
      street: address.street,
      number: address.number,
      zipCode: address.zipCode,
      state: address.state,
    });
  }

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
      comments: true,
    },
  });

  return user!;
};

export default updateUserService;
