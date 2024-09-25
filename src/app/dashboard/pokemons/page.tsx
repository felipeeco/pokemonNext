import { PokemonResponse } from '@interfaces/index';
import { SimplePokemon } from '@interfaces/index';
import { PokemonCard } from '@components/PokemonCard';

const getPokemons = async ( limit = 150, offset = 0):Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data : PokemonResponse = await response.json();
  const pokemons = data.results.map(pokemon => ({
    id: Number(pokemon.url.split('/').at(-2)),
    name: pokemon.name,
  }));

  //throw new Error('Error fetching pokemons');

  return pokemons;
};

export default async function PokemonsPage() {

  const pokemons = await getPokemons();

  return (
    <div className="flex flex-wrap">
      {Array.isArray(pokemons) && pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} id={pokemon.id.toString()} name={pokemon.name} />
      ))}
    </div>
  );
}