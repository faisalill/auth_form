import React from "react";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {redirect} from 'react-router-dom'
export const SignUp = () => {
  const schema = new yup.object().shape(
    {
      Email: yup.string().email().required("Invalid Email"),
      Password: yup.string().min(6,"Min 6 chars").max(28).required(),
      ConfirmPassword: yup.string().oneOf([yup.ref("Password")],("Not matching")).required("Min 6 chars")
    }
  )
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })
  const submitHandler = (data) =>{
    console.log(data)
    
  }
  const stringConv =  (nonString) =>{
    return nonString.toString()
  }
  return (
    <div>
      <div className="pages">
        <div className="form-bg p-8 flex flex-col gap-3 justify-center">
          <h1 className="absolute top-7 left-32 font-bold">Fill up the details</h1>
        <h1 className="font-bold">Email:</h1>
        <input className="input-form" {...register("Email")}/>
        <div className="absolute top-28 right-9 text-xs text-red-600 ">{errors.Email?.message}</div>
        <h1 className="font-bold">Password</h1>
        <input className="input-form" {...register("Password")} />
        <div className="absolute top-185 right-9 text-xs text-red-600 ">{errors.Password?.message}</div>
        <h1 className="font-bold">Confirm Password</h1>
        <input className="input-form" {...register("ConfirmPassword")} />
        <div className="absolute top-64 right-9 text-xs text-red-600 ">{errors.ConfirmPassword?.message}</div>
        <button className="relative left-16 top-3 bg-blue-400 rounded-md font-bold w-44 h-7" onClick={handleSubmit(submitHandler)}>Submit</button>
        </div>
      </div>
    </div>
  );
};
