import * as yup from "yup";

const schemaLoginUser = yup.object().shape({

    email: yup
    .string()
    .required("Informe seu email cadastrado"),

    password: yup
    .string()
    .required("Informe sua senha")
})

export default schemaLoginUser