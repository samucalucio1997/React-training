import { Link } from 'react-router-dom'
import './navbar.css'

export function Navbar(){
    return(
        <>
          <nav>
             <a href='/'>Home</a>
             <ul>
                <li>Pesquisas em destaque</li>
                <li><a href='https://dipeq.cnat.ifrn.edu.br/programas/' >Áreas de pesquisa</a></li>
                <li>Prioridades e empreendendorismo</li> 
             </ul>
          </nav>
        </>
    )
}