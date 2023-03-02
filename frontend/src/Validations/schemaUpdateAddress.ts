import * as yup from "yup";

const schemaUpdateAddress = yup.object().shape({
    street: yup.string(),
    zipCode: yup.string(),
    number:  yup.string(),
    city: yup.string(),
    state: yup.string(),
    complement: yup.string()
})

export default schemaUpdateAddress