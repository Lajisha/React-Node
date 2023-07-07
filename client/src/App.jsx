import './App.css'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
