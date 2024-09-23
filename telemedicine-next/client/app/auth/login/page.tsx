"use client";

import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

import axios from 'axios';
export default function Login() {

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues:
    {
      email: "",
      password: ""
    }
  });

  // doctor interface
  interface Doctor {
    d_id: string;
    d_name: string;
    d_chamber_address: string;
    d_specialize: string;
  }

  // appointment interface
  interface Appointment {
    appointment_id: string;
    appointment_status: string;
    consultation_notes: string;
  }

  interface loginInputObj{
    email: string,
    password: string

  }

  // const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  // const [doctorId, setDoctorId] = useState<string | null>(null);
  const [loginInput, setLoginInput] = useState<loginInputObj | null>(null);
  

    // handle login   
  // async function handleLogin() {
  //   try {
  //     const loginData = {
  //       u_email: 'fatima@gmail.com',
  //       u_password: 'qwerty123',
  //     };
  //     const response = await axios.post('http://localhost:3000/users/login', loginData, {
  //       withCredentials: true, // Include credentials in login request
  //     });
  //     const data = response.data.doctor;
  //     setDoctorData(data);
  //     setDoctorId(data.d_id);
  //     console.log(doctorId);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  const onSubmit = (data: loginInputObj) =>{
    setLoginInput(data)
    console.log(loginInput?.email)
    console.log(loginInput?.email)

  }

  // rendering doc info
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email", {required: "Please enter email", 
                              pattern: {value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                                message: "Please enter a valid email address"
                              }
                              })} placeholder='Enter email' />
            <p>{errors && errors.email?.message}</p>
          <input {...register("password", {required: "Please enter password"})} 
                              placeholder='Enter password' type='password' />
          <p>{errors && errors.password?.message}</p>

          <input type='submit' />

        </form>
    </div>
  );
}
