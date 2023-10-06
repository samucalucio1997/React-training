import { useState } from 'react'
import api from '../ComApi/api'
import { Navigate } from 'react-router-dom'
import './Cadastro.css'


export function Cadastro(){
    const [login,setLogin] = useState('')
    const [senha,setSenha] = useState('')
    const [cnpj,setCnpj] = useState('')
    const [razao,setRazao] = useState('')
    const [nome_Fantasia,setFantasia] = useState('')

    
    async function handleMain(){
         try {
            await api.post(`/root/cadastroPJ`,{
                login:login,
                senha:senha
            })


         } catch (error) {
            
         }

    }
    
    
    return(
        <>
          <div className="Container">
              <div className="">
                  <input type='text' placeholder='Login de usuáriuo'
                  onChange={e => setLogin(e.target.value)}/>
              </div>
              <div className="">
                  <input type='text' placeholder='Senha'
                  onChange={e => setSenha(e.target.value)}/>
              </div>
              <button onClick={handleMain}>
                Cadastrar
              </button>
          </div>
        
        
        </>
    )
}