import { useState } from 'react'
import api from '../ComApi/api'
import { Navigate } from 'react-router-dom'
import './Cadastro.css'


export function Cadastro(){
    const [login,setLogin] = useState('')
    const [senha,setSenha] = useState('')
    const [cnpj,setCnpj] = useState('')
    const [T, setT] = useState(false)
    const [razao,setRazao] = useState('')
    const [nome_Fantasia,setFantasia] = useState('')
    const [areaAtuacao,setAreatuacao] = useState('')
    const [tempoAtu,setTempoAtu] = useState(0)
    const [capitalSocial, setcapitalSocial] = useState(0.0)
    const [qtdFuncCLT,setQtdFunc] = useState(0)
    const [fatura, setFatura]= useState([])
    const [qtdFunc3, setqtdFunc3] = useState(0)
    const [estagirs, setEstagirs] = useState(0)
    const [nSocio, setNsocio] = useState(0)
    const [socios, setSocios] = useState('')
    const [wSite, setWsite] = useState('')
    const [insta, setInsta] = useState('')
    const [face, setFace] = useState('')
    const [twitter, setTwitter] = useState('')
    const [linkedin, setLinked] = useState('')
    const [whats, setWhats] = useState('')
    const [emails, setEmails] = useState('')

    async function handleMain(){
         try {
            await api.post(`/root/cadastroPJ`,{
                login:login,
                senha:senha
            }).catch(err => console.log(err))
         
          } catch (error) {
            
          }
          handleMain2()  
    }
    
    async function handleMain2(){
      try {
        await api.get(`/root/Auth`,{
          headers:{
            login:login,
            senha:senha
          }
        })
      

        await api.post(`/root/cadastroEm`,{
          cnpj:cnpj,
          razaoSocial:razao,
          nome_Fantasia:nome_Fantasia,
          areaAtuacao:areaAtuacao,
          tempoAtu:tempoAtu,
          capitalSocial:capitalSocial,
          qtdFuncCLT:qtdFuncCLT,
          fatura:fatura,
          qtdFunc3:qtdFunc3,
          estagirs:estagirs,
          nSocio:nSocio,
          socios:socios,
          wSite:wSite,
          insta:insta,
          face:face,
          twitter:twitter,
          linkedin:linkedin,
          whats:whats,
          email:emails
        }).then(e => {
          if(e){
            setT(true)
          }
        }).catch(err => console.log(err))
      } catch (error) {
        
      }
    }
    
    return(
        <>
          <div className="Container">
              <form>
               <div class="form-group">
                 <label for="exampleInputEmail1">Login</label>
                 <input type="email" onChange={e => setLogin(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Crie seu login"/>
               </div>
               <div class="form-group">
                 <label for="exampleInputPassword1">Senha</label>
                 <input type="password" onChange={e => setSenha(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Crie uma senha"/>
               </div>
               <div class="form-group">
                 <label for="exampleInputPassword1">Cnpj da empresa</label>
                 <input type="text" onChange={e => setCnpj(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="informe o cnpj"/>
               </div>
               <div class="form-group">
                 <label for="exampleInputPassword1">Razão da empresa</label>
                 <input type="text" onChange={e => setRazao(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Razão de ser da empresa"/>
               </div> 
               
               <div class="form-group">
                 <label for="exampleInputPassword1">Nome da empresa</label>
                 <input type="text" onChange={e => setFantasia(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="informe o nome da empresa"/>
               </div>   

               <div class="form-group">
                 <label for="exampleInputPassword1">Área de atuação</label>
                 <input type="text" onChange={e => setAreatuacao(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Área de atuação"/>
               </div> 

               <div class="form-group">
                 <label for="exampleInputPassword1">Tempo de atuação</label>
                 <input type="text" onChange={e => setTempoAtu(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="tempo no mercado"/>
               </div>


               <div class="form-group">
                 <label for="exampleInputPassword1">capitalSocial</label>
                 <input type="text" onChange={e => setcapitalSocial(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="capital social"/>
               </div>
                 
               <div class="form-group">
                 <label for="exampleInputPassword1">Quantidade de funcionários</label>
                 <input type="text" onChange={e => setQtdFunc(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="informe a quantidade de funcionários"/>
               </div>
                 
               <div class="form-group">
                 <label for="exampleInputPassword1">Quantidade de funcionários tercerizados</label>
                 <input type="text" onChange={e => setqtdFunc3(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="informe a quantidade de funcionários"/>
               </div>
                
               <div class="form-group">
                 <label for="exampleInputPassword1">O número de estagiários</label>
                 <input type="text" onChange={e => setEstagirs(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="quantidade de estagiários"/>
               </div>   

               <div class="form-group">
                 <label for="exampleInputPassword1">Número de sócios</label>
                 <input type="text" onChange={e => setNsocio(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="quantidade de Sócios"/>
               </div>
            
               <div class="form-group">
                 <label for="exampleInputPassword1">Nome dos sócios</label>
                 <input type="text" onChange={e => setSocios(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Sócio 1, Sócio 2, ..., Sócio N"/>
               </div>

               <div class="form-group">
                 <label for="exampleInputPassword1">Web site</label>
                 <input type="text" onChange={e => setWsite(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="endereço do site oficial"/>
               </div>

               <div class="form-group">
                 <label for="exampleInputPassword1">Instagram</label>
                 <input type="text" onChange={e => setInsta(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="O instagram da empresa"/>
               </div>

               <div class="form-group">
                 <label for="exampleInputPassword1">Facebook</label>
                 <input type="text" onChange={e => setFace(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="O facebook da empresa"/>
               </div>

               <div class="form-group">
                 <label for="exampleInputPassword1">Twitter</label>
                 <input type="text" onChange={e => setTwitter(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="O twitter da empresa"/>
               </div>   

               <div class="form-group">
                 <label for="exampleInputPassword1">Linkedin</label>
                 <input type="text" onChange={e => setLinked(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="O linkedin da empresa"/>
               </div>

               <div class="form-group">
                 <label for="exampleInputPassword1">Número de whatsApp</label>
                 <input type="text" onChange={e => setWhats(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="O whatsApp da empresa"/>
               </div> 

               <div class="form-group">
                 <label for="exampleInputPassword1">Email da empresa</label>
                 <input type="text" onChange={e => setEmails(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Email da empresa"/>
               </div>           

               </form>
               <div className='acionar'>
                  <button type="submit" onClick={handleMain} class="btn btn-primary">Salvar</button>
               </div>
               {T&&<Navigate to ="/Empre"/>}
          </div>
         
        
        </>
    )
}