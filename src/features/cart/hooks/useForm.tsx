import { useState } from "react";
import { useAppContext } from "../../../common/hooks/useAppContext";

// spanglish, hay que uniformizar el idioma
type FormFields = {
  nombres: string;
  apellidos: string;
  distrito: string;
  direccion: string;
  referencia: string;
  celular: string;
};

export const useForm = () => {
  const { state, dispatch } = useAppContext();
  const [isModalOpen, setModalOpen] = useState(false);
  
  const [formData, setFormData] = useState<FormFields>({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    referencia: "",
    celular: "",
  });
  const [errors, setErrors] = useState<Partial<FormFields>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    const newErrors: Partial<FormFields> = {};
    // estos regex podr'ian estar en otro archivo para centralizarlos y usarlos en otro caso de uso
    const lettersRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
    const numbersRegex = /^[0-9]+$/;

    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof FormFields].trim();
  
      if (!value) {
        newErrors[key as keyof FormFields] = "Campo Obligatorio";
      } else {

        // no usemos el texto de manera directa debemos tipar estas validaciones para evitar errores al escribir
        if ((key === "nombres" || key === "apellidos") && !lettersRegex.test(value)) {
          newErrors[key as keyof FormFields] = "Solo se permiten letras";
        }
  
        if (key === "celular" && !numbersRegex.test(value)) {
          newErrors[key as keyof FormFields] = "Solo se permiten números";
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setModalOpen(true);
      console.log(formData);
      dispatch({ type: "EMPTY_CART" });
      setFormData({
        nombres: "",
        apellidos: "",
        distrito: "",
        direccion: "",
        referencia: "",
        celular: "",
      });
    } else {
      console.log("Errores:", errors);
    }
  };

  const isEnabledButtonForm = state.cart.length === 0;

  return {
    handleSubmit,
    formData,
    handleInputChange,
    errors,
    isEnabledButtonForm,
    isModalOpen,
    setModalOpen,
  };
};
