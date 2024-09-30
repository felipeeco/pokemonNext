import { SimplePokemon } from '@interfaces/index';

interface Props {
  params: {
    name: string;
  };
}

const getPokemon = async (name: string): Promise<SimplePokemon> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`, {
      cache: 'force-cache'
    }
  );
  const data = await response?.json();
  return data;
};

export async function generateMetadata({ params }: Props) {
  const pokemon = await getPokemon(params.name);
  return {
    title: `${pokemon.id} - ${pokemon.name}`
  };
}

export default async function PokemonDetailPage({ params }: Props) {
  const pokemon = await getPokemon(params.name);
  return (
    <div className="mx-auto mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center p-6 bg-gray-800 border-b">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            className="mx-auto"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name}</p>
        </div>
      </div>
    </div>
  );
}