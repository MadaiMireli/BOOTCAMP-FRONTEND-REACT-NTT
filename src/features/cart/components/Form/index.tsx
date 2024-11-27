// si bien valida el formulario si se ponen espacios en blanco al inicio, luego letras y se envia el endpoint recibe esta informaci'on con todo y espacios en blanco
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
          <label htmlFor="nombres">Nombres</label>
          <input
            type="text"
            id="nombres"
            placeholder="Ingresa tus nombres"
            value={formData.nombres}
            onChange={handleInputChange}
          />
          {errors.nombres && <small className="error">{errors.nombres}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            placeholder="Ingresa tus apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
          />
          {errors.apellidos && (
            <small className="error">{errors.apellidos}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="distrito">Distrito</label>
          <select
            id="distrito"
            value={formData.distrito}
            onChange={handleInputChange}
          >
            <option value="">Selecciona tu distrito</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          {errors.distrito && (
            <small className="error">{errors.distrito}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            placeholder="Ingresa tu dirección"
            value={formData.direccion}
            onChange={handleInputChange}
          />
          {errors.direccion && (
            <small className="error">{errors.direccion}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="referencia">Referencia</label>
          <input
            type="text"
            id="referencia"
            placeholder="Referencia de tu dirección"
            value={formData.referencia}
            onChange={handleInputChange}
          />
          {errors.referencia && (
            <small className="error">{errors.referencia}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="celular">Celular</label>
          <input
            type="tel"
            id="celular"
            placeholder="Ingresa tu número de celular"
            value={formData.celular}
            maxLength={9}
            minLength={9}
            onChange={handleInputChange}
          />
          {errors.celular && <small className="error">{errors.celular}</small>}
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
