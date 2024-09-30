import { PokemonResponse } from '@interfaces/index';
import { SimplePokemon } from '@interfaces/index';
import { PokemonCard } from '@components/index';

export async function generateMetadata() {
  return {
    title: 'Favorite Pokemons'
  };
}


export default function FavoritesPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Favorite pokemons</h1>
    </div>
  );
}