import { FC } from "react"

interface FormRecoveryPasswordProps {
    onValidForm: (e: React.FormEvent<HTMLFormElement>) => void
    onCloseModal: () => void
}
export const FormRecoveryPassword: FC<FormRecoveryPasswordProps> = ({
    onValidForm,
    onCloseModal
}) => {
  return (
    <form onSubmit={onValidForm}>
    <input
      type="email"
      id="email"
      placeholder="Igresa tu correo"
      required
    />
    <div className="container_buttons">
      <button type="submit" className="modal-close-btn mt-children">
        Enviar
      </button>
      <span
        className="cancel-content-button mt-children"
        onClick={onCloseModal}
      >
        Cancelar
      </span>
    </div>
  </form>
  )
}
