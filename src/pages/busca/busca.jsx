import React, { useEffect, useState } from 'react';
import CardSerie from '../../componentes/card/CardIndex';
import axios from 'axios';

export default function Busca(props) {

    const [series, setSeries] = useState([])
    const urlAPI ="https://api.themoviedb.org/3/search/tv"+ props.location.search+"&api_key=d0594e0ecdf3d472c9f1da1f9916ffd4&language=pt-BR"

    useEffect( () => { load() }, [] )

    async function load() {
        try {
            const resposta = await axios.get("urlAPI")
            setSeries(resposta.data.results)
            console.log(resposta.data.results)
            console.log(props.location)
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

