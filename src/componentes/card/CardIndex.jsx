import React from 'react'

export default function CardSerie({ serie }) {
    const nota = serie.vote_average.toFixed(1)
    const imgUrl = "https://image.tmdb.org/t/p/w200/"
    const data = new Date(serie.first_air_date)
    const data_lancamento = data.toLocaleDateString()
    return (

        <div className="card-serie">
            <div className="material-icons watch-later">watch_later</div>
            <div className="poster-image"
                style={{ backgroundImage: `url(${imgUrl}${serie.poster_path})` }}
                > 
                </div>

            <div className="card-detail"> </div>

            <div className="texto-card">
                <h1 className="titulo-filme">{serie.name}</h1>
                <div className="material-icons star"> grade
                </div>
                <span className="nota">{nota}</span>
                </div>
            

            <span className="data"> {data_lancamento} </span>
        </div>



    )

}