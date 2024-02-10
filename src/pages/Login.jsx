import React from 'react';

const Login = () => {
  return <div className='login'>
    <input  type='text' className='text' id='text'  placeholder='JohnDoe'  />
    <input  type='password' className='password' id='password'  placeholder='*******'  />
    <button>Log In</button>
  </div>;
};

export default Login;
