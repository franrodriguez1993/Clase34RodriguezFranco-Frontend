import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { FetchManager } from "../helpers/FetchManager";
import { URL_API } from "../helpers/URL";
const UserContext = createContext();
const UserProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem("session");
    console.log(session);
    if (!session) return;
    else {
      FetchManager.getData(`${URL_API}/user/logindata`).then((res) => {
        if (res.status !== 200) {
          localStorage.removeItem("session");
          navigate("/login");
        } else {
          setUser(res.data);

          navigate("/");
        }
      });
    }
  }, []);

  /**HANDLE LOGIN**/
  const HLogin = (e, username, password) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;
    //Si todo está bien logueamos:
    FetchManager.Login(`${URL_API}/user/login`, username, password).then(
      (res) => {
        console.log(res);
        if (res.status !== 200) return console.log(res.msg);
        localStorage.setItem("session", "true");
        FetchManager.getData(`${URL_API}/user/logindata`).then((res) => {
          console.log(res);
          if (res.status !== 200) {
            localStorage.removeItem("session");
            navigate("/login");
          } else {
            console.log(res);
            setUser(res.data);
            navigate("/");
          }
        });
      }
    );
  };
  /**HANDLE LOGOUT**/
  const HLogout = (e) => {
    e.preventDefault();
    FetchManager.postData(`${URL_API}/user/logout`).then((res) => {
      if (res.status === 200) {
        setUser(null);
        localStorage.removeItem("session");
      }
    });
  };

  return (
    <UserContext.Provider value={{ HLogin, user, HLogout }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContext };
export default UserProvider;
