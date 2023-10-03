import './navbar.css'

export function Navbar(){
    return(
        <>
          <nav>
             <a href="/"><h1>Home</h1></a>
             <ul>
                <li>Pesquisas em destaque</li>
                <li>Áreas de pesquisa</li>
                <li>Prioridades e empreendendorismo</li> 
             </ul>
          </nav>
        </>
    )
}