import * as yup from 'yup';

const schemaUpdateAdverts = yup.object().shape({
    type_adverts: yup
    .string()
    .required('Campo obrigatório'),

    title_adverts: yup
    .string()
    .required('Campo obrigatório'),

    year_adverts: yup
    .string()
    .required('Campo obrigatório'),

    price_adverts: yup
    .number()
    .required("Campo obrigatório"),

    type_veicule: yup
    .string()
    .required('Campo obrigatório'),

    kilometers_adverts: yup
    .string()
    .required('Campo obrigatório'),

    description_adverts: yup
    .string()
    .required('Campo obrigatório'),

    image_adverts: yup
    .string()
    .required('Adicione pelo menos uma imagem'),

    isAvailable: yup
    .boolean()
    .required("Seu anúncio ainda está disponível?")

})

export default schemaUpdateAdverts