import * as yup from "yup";

const schemaRegisterUsers = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),

  email: yup.string().required("Campo obrigatório"),

  phone_number: yup.string().required("Campo obrigatório"),

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

  cpf: yup.string().required("Campo obrigatório"),

  description_user: yup.string().required("Campo obrigatório"),

  birth_date: yup.string().required("Campo obrigatório"),

  street: yup.string().required("Campo obrigatório"),

  zipCode: yup.string().required("Campo obrigatório"),

  number: yup.string().required("Campo obrigatório"),

  city: yup.string().required("Campo obrigatório"),

  state: yup.string().required("Campo obrigatório"),

  complement: yup.string().required("Campo obrigatório"),
});

export default schemaRegisterUsers;
