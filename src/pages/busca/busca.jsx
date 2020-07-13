import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import CardSerie from '../../componentes/card/CardIndex';




export default function Busca(props) {

    const [series, setSeries] = useState([])
    const urlAPI = "https://api.themoviedb.org/3/search/tv" +
        props.location.search +
        "&api_key=d0594e0ecdf3d472c9f1da1f9916ffd4&language=pt-BR"



    async function load() {
        try {
            const resposta = await axios.get(urlAPI)
            setSeries(resposta.data.results)
            console.log(props.location)
        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {load();}, [props.location.search]);
    return (


        <Fragment>

            <div className="content">
                {series.map((serie) => <CardSerie key={serie.id} serie={serie} />)}

            </div>
        </Fragment>
    );

}

