import { SimplePokemon } from '@interfaces/index';

interface Props {
  params: {
    id: string;
  };
}

const getPokemon = async (id:string):Promise<SimplePokemon> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache'
    }
  );
  const data = await response?.json();  
  return data;
};

export default async function PokemonDetailPage ({ params }: Props) {

  const pokemon:SimplePokemon = await getPokemon(params.id);

  return (
    <div className="mx-auto mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center p-6 bg-gray-800 border-b">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`}
            alt='vacio'
            className="mx-auto"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name}</p>
        </div>
      </div>
    </div>
  );
}