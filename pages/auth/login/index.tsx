import { useState } from "react";
import { useRouter } from "next/router";

import cookie from 'js-cookie'
import {unauthPage} from '../../../middlewares/pageAuth'
export default function index(){

    const router = useRouter()

    const [formData, setFormData] = useState({
        // name: '',
        username: '',
        // email: '',
        // nomortelpon: ''2,
        password: '',
        // address: '',
        // url: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };


    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res =  await fetch('/api/login',{
            method:"POST",
            body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },})

      if (res.ok) {
        alert("Berhasil Login");

        cookie.set('token', res.token)

        router.push('/rootadmin')

      } else {
        alert("Gagal Login");
      }
        console.log(formData);
      };
    
      return (
        <form onSubmit={handleSubmit} className="max-w-md mt-10 mx-auto border border-white p-[2em] bg-slate-200">
<h1>Admin Login</h1>
          <div className="mb-4"> 
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
         
          
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          
          {/* <div className="mb-4">
            <label htmlFor="url" className="block mb-2 text-sm font-medium text-black">
              URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div> */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      );
}

export async function getServerSideProps(ctx){
    
  await unauthPage(ctx)
     
      return {props : {}}
     
     }