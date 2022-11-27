import RegisterManager from "../helpers/RegisterManager";
const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  telefono: "",
  edad: "",
  direccion: "",
};
const RegisterRoute = () => {
  const { HSRegister, handleChange, form, errors } =
    RegisterManager(initialState);
  return (
    <>
      <div className="container-lg d-flex justify-content-center">
        <form className="m-5" onSubmit={HSRegister}>
          <h2 className="fw-bolder text-center m-3">Registrarse</h2>
          {/* INPUT NOMBRE */}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              onChange={handleChange}
              value={form.nombre || ""}
              aria-describedby="emailHelp"
            />
          </div>
          {/* INPUT APELLIDO */}
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              onChange={handleChange}
              value={form.apellido || ""}
              aria-describedby="emailHelp"
            />
          </div>
          {/* INPUT EMAIL */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email || ""}
              aria-describedby="email"
            />
          </div>
          {/* INPUT PASSWORD */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={form.password || ""}
              aria-describedby="password"
            />
          </div>
          {/* INPUT EDAD */}
          <div className="mb-3">
            <label htmlFor="edad" className="form-label">
              Edad
            </label>
            <input
              type="number"
              className="form-control"
              id="edad"
              name="edad"
              onChange={handleChange}
              value={form.edad || ""}
              aria-describedby="edad"
            />
          </div>
          {/* INPUT DIRECCION */}
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              name="direccion"
              onChange={handleChange}
              value={form.direccion || ""}
              aria-describedby="direccion"
            />
          </div>
          {/* INPUT TELEFONO */}
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              onChange={handleChange}
              value={form.telefono || ""}
              aria-describedby="telefono"
            />
          </div>
          {errors && <div className="alert alert-danger">{errors} </div>}
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};
export default RegisterRoute;
