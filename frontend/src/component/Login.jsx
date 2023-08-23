import React, { useRef } from "react"
import { useEffect } from "react"
import { useCookies } from 'react-cookie';

import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";
import Product from "./Product";


function Login() {
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const username = useRef("null");
  const password = useRef("null");
  const navigate=useNavigate()

  async function sendResponse(e) 

  { e.preventDefault()
    const response = await axios.post("http://localhost:4200/auth/api/v1/login-user", {
      username: username.current.value,
      password: password.current.value,

      
     
      
    });
    setCookie("jwt", response.data.token, {expires:new Date(Date.now() + 90 * 2 * 24 * 60 * 60 * 1000)});
            sessionStorage.setItem("jwt", response.data.token);
            localStorage.setItem("jwt",response.data.token)
 
    console.log((response.data.status));
    console.log(username.current.value, password.current.value);
    let success=response.data.status
    if(response.data.status===success){
      navigate("/product", { replace: true });}
  }
    
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://voosh.ai/static/media/VooshLogo.c64bcebd40a2d49cc591.webp"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                ref={username}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                ref={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={sendResponse} >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/add-user" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
              Register
            </a>
          </p>
        </div>
      </div>
    )
  }

  export default Login
  