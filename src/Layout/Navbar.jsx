import CardButton from "../components/CardButton/CardButton";
import useAuth from "../hooks/useAuth"
import { useState, useEffect } from "react";


function Navbar({ children }) {
  const { isAuth, logout, userName } = useAuth()

  useEffect(() => {
    isAuth
  }, [])

  return (
    <>

      <div className="px-10 z-99	bg-gray-800 absolute top-0 left-0 right-0  text-white h-20 flex items-center justify-between w-full">
        <div className="w-1/4 p-3 text-left text-5xl  flex justify-center align-middle">
          <a href="/" className="hover:text-indigo-300 transition duration-700 ease-in-out">
            {`<Market/>`}
          </a></div>
        <div className="flex items-center w-1/2 justify-evenly">
          <a href="ropa_hombre">
            <div className="p-3 rounded-lg hover:bg-gray-700">Men</div>
          </a>
          <a href="ropa_mujer">
            <div className="p-3 rounded-lg hover:bg-gray-700">Women</div>
          </a>
          <a href="about-us">
            <div className="p-3 rounded-lg hover:bg-gray-700">About us</div>
          </a>
          <a href="contac-us">
            <div className="p-3 rounded-lg hover:bg-gray-700">Contact us</div>
          </a>
        </div>
        <div className="flex items-center justify-between w-1/4">
          {
            isAuth ? (
              <>
                <a href="/user" className="flex p-3 rounded-lg hover:bg-gray-700">
                  <p className="pr-1">{userName}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
                <a href="" onClick={logout}>
                  <div className="p-3 rounded-lg hover:bg-gray-700">Logout</div>
                </a>
              </>
            ) : (
              <>
                <a href="login">
                  <div className="p-3 rounded-lg  hover:bg-gray-700">Login</div>
                </a>
                <a href="signup">
                <div className="p-3 rounded-lg  hover:bg-gray-700">Signup</div>
                </a>
              </>
            )
          }
          <div className="p-3 rounded-lg">
            <CardButton />
          </div>
        </div>
      </div>
      <div className="w-screen h-auto">
        {children}
      </div>

    </>
  );
}

export default Navbar;
