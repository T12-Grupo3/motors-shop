import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { Addresses } from "../../entities/addresses.entity";


const createUserService = async({name, email, password, cpf, phone_number, description_user, birth_date, isAdm, address }:IUserRequest): Promise<User> => {

const userRepository = AppDataSource.getRepository(User);
const users = await userRepository.find();

const emailAlreadyExists = users.find((user) => user.email === email);

if(emailAlreadyExists){
    throw new AppError("Email already exists" )
}

 if(address.zipCode.length > 9){
   throw new AppError("Invalid zip code" )
     }

 const addressesRepository = AppDataSource.getRepository(Addresses);
 const findAddresses = await addressesRepository.findOne({
    where: {
        street: address.street, 
        zipCode: address.zipCode,
        number: address.number,
        city: address.city,
        state: address.state,
        complement: address.complement
    }
 });
 
 const createAddresses = addressesRepository.create({
        street: address.street, 
        zipCode: address.zipCode,
        number: address.number,
        city: address.city,
        state: address.state,
        complement: address.complement
 })


await addressesRepository.save(createAddresses)

    const user = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password, 10)
    user.cpf = cpf
    user.phone_number = phone_number
    user.description_user = description_user
    user.birth_date = birth_date
    user.isAdm = isAdm
    user.createdAt= new Date()
    user.updatedAt= new Date()
    user.address = createAddresses

userRepository.create(user)

await userRepository.save(user)

return user;


}

export default createUserService