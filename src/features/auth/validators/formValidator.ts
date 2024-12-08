import * as yup from "yup";

export const formLoginSchema = yup
  .object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup
      .string()
      .min(3, "La contraseña debe tener al menos 3 caracteres")
      .required("La contraseña es obligatoria"),
  })
  .required();
