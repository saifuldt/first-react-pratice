import React from 'react';
import Header from './Header';

class Login extends React.Component {
  render() {
    return (  
        <div>
        <div>
        < Header />
        </div>
        <div>
    <form className='mt-[100px] flex gap-4 justify-center items-center flex-col'>
        <h1 className='text-center font-[700] text-3xl'>Login</h1>
    <div className='flex justify-center items-center'>
    <label for='user'>User ID:</label>
    <input className='border-2 pl-2' type='text' placeholder='user ID' name='user' id='user' />
    
    </div>
    <div className='flex justify-center items-center'>
    <label for='passwor'>Password:</label>
    <input className='border-2 pl-2' type='password' placeholder='Password' name='passwoed' id='user' />
    </div>
   
    
</form>
</div> 
</div>
    )
  }
}



export default Login;