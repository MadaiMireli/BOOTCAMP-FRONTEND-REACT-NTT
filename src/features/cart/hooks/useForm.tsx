import { useState } from "react";
import { useAppContext } from "../../../common/hooks/useAppContext";
import { FormFieldKeys, FormValidationMessages, lettersRegex, numbersRegex } from "../utils";

type FormFields = {
  firstName: string;
  lastName: string;
  district: string;
  direction: string;
  reference: string;
  cellphone: string;
};

export const useForm = () => {
  const { state, dispatch } = useAppContext();
  const [isModalOpen, setModalOpen] = useState(false);
  
  const [formData, setFormData] = useState<FormFields>({
    firstName: "",
    lastName: "",
    district: "",
    direction: "",
    reference: "",
    cellphone: "",
  });
  const [errors, setErrors] = useState<Partial<FormFields>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    const trimmedValue = value.trim();
    setFormData({ ...formData, [id]: trimmedValue });
    
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    const newErrors: Partial<FormFields> = {};

    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof FormFields].trim();
  
      if (!value) {
        newErrors[key as keyof FormFields] = FormValidationMessages.required;
      } else {

        if ((key === FormFieldKeys.FIRST_NAME || key === FormFieldKeys.LAST_NAME) && !lettersRegex.test(value)) {
          newErrors[key as keyof FormFields] = FormValidationMessages.onlyLetters;
        }
  
        if (key === FormFieldKeys.CELLPHONE && !numbersRegex.test(value)) {
          newErrors[key as keyof FormFields] = FormValidationMessages.onlyNumbers;
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
        firstName: "",
        lastName: "",
        district: "",
        direction: "",
        reference: "",
        cellphone: "",
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
