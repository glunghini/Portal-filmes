import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([]) // Inicializando como um array vazio

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
            .then(data => data.json())
            .then(res => setFilmes(res.results))
            .catch(erro => console.log(erro))
            .finally(() => console.log('Feito!'))
    }, [])
    
    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <h2>Veja o catálogo completo de filmes</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />
            <section className="">
                {
                    filmesFiltrados.map(filme => 
                        (
                            <div key={filme.id}> {/* Adicione uma chave única para cada item */}
                                <h1>{filme.title}</h1>
                                <p>{filme.vote_average}</p>
                                <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`} alt={filme.title} />
                                <img src={`https://image.tmdb.org/t/p/w185${filme.poster_path}`}/>
                            </div>
                        ))
                }
            </section>
        </>
    )
}
