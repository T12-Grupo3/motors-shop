import { iLoginRequest } from "../../interfaces/user.interface";
import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar";
import { ButtonGoRegister, ButtonSubmitLogin, ContainerLogin, FormLogin, InputLogin, ParagraphLogin } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import schemaLoginUser from "../../Validations/schemaLoginUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom'
import EditPasswordModal from "../../modals/EditPasswordModal";


const LoginPage = () =>{
    const {api_signin_user} = useContext(UserContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
      } = useForm<iLoginRequest>({
        resolver: yupResolver(schemaLoginUser),
      });

    return(
        <>
            <NavBar />
            <ContainerLogin>
                <FormLogin onSubmit={handleSubmit(api_signin_user)}>
                    <ParagraphLogin>Login</ParagraphLogin>
                    <label>Usuário</label>
                    <InputLogin 
                        id="email"
                        title="Email"
                        {...register('email')}
                        placeholder="Digitar usuário"
                    />
                    <label>Senha</label>
                    <InputLogin 
                        id="password"
                        title="Password"
                        type="password"
                        {...register('password')}
                        placeholder="Digitar senha"
                    />
                    <div className="DivAnchor">
                        <EditPasswordModal />
                    </div>
                    <ButtonSubmitLogin type="submit">Entrar</ButtonSubmitLogin>
                    <div className="DivParagraph">
                        <p>Ainda não possui conta?</p>
                    </div>
                    <ButtonGoRegister onClick={() => navigate("/register", { replace: true })}>Cadastrar</ButtonGoRegister>
                </FormLogin>

            </ContainerLogin>

        </>
    )
}

export default LoginPage