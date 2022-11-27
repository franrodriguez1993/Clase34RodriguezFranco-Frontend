import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const LoginRoute = () => {
  const { HLogin } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container-lg d-flex justify-content-center">
      {/* INPUT EMAIL */}
      <form
        className="m-5"
        onSubmit={(e) => {
          HLogin(e, username, password);
          setPassword("");
          setUsername("");
        }}
      >
        <h2 className="text-center m-3 fw-bolder">Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={(e) => setUsername(e.target.value)}
            aria-describedby="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginRoute;
