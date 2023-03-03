import * as yup from "yup";

const schemaPasswordChange = yup.object().shape({

    email: yup
    .string()
    .email(),

    password: yup
    .string()
    .required("Campo obrigatorio")
    .matches(/^(?=.*\d)/, "Deve conter pelo menos um número")
    .matches(/^(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
    .matches(/^(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
    .matches(/^(?=.*[$*&@#])/, "Deve conter ao menos um caractere especial")
    .min(8, "Senha deve conter ao menos 8 caracteres"),

    password_confirm: yup
    .string()
    .required("Campo obrigatorio")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
})

export default schemaPasswordChange