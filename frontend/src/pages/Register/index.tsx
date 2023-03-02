import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "../../components/InputMask";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import {
  iUserRegisterRecieve,
  iUserRequest,
} from "../../interfaces/user.interface";
import {
  StyledFormContainer,
  StyledFormError,
  StyledRegisterButton,
  StyledRegisterButtons,
  StyledRegisterConfirm,
  StyledRegisterContainer,
  StyledRegisterDiv,
  StyledRegisterSharedField,
  StyledSharedError,
  StyleRegisterAdm,
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaRegisterUsers from "../../Validations/schemaRegisterUsers";
import { UserContext } from "../../Context/UserContext";
import Footer from "../../components/Footer";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegisterRecieve>({
    resolver: yupResolver(schemaRegisterUsers),
  });

  const [isAdm, setisAdm] = useState(false);
  const { api_create_user } = useContext(UserContext);

  const onSubmit = async ({
    name,
    email,
    phone_number,
    password,
    cpf,
    description_user,
    birth_date,
    street,
    zipCode,
    number,
    city,
    state,
    complement,
  }: iUserRegisterRecieve) => {
    const address = { street, zipCode, number, city, state, complement };

    const user: iUserRequest = {
      name,
      email,
      phone_number,
      password,
      cpf,
      description_user,
      birth_date,
      isAdm,
      address,
    };
    console.log(user)

    api_create_user(user);
  };

  console.log(isAdm);

  return (
    <>
      <NavBar />
      <StyledRegisterContainer>
        <StyledRegisterDiv>
          <StyledFormContainer>
            <h2>Cadastro</h2>
            <p>Informações pessoais</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledFormError>
                <Input
                  id="name"
                  title="Nome"
                  register={register}
                  placeholder="Ex: Samuel Leão"
                />
                <span>{errors.name?.message}</span>
              </StyledFormError>
              <StyledFormError>
                <Input
                  id="email"
                  title="Email"
                  register={register}
                  type="email"
                  placeholder="Ex: samuel@kenzie.com.br"
                />
                <span>{errors.email?.message}</span>
              </StyledFormError>
              <StyledFormError>
                <InputMask
                  id="cpf"
                  title="CPF"
                  register={register}
                  placeholder="000.000.000-00"
                  mask="999.999.999-99"
                />
                <span>{errors.cpf?.message}</span>
              </StyledFormError>
              <StyledFormError>
                <InputMask
                  id="phone_number"
                  title="Celular"
                  register={register}
                  placeholder="(DDD) 90000-0000"
                  mask="(99) 99999-9999"
                />
                <span>{errors.phone_number?.message}</span>
              </StyledFormError>
              <StyledFormError>
                <InputMask
                  id="birth_date"
                  title="Data de nascimento"
                  register={register}
                  placeholder="YYYY-MMM-DD"
                  mask="9999-99-99"
                />
                <span>{errors.birth_date?.message}</span>
              </StyledFormError>
              <StyledFormError>
                <Input
                  id="description_user"
                  title="Descrição"
                  register={register}
                  placeholder="Digitar descrição"
                />
                <span>{errors.description_user?.message}</span>
              </StyledFormError>
              <p>Informações de endereço</p>
              <StyledFormError>
                <InputMask
                  id="zipCode"
                  title="CEP"
                  register={register}
                  placeholder="00000.000"
                  mask="99999.999"
                />
                <span>{errors.zipCode?.message}</span>
              </StyledFormError>

              <StyledRegisterSharedField>
                <StyledSharedError>
                  <Input
                    id="state"
                    title="Estado"
                    register={register}
                    placeholder="Digitar Estado"
                  />
                  <span>{errors.state?.message}</span>
                </StyledSharedError>

                <StyledSharedError>
                  <Input
                    id="city"
                    title="Cidade"
                    register={register}
                    placeholder="Digitar cidade"
                  />
                  <span>{errors.city?.message}</span>
                </StyledSharedError>
              </StyledRegisterSharedField>

              <StyledFormError>
                <Input
                  id="street"
                  title="Rua"
                  register={register}
                  placeholder="Digitar senha"
                />
                <span>{errors.street?.message}</span>
              </StyledFormError>

              <StyledRegisterSharedField>
                <StyledSharedError>
                  <Input
                    id="number"
                    title="Número"
                    register={register}
                    placeholder="Digitar número"
                  />
                  <span>{errors.number?.message}</span>
                </StyledSharedError>

                <StyledSharedError>
                  <Input
                    id="complement"
                    title="Complemento"
                    register={register}
                    placeholder="Ex: apart 307"
                  />
                  <span>{errors.complement?.message}</span>
                </StyledSharedError>
              </StyledRegisterSharedField>

              <p>Tipo de conta</p>
              <StyledRegisterButtons>
                <StyledRegisterButton
                  type="button"
                  value="Comprador"
                  onClick={() => {
                    setisAdm(false);
                  }}
                  isAdm={isAdm}
                />

                <StyleRegisterAdm
                  type="button"
                  value="Anunciante"
                  onClick={() => {
                    setisAdm(true);
                  }}
                  isAdm={isAdm}
                />
              </StyledRegisterButtons>

              <StyledFormError>
                <Input
                  id="password"
                  title="Senha"
                  register={register}
                  placeholder="Digitar senha"
                  type="password"
                />
                <span>{errors.password?.message}</span>
              </StyledFormError>

              <StyledFormError>
                <Input
                  id="password_confirm"
                  title="Confirmar senha"
                  register={register}
                  placeholder="Digitar senha"
                  type="password"
                />
                <span>{errors.password_confirm?.message}</span>
              </StyledFormError>

              <StyledRegisterConfirm>
                <button type="submit">Finalizar cadastro</button>
              </StyledRegisterConfirm>
            </form>
          </StyledFormContainer>
        </StyledRegisterDiv>
      </StyledRegisterContainer>

      <Footer />
    </>
  );
};
export default Register;
