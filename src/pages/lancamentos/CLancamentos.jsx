import React, { useEffect, useState } from 'react';
import CardSerie from '../../componentes/card/CardIndex';
import axios from 'axios';

export default function Lancamentos() {

    const [series, setSeries] = useState([])

    useEffect( () => { load() }, [] )

    async function load() {
        try {
            const resposta = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=d0594e0ecdf3d472c9f1da1f9916ffd4&language=pt-BR")
            setSeries(resposta.data.results)
            console.log(resposta.data.results)
        } catch (erro) {
            console.log(erro)
        }
    }
    return (
        
        <div className="content">
            {series.map( (serie) => <CardSerie key ={serie.id} serie ={serie} /> )}
            
        </div>
    );

    
    
}

