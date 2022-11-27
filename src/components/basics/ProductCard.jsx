const ProductCard = ({ product, AddProductCart }) => {
  return (
    <div className="card" style={{ width: "13rem", margin: "1rem" }}>
      <img
        src={product?.image}
        className="card-img-top"
        alt={product?.name}
        style={{ width: "10rem", margin: "auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product?.name} </h5>
        <p className="card-text">{product?.description}</p>
        <b>$ {product?.price}</b>
        <hr />
        <b className="mt-2">
          Stock: <span className="fw-light">{product?.stock}</span>
        </b>
        <button
          className="btn btn-primary mt-2"
          onClick={(e) => AddProductCart(e, product._id)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
