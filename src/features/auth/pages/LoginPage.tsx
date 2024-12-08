import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { ModalContent } from "@/common/components/Modal/ModalContent";
import { LocalStorageKeys } from "@/common/constants";
import { RoutePages } from "@/common/routes";
import { Form, FormRecoveryPassword } from "../components";
import { UserErrorResponse, UserResponse } from "../interfaces/responses/user";
import { mapperUserResponseToUser } from "../mappers/user";
import { getAuthentication } from "../services";
import { isUserError } from "../utils";
import { formLoginSchema } from "../validators";
import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const methods = useForm({ resolver: yupResolver(formLoginSchema) });

  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleAuthenticate = methods.handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const response: UserResponse | UserErrorResponse =
        await getAuthentication(data);

      if (isUserError(response)) {
        toast.error("Credenciales incorrectas!");
        return;
      }

      const { token, ...restUser } = mapperUserResponseToUser(
        response as UserResponse
      );

      /*
       * Se está separando para mas adelante solo desearliazar
       * el token y no todo el objeto del usuario
       */
      localStorage.setItem(LocalStorageKeys.token, token);
      localStorage.setItem(
        LocalStorageKeys.information,
        JSON.stringify(restUser)
      );

      navigate(RoutePages.Init);
    } catch (error) {
      toast.error("Ops, error con el servidor!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  });

  const handleForgetMyPassword = () => {
    setIsModal(true);
  };

  const handleValidForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Se acaba de enviar el correo!', {
      description: 'Revise su correo para seguir los pasos!'
    });
    setIsModal(false);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Iniciar Sesión</h2>

          <FormProvider {...methods}>
            <Form onAuthenticate={handleAuthenticate} isLoading={isLoading} />
            <span
              className="container__forget"
              onClick={handleForgetMyPassword}
            >
              Olvidé mi contraseña
            </span>
          </FormProvider>
        </div>
      </div>

      <ModalContent
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        title="Resetea tu contraseña"
        description="Ingresa tu correo electronico"
        onAction={() => {}}
      >
        <FormRecoveryPassword onValidForm={handleValidForm} onCloseModal={() => setIsModal(false)} />
      </ModalContent>
    </>
  );
};

export default LoginPage;
