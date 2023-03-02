import * as yup from "yup";

const schemaUpdateProfile = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  cpf: yup.string(),
  phone_number: yup.string(),
  description_user: yup.string(),
  birth_date: yup.string(),
});

export default schemaUpdateProfile;
