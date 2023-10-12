import { useEffect, useState } from "react";
import api from '../ComApi/api';
import Chart from "react-google-charts";
import { Link } from "react-router-dom";

export function Cnpj() {
  const [fatura, setFatura] = useState([]);
  const [Ano,setAno]=useState([])
  const [Data,setData] = useState([])
  let FormatedData = []

  useEffect(() => {
    const fetchData = async () => {
              await api.get('/root/FatuAnuais').then( (e) => {
          setFatura(e.data)
        })
        .catch(err => console.log(err));
    };
    const Felpa = async () => {
          await api.get('/root/FaturaAnual').then( (e)=>{
            setAno(e.data)
          })
          .catch(err => console.log(err));
    };
    const grafith = async () => {
      await api.get('/root/Grafith').then(e => setData(e.data))
      .catch(err => console.log(err))
    }

    fetchData(); // Chame a função assíncrona para buscar dados após a montagem do componente
    Felpa();
    grafith();
  }, []);

  
  // console.log(Data)
  
  const options = {
    title: "Tempo x Faturamento",
    chartArea: { width: '50%' }, // Tamanho da área do gráfico
    hAxis: {
      title: 'Eixo X', // Rótulo do eixo X
    },
    vAxis: {
      title: 'Eixo Y', // Rótulo do eixo Y
      minValue: 0, // Valor mínimo no eixo Y
    },
    legend: 'none', // Exibe ou oculta a legenda
  }
 
  FormatedData = Data.map(item => [item.mes, item.faturamento]);
  FormatedData.unshift(["mes", "faturamento"]);
  
  // const data=[
  //   ["mes", "ano", "faturamento"]
  // ]
  // let arrIndeces = Object.keys(Data)
  // let arrValues = Object.values(Data)

  // for (let index = 1; index < 28; index++) {
  //   data[index] = arrValues.map((item) => {
  //     return item[index]
  //   })
  // }

  // data.unshift(arrIndeces)
  
  
  
  
  return (
    <div className="conteudo">
      <h1>Tabela de faturamento nos 3 últimos anos</h1>
      <main>
        <p>2021: {fatura[0]}</p>
        <p>2022:{fatura[1]}</p>
        <span>2023:{fatura[2]}</span>
      </main>
      <br/>
      <br/>
      <div class="card">
            <div class="card-body">
              <Link to="/Empre">Registrar faturamento</Link>
            </div>
      </div>
      <br/>
      <br/>
      <div className="Tebela ">
           <h1>Ultimo trimestre</h1>
           {Ano.map((item, index) => (
    <div key={index} className="conteTab">
      <span>{item.mes}:</span>
      <span>{item.faturamento}</span>
    </div>
  ))}
      <Chart
      chartType="Line"
      width="81%"
      height="300px"
      data={FormatedData}
      options={options}
      chartLanguage="pt-BR" 
      />
      </div>
    </div>
  );
}