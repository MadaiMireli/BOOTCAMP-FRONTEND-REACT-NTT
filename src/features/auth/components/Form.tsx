import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface FormProps {
  isLoading: boolean
  onAuthenticate: () => void;
}
export const Form: FC<FormProps> = ({ isLoading, onAuthenticate }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <form onSubmit={onAuthenticate}>
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" {...register("username")} />
        {errors.username && <span>{errors.username.message as string}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password && <span>{errors.password.message as string}</span>}
      </div>

      <button 
        type="submit" 
        className="button-form"
        disabled={isLoading}
      >
        {!isLoading ? 'Vamos' : 'Cargando ...'}
      </button>
    </form>
  );
};
