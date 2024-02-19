
import './index.css'
import HomePage from "./Pages/HomePage/index.js";
import Input from "./components/Input/Input.jsx";
import {useState} from "react";

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleChangePassword = (e) =>{
    setPassword(e.target.value)
  }
  const handleChangeName = (e) =>{
    setName(e.target.value)
  }

  return (
    <>
    <div className='container'>
      <Input name='name' label='Enter your full name' onChange={handleChangeName} placeholder='Full name'  type='text' value={name} />
      <Input name='password' label='Enter your full password'  onChange={handleChangePassword} placeholder='Password'  type='password'  value={password} />
      <Input name='email' onChange={handleChangePassword} placeholder='Email'  type='email'  value='' />

    </div>

      <HomePage />
    </>
  )
}

export default App
