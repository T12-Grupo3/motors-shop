import { iLoginRequest } from "../../interfaces/user.interface";
import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar";
import { ButtonGoRegister, ButtonSubmitLogin, ContainerLogin, FormLogin, InputLogin, ParagraphLogin } from "./styles";

const LoginPage = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iLoginRequest>();

    return(
        <>
            <NavBar />
            <ContainerLogin>
                <FormLogin>
                    <ParagraphLogin>Login</ParagraphLogin>
                    <label>Usuário</label>
                    <InputLogin 
                        id="email"
                        title="Email"
                        // register={register}
                        placeholder="Digitar usuário"
                    />
                    <label>Senha</label>
                    <InputLogin 
                        id="password"
                        title="Password"
                        // register={register}
                        placeholder="Digitar senha"
                    />
                    <div className="DivAnchor">
                        <a href="*">Esqueci minha senha</a>
                    </div>
                    <ButtonSubmitLogin>Entrar</ButtonSubmitLogin>
                    <div className="DivParagraph">
                        <p>Ainda não possui conta?</p>
                    </div>
                    <ButtonGoRegister>Cadastrar</ButtonGoRegister>
                </FormLogin>

            </ContainerLogin>

        </>
    )
}

export default LoginPage