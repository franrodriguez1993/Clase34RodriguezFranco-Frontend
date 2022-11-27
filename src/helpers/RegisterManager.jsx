import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchManager } from "../helpers/FetchManager";
import { URL_API } from "./URL";

const RegisterManager = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  /** HANDLE CHANGE DEL FORM **/
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /** HANDLE SUBMIT REGISTER **/
  const HSRegister = (e) => {
    e.preventDefault();
    //Validación:
    if (
      !form?.nombre.trim() ||
      !form?.apellido.trim() ||
      !form?.email.trim() ||
      !form?.password.trim() ||
      !form?.direccion.trim() ||
      !form?.telefono.trim()
    )
      return setErrors("Por favor complete todos los campos.");

    //Si todo está bien:
    FetchManager.postData(`${URL_API}/user/register`, form).then((res) => {
      setForm(initialState);
      navigate("/login");
    });
    setErrors(false);
  };

  return { handleChange, HSRegister, form, errors };
};

export default RegisterManager;
