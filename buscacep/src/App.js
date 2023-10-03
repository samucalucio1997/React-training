import { useState } from 'react';
import api from './services/api'
import {ImSearch} from 'react-icons/im'
import './style.css'

function App() {
   const [Input,setInput]=useState('')
   const [Cep,setCep] = useState({})

    async function HandleEvent(){
      if(Input===''){
        alert("Preencha os campos!!")
        return 
      }

      try {
         const response = await api.get(`${Input}/json`);  
         setCep(response.data);
         setInput('');
         console.log(response.data)
      } catch (error) {
        alert("Erro na busca");
        setInput('');
      }
    }

  return (
    <div className="Conteiner">
      <h1 className="title">Buscador Cep</h1>
      <div className="In">
        <input
          type="text" placeholder="Digite seu cep aqui"
          onChange={(eve) => setInput(eve.target.value)}
        />


        <button className="search" onClick={HandleEvent}> 
          
          <ImSearch size={20} color='#808080'/>
        </button>
      </div>
       
      {Object.keys(Cep).length > 0 && (
      <main className="main">
          <h2>CEP: {Cep.cep}</h2>

          <span>{Cep.logradouro}</span>
          <span>{Cep.bairro}</span>
          <span>{Cep.ddd}</span>
          <span>{Cep.localidade} - {Cep.uf}</span>
          
      </main>
      )} 
    </div>
  );
}

export default App;
