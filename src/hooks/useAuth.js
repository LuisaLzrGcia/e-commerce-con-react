import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
const API_URL = import.meta.env.VITE_API_URL;

function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [nameUser, setNameUser] = useState("Cargando...");
  const [emailUser, setEmailUser] = useState("Cargando...");
  const [phoneUser, setPhoneUser] = useState("0-000-000-000");
  const [addressUser, setAddressUser] = useState("Cargando...");

  const getAuth = async () => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const idUser = decodedToken.sub;
    const userData = await getUser(idUser);
    if (userData) {
      setUserName(userData.username);
      setNameUser(
        String(userData.name.firstname + " " + userData.name.lastname)
      );
      setEmailUser(userData.email);
      setPhoneUser(userData.phone);
      setAddressUser(
        String(
          userData.address.number +
            " " +
            userData.address.street +
            ", " +
            userData.address.city
        )
      );
      setUserData(userData);
      setIsAuth(true);
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  };

  async function getUser(idUser) {
    try {
      const response = await fetch(`${API_URL}/users/${idUser}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error en la petición");
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    getAuth();
  }, []);

  return {
    isAuth,
    userName,
    userData,
    getAuth,
    logout,
    nameUser,
    emailUser,
    phoneUser,
    addressUser,
  };
}

export default useAuth;
