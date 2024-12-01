import { Modal } from "../../../../common/components";
import { useDistricts, useForm } from "../../hooks";
import "./Form.css";

export const Form = () => {
  
  const {
    handleSubmit,
    formData,
    handleInputChange,
    errors,
    isModalOpen,
    setModalOpen,
    isEnabledButtonForm
  } = useForm();
  const { districts } = useDistricts();

  return (
    <>
      <h2 className="form-title">Información de Envío</h2>
      <form className="shipping-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nombres</label>
          <input
            type="text"
            id="firstName"
            placeholder="Ingresa tus nombres"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <small className="error">{errors.firstName}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Apellidos</label>
          <input
            type="text"
            id="lastName"
            placeholder="Ingresa tus apellidos"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <small className="error">{errors.lastName}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="district">Distrito</label>
          <select
            id="district"
            value={formData.district}
            onChange={handleInputChange}
          >
            <option value="">Selecciona tu distrito</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          {errors.district && (
            <small className="error">{errors.district}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="direction">Dirección</label>
          <input
            type="text"
            id="direction"
            placeholder="Ingresa tu dirección"
            value={formData.direction}
            onChange={handleInputChange}
          />
          {errors.direction && (
            <small className="error">{errors.direction}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="reference">Referencia</label>
          <input
            type="text"
            id="reference"
            placeholder="Referencia de tu dirección"
            value={formData.reference}
            onChange={handleInputChange}
          />
          {errors.reference && (
            <small className="error">{errors.reference}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cellphone">Celular</label>
          <input
            type="tel"
            id="cellphone"
            placeholder="Ingresa tu número de celular"
            value={formData.cellphone}
            maxLength={9}
            minLength={9}
            onChange={handleInputChange}
          />
          {errors.cellphone && <small className="error">{errors.cellphone}</small>}
        </div>

        <button
          disabled={isEnabledButtonForm}
          type="submit"
          className="buy-btn"
        >
          Comprar
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="¡Muy bien!"
        description="Pedido registrado con exito."
      />
    </>
  );
};
