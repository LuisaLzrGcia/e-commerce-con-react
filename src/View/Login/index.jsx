import LoginView from './LoginView'
import jwtDecode from 'jwt-decode'
import useAuth from "../../hooks/useAuth"
const API_URL = import.meta.env.VITE_API_URL;


function Login() {
  const { isAuth, getAuth } = useAuth();

  const handledLoginSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const formData = Object.fromEntries(form)
    const { password, username } = formData

    const token = await loginUser(username, password)

    if (token !== null && token.token) {
      localStorage.setItem("token", token.token)
      const token2 = localStorage.getItem('token')
      const decodedToken = jwtDecode(token2)
      console.log(decodedToken)
      getAuth()
      window.location = 'carrito'
    } else {
      alert("El usuario no existe o las credenciales son incorrectas.")
    }
  }

  async function loginUser(usernameForm, passwordForm) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: usernameForm,
          password: passwordForm
        })
      });

      if (!response.ok) {
        throw new Error('Error en la petición');
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }


  return (
    <>
      <LoginView handledLoginSubmit={handledLoginSubmit} />
    </>
  )
}

export default Login
