import * as yup from "yup";

const schemaInputComments = yup.object().shape({
  comments: yup.string(),
});

export default schemaInputComments;
