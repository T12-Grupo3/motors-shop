import * as yup from "yup";

const schemaRegisterAdverts = yup.object().shape({
  title_adverts: yup
    .string()
    .required("Campo obrigatório")
    .max(200, "Limite de 200 caracteres"),

  year_adverts: yup
    .string()
    .required("Campo obrigatório")
    .max(280, "Limite de 280 caracteres"),

  price_adverts: yup.number().required("Campo obrigatório"),

  kilometers_adverts: yup
    .string()
    .required("Campo obrigatório")
    .max(280, "Limite de 280 caracteres"),

  description_adverts: yup
    .string()
    .required("Campo obrigatório")
    .max(280, "Limite de 280 caracteres"),

  cover_image_adverts: yup.string(),
});

export default schemaRegisterAdverts;
