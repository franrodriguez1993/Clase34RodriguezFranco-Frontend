import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import defaultImage from "../img/defaultImage.png";
import { FetchManager } from "../helpers/FetchManager";
import { URL_API, URL_FILES } from "../helpers/URL";
const ProfileRoute = () => {
  const { user } = useContext(UserContext);
  const [image, setImage] = useState({ preview: "", data: "" });

  /** FUNCIÓN PARA ESTABLECER STATE IMAGE**/
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  /** HANDLE SUBIR FOTO**/
  const HUploadPhoto = (e) => {
    e.preventDefault();
    //validamos que no venga vacío:
    if (image.data === "") return;
    let formdata = new FormData();
    formdata.append("avatar", image.data);
    FetchManager.UploadFiles(
      `${URL_API}/user/avatar/${user?._id}`,
      formdata
    ).then((res) => {
      console.log(res);
      setImage(null);
    });
  };
  return (
    <div className="container-lg d-flex flex-column align-items-center">
      <h1 className="fw-bolder m-3">Perfil</h1>
      <article className="w-50">
        <img
          src={
            image?.preview ||
            (user?.avatar && `${URL_FILES}${user.avatar}`) ||
            defaultImage
          }
          className="m-4"
          style={{
            width: "9rem",
            height: "9rem",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <form className="m-2" onSubmit={(e) => HUploadPhoto(e)}>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleFileChange}
            accept="image/*"
          />
          <button className="btn btn-primary m-2">Subir foto</button>
        </form>
        <p>
          Nombre: <span>{user?.nombre} </span>
        </p>
        <p>
          Apellido: <span>{user?.apellido} </span>
        </p>
        <p>
          Email: <span>{user?.email} </span>
        </p>
        <p>
          Edad: <span>{user?.edad} </span>
        </p>
        <p>
          Dirección: <span>{user?.direccion} </span>
        </p>
        <p>
          Teléfono: <span>{user?.telefono} </span>
        </p>
      </article>
    </div>
  );
};
export default ProfileRoute;
