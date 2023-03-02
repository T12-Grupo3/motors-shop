import * as yup from 'yup';

const schemaInputComments = yup.object().shape({
    comments: yup
    .string(),
    
    advertsId:  yup
    .string(),

    userId: yup
    .string(),
    
})

export default schemaInputComments