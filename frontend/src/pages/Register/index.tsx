import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "../../components/Input";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import { iUserRequest } from "../../interfaces/user.interface";
import { StyledRegisterContainer } from "./style";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRequest>();

  const [isSeller, setisSeller] = useState(false);

  const onSubmit = (data: iUserRequest) => {
    const { street, zipCode, number, city, state, complement } = data;

    const adress = { street, zipCode, number, city, state, complement };

    data.isAdm = isSeller;

    console.log(data);
    console.log(adress)
  };

  return (
    <>
      <NavBar />
      <StyledRegisterContainer>
        <div>
          <div>
            <h2>Cadastro</h2>
            <p>Informações pessoais</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="name"
                title="Nome"
                register={register}
                placeholder="Ex: Samuel Leão"
              />
              <Input
                id="email"
                title="Email"
                register={register}
                type="email"
                placeholder="Ex: samuel@kenzie.com.br"
              />
              <InputMask
                id="cpf"
                title="CPF"
                register={register}
                placeholder="000.000.000-00"
                mask="999.999.999-99"
              />
              <InputMask
                id="phone_number"
                title="Celular"
                register={register}
                placeholder="(DDD) 90000-0000"
                mask="(99) 99999-9999"
              />
              <InputMask
                id="birth_date"
                title="Data de nascimento"
                register={register}
                placeholder="00/00/00"
                mask="99/99/99"
              />
              <Input
                id="description_user"
                title="Descrição"
                register={register}
                placeholder="description_user"
              />
              <p>Informações de endereço</p>
              <InputMask
                id="zipCode"
                title="CEP"
                register={register}
                placeholder="00000.000"
                mask="99999.99"
              />
              <Input
                id="state"
                title="Estado"
                register={register}
                placeholder="Digitar Estado"
              />
              <Input
                id="city"
                title="Cidade"
                register={register}
                placeholder="Digitar cidade"
              />
              <Input
                id="street"
                title="Rua"
                register={register}
                placeholder="Digitar senha"
              />

              <Input
                id="number"
                title="Número"
                register={register}
                placeholder="Digitar número"
              />
              <Input
                id="complement"
                title="Complemento"
                register={register}
                placeholder="Ex: apart 307"
              />

              
              <input type="text" {...register('bob')} />

              <p>Tipo de conta</p>
              <div>
                <input
                  type="button"
                  value="Comprador"
                  onClick={() => {
                    setisSeller(false);
                  }}
                />

                <input
                  type="button"
                  value="Anunciante"
                  onClick={() => {
                    setisSeller(true);
                  }}
                />
              </div>

              <Input
                id="password"
                title="Nome"
                register={register}
                placeholder=""
                type="password"
              />
              <Input
                id="confirm_password"
                title="confirm_password"
                register={register}
                placeholder="confirm_password"
                type="password"
              />
              <button type="submit">Finalizar cadastro</button>
            </form>
          </div>
        </div>
      </StyledRegisterContainer>
    </>
  );
};
export default Register;
