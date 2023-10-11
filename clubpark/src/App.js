import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route, Link, Navigate} from 'react-router-dom';
import api from './ComApi/api'
import './App.css'



function App() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loged, setLoged]=useState(false)
  const [empre, setEmpre] = useState([])
  
  async function handleMain() {

    try {
      const resp = await api.get('/root/Auth',{
        headers:{
          login:login,
          senha:password
        }
      }).then(e => {setLoged(e.data)})
      
      
      if(loged){
        await api.get('/root/FatuAnuais').then((e) => {
          setEmpre(e.data)
        })
      }
      
      
     
      // window.open('/Cnpj')
    } catch (error) {
      alert("Entre com login valido")
      setLogin('')
    }
  

  }


  return (
    <div className="App">
        <div className="inputPrin">
          <div className="InQuery">
            <label>login</label>
            <input
              type="text"
              placeholder="login"
              onChange={(e) => setLogin(e.target.value)}
              />
          </div>
          <div className="InQuery">
            <label>senha</label>
            <input
              type="password"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <button onClick={handleMain}>Entrar</button>
        </div>
              {loged && <Navigate to="/Cnpj" />}
              {/* empre.length==0 && loged && <Navigate to="/Empre" />*/} 
            <div className="cadastroEmp">
                <Link to="/Cadastro">Não sou cadastrado</Link>
            </div>
      </div>
  );
}

export default App;
