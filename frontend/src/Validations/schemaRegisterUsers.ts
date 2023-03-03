import * as yup from "yup";

const schemaRegisterUsers = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),

  email: yup.string().required("Campo obrigatório").email("Email inválido"),

  phone_number: yup
    .string()
    .matches(
      /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/,
      "Telefone inválido"
    )
    .required("Campo obrigatório"),

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

  cpf: yup
    .string()
    .matches(/^\d{3}.\d{3}.\d{3}-\d{2}$/, "CPF inválido")
    .required("Campo obrigatório"),

  description_user: yup.string().required("Campo obrigatório"),

  birth_date: yup
    .date()
    .typeError("Data inválida (YYYY-MM-DD)")
    .required("Campo obrigatório"),

  street: yup.string().required("Campo obrigatório"),

  zipCode: yup
    .string()
    .matches(/^(\d{0,5}|\d{5}.\d{0,3})$/, "CEP inválido")
    .required("Campo obrigatório"),

  number: yup.string().required("Campo obrigatório"),

  city: yup.string().required("Campo obrigatório"),

  state: yup.string().required("Campo obrigatório"),

  complement: yup.string(),
});

export default schemaRegisterUsers;
