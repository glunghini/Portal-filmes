import CardContainer from "../components/CardContainer"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"

export default function Home(){
    return(
        <>
        <CardContainer titulo = 'Filmes antigos'>
            {
                movies
                .filter( filme => (filme.ano_lancamento < 2008))
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </CardContainer>
        <CardContainer titulo = 'Melhor Avaliadps'>
            {
                movies
                .filter( filme => (filme.avaliacao > 9))
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </CardContainer>
        
        </>
    )
}