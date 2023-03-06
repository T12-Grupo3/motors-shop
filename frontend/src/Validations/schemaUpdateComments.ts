import * as yup from 'yup';

const schemaUpdateAdverts = yup.object().shape({
    
    comments: yup
    .string(),
    // .required('Campo obrigatório
})

export default schemaUpdateAdverts