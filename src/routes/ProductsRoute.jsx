import { useContext } from "react";
import { useState } from "react";
import ProductCard from "../components/basics/ProductCard";
import { UserContext } from "../context/UserProvider";
import { FetchManager } from "../helpers/FetchManager";
import { URL_API } from "../helpers/URL";

const ProductRoutes = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);
  /** TRAEMOS LOS PRODUCTOS DE LA DB**/
  useState(() => {
    FetchManager.getData(`${URL_API}/productos`).then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
      }
    });
  }, []);

  /** AGREGAR PRODUCTOS AL CARRITO  **/
  const AddProductCart = (e, product) => {
    e.preventDefault();
    //Si no hay un usuario logueado.
    if (!user) return;
    //Si no hay ningún producto seleccionado, no hacemos nada:
    if (!product.trim()) return;
    //Agregamos el producto:
    FetchManager.updateData(
      `${URL_API}/carrito/agregar/${user?._id}/${product}`,
      {}
    ).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="container-lg">
      <h1 className="fw-bolder text-center m-4">Productos</h1>
      <section className="container-lg d-flex flex-wrap">
        {products?.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            AddProductCart={AddProductCart}
          />
        ))}
      </section>
    </div>
  );
};
export default ProductRoutes;
