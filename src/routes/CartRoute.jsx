import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CartCard from "../components/basics/CartCard";
import { UserContext } from "../context/UserProvider";
import { FetchManager } from "../helpers/FetchManager";
import { URL_API } from "../helpers/URL";
const CartRoute = () => {
  const [carrito, setCarrito] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  /**  TRAER LOS PRODUCTOS DEL CARRITO DE LA DB  **/
  useEffect(() => {
    if (!user) return;
    FetchManager.getData(`${URL_API}/carrito/${user?._id}`).then((res) => {
      if (res.status === 200) {
        setCarrito(res.data.products);
      }
    });
  }, [user]);

  /**  ENVIAR SOLICITUD DE COMPRA  **/
  const buyProducts = (e) => {
    e.preventDefault();
    if (carrito.length === 0) return;
    FetchManager.postData(`${URL_API}/carrito/comprar/${user?._id}`, {});
    navigate("/");
  };
  return (
    <div className="container-lg">
      <h1 className="fw-bolder text-center m-5">Mi carrito</h1>
      {user ? (
        <section className="container-lg d-flex flex-column align-items-center">
          {carrito?.length !== 0 &&
            carrito?.map((p) => <CartCard key={p._id} product={p} />)}
          <button className="btn btn-dark" onClick={buyProducts}>
            Comprar
          </button>
        </section>
      ) : (
        <div>
          <p className="m-5 text-center fw-bolder">
            Inicia sesión para ver tu carrito
          </p>
        </div>
      )}
    </div>
  );
};
export default CartRoute;
