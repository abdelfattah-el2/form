import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required(),

  password: yup.string().min(5).max(18).required(),
});
export const userSchema2 = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(18).required(),
});
