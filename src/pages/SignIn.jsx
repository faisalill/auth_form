import React from 'react'

export const SignIn = () => {
  return (
    <div>
      <div className="pages">
        <div className='form-bg p-8 flex flex-col gap-3 justify-center'>
        <h1 className="absolute top-7 left-32 font-bold ">Fill up the details</h1>
        <h1 className="font-bold">Email:</h1>
        <input className="input-form" />
        <h1 className="font-bold">Password</h1>
        <input className="input-form" />
        <button className="relative left-16 top-8 bg-blue-400 rounded-md font-bold w-44 h-7">Submit</button>
        </div>
      </div>
    </div>
  )
}
