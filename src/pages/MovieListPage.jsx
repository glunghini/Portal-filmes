import { useState } from "react"
import movies from '../data/movies.json'
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){

    const [search, setSearch] = useState('')

    const handleSearch = (event) =>{
        setSearch((event.target.value))
    }
    const filmesFiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))
    return(
        <>
        <h2>Veja o catálogo completo de filmes</h2>
        <input
        className="text-black"
        type="text" 
        id="search"
        value={search} 
        onChange={handleSearch}/>
        <section className="flex">
         {
                filmesFiltrados > 0 ?
                filmesFiltrados
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
                :
                <p>Filme não encontrado</p>
            }
        </section>
        </>
    )
}