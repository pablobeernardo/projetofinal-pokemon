import { useEffect, useState } from "react"
import Pokemon from "./component";
import { Container, PokemonStyle, PokemonList } from "./style"

export default function Home(){

    const [pokemons, setPokemons] = useState<any[]>([])

    function getPokemons(){
        var pokemonPromises = [];
        for(var i=1;i<11;i++){
            pokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
        }
        console.log(pokemonPromises)
        setPokemons(pokemonPromises)
    }

    useEffect(()=>getPokemons(), [])

    return(
        <Container>
            <h1>Pokemón</h1>
            <div>
                <PokemonList>
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Pokemon promissed_pokemon={pokemon}>
                                    
                                </Pokemon>
                            )
                        })
                    }
                        
                </PokemonList>
            </div>
        </Container>
    )
}